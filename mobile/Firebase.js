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

  publisEntry(e) {
    /*
    // get next index
    var allNames = this.unfuck(await this.getAllNames());
    var n = allNames.length;
    n = n + 1;
*/
    this.writeNewPost(e.names, 'names');
    this.writeNewPost(e.authors, 'authors');
    this.writeNewPost(e.images, 'images');
    this.writeNewPost(e.tags, 'tags');
    this.writeNewPost(e.user_tags, 'user_tags');

    /*db.ref("entries/names/" + n).set({
      e.name
      user_tags: this.user_tags,
      image: this.image,
      author: this.author
    });*/
  }

  writeNewPost(data, name) {
    // A post entry.
    var postData = data;
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child(name).push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/names/' + newPostKey] = postData;

    return this.db.ref().update(updates);
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

//    console.log(allTags);

    var matches = [];
    for (var i in allTags) {
     matches.push(this.intersect(tags, allTags[i]));
    }

    var order = Array.apply(null, Array(n)).map(function (_, i) {return i;});

    /*
    order = order.sort(function(a, b) {
      return matches.indexOf(a) - matches.indexOf(b);
    });
    order = order.reverse();
    matches = matches.sort().reverse();
    //*/
    var list = [];
    for (var j = 0; j < order.length; j++)
      list.push({'order': order[j], 'matches': matches[j]});

    //2) sort:
    list.sort(function(a, b) {
      return ((a.matches < b.matches) ? -1 : ((a.matches == b.matches) ? 0 : 1));
    //Sort could be modified to, for example, sort on the age
    // if the name is the same.
});
    list.reverse();

//3) separate them back out:
for (var k = 0; k < list.length; k++) {
    order[k] = list[k].order;
    matches[k] = list[k].matches;
}
//    console.log(order);
 //   console.log(matches);

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

    //console.log(entries)

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
