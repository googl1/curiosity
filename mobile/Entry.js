import React from 'react';

class Entry {

  constructor(name, author, image, user_tags) { 
    this.name = name;
    this.author = author;
    this.image = image;
    this.user_tags = user_tags;
  }

  publish(db) {
    db.ref("entries/" + this.name).set({
      user_tags: this.user_tags,
      image: this.image,
      author: this.author
    });
  }
}
export default Entry
