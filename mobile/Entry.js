class Entry {
	constructor(name, author, image, tags, user_tags, score) { 
		this.name = name;
		this.author = author;
		this.image = image;
		this.tags = tags;
		this.user_tags = user_tags;
		this.score = score;
	}
	publishEntry(Entry e) {
  		firebase.database().ref('entries/' + name).set({
			tags: e.tags,
			user_tags: e.user_tags,
			score: e.score,
			image: e.image
			author: e.author
 		});
	}
}
