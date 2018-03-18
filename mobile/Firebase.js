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

  async publishEntry(e) {
    
    // get everything
    var allNames = this.unfuck(await this.getAllNames());
    var allAuthors = this.unfuck(await this.getAllAuthors());
    var allImages = this.unfuck(await this.getAllImages());
    var n = allNames.length;
    var allTags = this.unfuck(await this.getAllTags(n));
    var allUserTags = this.unfuck(await this.getAllUserTags(n));

    for (i in allTags)
      allTags[i] = this.unfuck(allTags[i]);
    for (i in allTags)
      allUserTags[i] = this.unfuck(allUserTags[i]);

    this.writeNewPost(allNames, 'names', e.name, n);
    this.writeNewPost(allAuthors, 'authors', e.author, n);
    this.writeNewPost(allImages, 'images', e.image, n);
    this.writeNewPost(this.makeKeyValue(allTags), 'tags', e.tags, n);
    this.writeNewPost(this.makeKeyValue(allUserTags), 'user_tags', e.user_tags, n);
  }

  makeKeyValue(a) {
    for (i in a) {
      var object = {};

      for (j in a[i]) {
        object[j] = a[i][j]
      }
      a[i] = object;
    }
    return a;
  }

  writeNewPost(data, name, e, n) {
    var object = {};

    for (var i = 0; i < n; i++) {
      object[i] = data[i];
    }
    object[n] = e;
    this.db.ref("entries1/" + name).set(object);
  }

  async getAllNames() {
    return await this.db.ref("entries/names").once("value", function(snapshot) {
      return snapshot.val();
    });
  }

  async getAllAuthors() {
    return await this.db.ref("entries/authors").once("value", function(snapshot) {
      //console.debug(snapshot.val());
      return snapshot.val();
    });
  }

  async getAllImages() {
    return await this.db.ref("entries/images").once("value", function(snapshot) {
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

  async getAllUserTags(n) {
    var tags = {};
    //console.debug(n);
    for (i = 0; i < n; i++) {
      var ref = this.db.ref("entries/user_tags/" + i);
      tags[i] =  this.unfuck(await ref.orderByChild("user_tags").once("value", function(snapshot) {
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

    // all this just to sort order and matches both by matches
    var list = [];
    for (var j = 0; j < order.length; j++)
      list.push({'order': order[j], 'matches': matches[j]});
    list.sort(function(a, b) {
      return ((a.matches < b.matches) ? -1 : ((a.matches == b.matches) ? 0 : 1));
    });
    list.reverse();
    for (var k = 0; k < list.length; k++) {
      order[k] = list[k].order;
      matches[k] = list[k].matches;
    }

    var entries = [];
    for (i in order) {
      var j = order[i];
      if (matches[i] == 0)
        break;

      var author_j = (await (this.getAuthor(j)));
      var image_j = (await this.getImage(j));
      var user_tags_j = (this.unfuck(await this.getUserTags(j)));

      entries.push(
        new Entry(allNames[j], author_j, image_j, user_tags_j));
    }

<<<<<<< HEAD
    //console.log(entries)
    console.log(entries);

=======
>>>>>>> 2d7e02969aff3a74db7d8e9ef04f53daec0ae250
    return entries;
  }

  isVarInArray (v, a) {
    return a.indexOf(v) > -1
  }

  /* str: a search string (for example "Gnocchi")
   * returns an array of Entry objects.
   * If they exist, they will be in the following order:
   * - matches with the name
   * - matches with the tags
   * (all case INsensitive)
  */ 
  async searchEntriesByString(str) {
    var allNames = this.unfuck(await this.getAllNames());
    var n = allNames.length;
    var allTags = this.unfuck(await this.getAllTags(n));

    var order = [];
    for (var i in allNames) {
      if (allNames[i].localeCompare(str) == 0)
        //exact match
        order.push(i);
    }
    for (var i in allNames) {
      if (this.isVarInArray(i, order) == false) {
        if (allNames[i].indexOf(str) != -1)
          //substring match
          order.push(i);
      }
    }

    for (var i in allNames) {
      if (this.isVarInArray(i, order) == false) {
        for (var j in allTags[i]) {
          if (allTags[i][j].indexOf(str) != -1) {
            // substring tag match
            order.push(i);
            continue;
          }
        }
      }
    }

    var entries = [];
    for (i in order) {
      var j = order[i];
      var author_j = (await (this.getAuthor(j)));
      var image_j = (await this.getImage(j));
      var user_tags_j = (this.unfuck(await this.getUserTags(j)));

      entries.push(
        new Entry(allNames[j], author_j, image_j, user_tags_j, allTags[j]));
    }


    return entries;
  }
}

export default Firebase
