const { v4: uuidv4 } = require('uuid');

class Post {
  constructor(title, description, username) {
    this.postId = uuidv4();
    this.title = title;
    this.description = description;
    this.url = 'https://source.unsplash.com/300x200';
    this.author = username;
    this.createdAt = Date.now();
  }
}

module.exports = Post;
