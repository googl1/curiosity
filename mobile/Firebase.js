import React from 'react';
import * as firebase from 'firebase';
import FirebaseConfig from './FirebaseConfig.js';
import Entry from './Entry.js';

class Firebase {
  constructor() {
    let conf  = new FirebaseConfig();
    firebase.initializeApp(conf.getConfig());
    this.db = firebase.database();
  }
  
  async getAllNames() {
    return await this.db.ref("entries/names").once("value", function(snapshot) {
      //console.debug(snapshot.val());
      return snapshot.val();
    });
  }

  async getAllTags(n) {
    var tags = {};
    //console.debug(n);
    for (i = 0; i < n; i++) {
      var ref = this.db.ref("entries/tags/" + i);
      tags[i] =  this.unfuck(await ref.orderByChild("tags").once("value", function(snapshot) {
        return snapshot.val();
      }));
    }
    return tags;
  }

  unfuck(crap) {
	  crap = JSON.stringify(crap);
	  crap = JSON.parse(crap);

    var ok = [];
	  for (var i in crap){
		  ok.push(crap[i]);
	  }
    return ok;
  }

  intersect(a1, a2) {
    var inters = a1.filter(function(n) {
      return a2.indexOf(n) !== -1;
    });
    return inters.length;
  }

  async getAuthor(i) {
    return await this.db.ref("entries/authors/" + i).once("value", function(snapshot) {
      return snapshot.val();
    });
  }


  async getImage(i) {
    return await this.db.ref("entries/images/" + i).once("value", function(snapshot) {
      //console.debug(snapshot.val());
      return snapshot.val();
    });
  }

  async getUserTags(i) {
    return await this.db.ref("entries/user_tags/" + i).once("value", function(snapshot) {
      //console.debug(snapshot.val());
      return snapshot.val();
    });
  }


  /*
   *tags: an array of strings
   * returns an array of Entry objects. Each of them matches at least one tag.
   *      They are ordered by relevance.
   */
  async searchEntriesByTags(tags) {
    var allNames = this.unfuck(await this.getAllNames());
    var n = allNames.length;
    var allTags = this.unfuck(await this.getAllTags(n));

    var matches = [];
    for (var i in allTags) {
     matches.push(this.intersect(tags, allTags[i]));
    }

    var order = Array.apply(null, Array(n)).map(function (_, i) {return i;});

    order.sort(function(a, b) {
      return matches.indexOf(a) - matches.indexOf(b);
    });
    order = order.reverse();

    var entries = [];
    for (i in order) {
      var j = order[i];
      if (matches[j] == 0)
        break;

      var author_j = (await (this.getAuthor(j)));
      var image_j = (await this.getImage(j));
      var user_tags_j = (this.unfuck(await this.getUserTags(j)));

      entries.push(
        new Entry(allNames[j], author_j, image_j, user_tags_j));
    }


    return entries;
  }

  /* str: a search string (for example "Gnocchi")
   * returns an array of Entry objects.
   * If they exist, they will be in the following order:
   * - matches with the name
   * - matches with the tags
   * (all case INsensitive)
   
  searchEntriesByString(str) {
    var allNames = this.unfuck(await this.getAllNames());
    var n = allNames.length;
    var allTags = this.unfuck(await this.getAllTags(n));

    var matches = [];

    var matches = [];
    for (var i in allTags) {
       matches.push(this.intersect(tags, allTags[i]));
    }
  }*/
}

export default Firebase
