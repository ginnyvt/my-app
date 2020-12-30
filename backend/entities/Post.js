const { v4: uuidv4 } = require('uuid');

const randomUrl = () => {
  let imgUrls = [
    'https://cdn-media-1.freecodecamp.org/images/1*QVTcnfXyMXivNu62IJ7JSg.jpeg',
    'https://dustinstout.com/wp-content/uploads/2015/06/how-to-write-a-blog-1920x1080.jpg',
    'https://www.cigionline.org/sites/default/files/styles/slideshow/public/images/landscape/iStock_digital%20concept%20map.png?itok=np5KC5-Y',
    'https://res.cloudinary.com/practicaldev/image/fetch/s--qa72YNaF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/me6sbpz893h3a6ip5zsv.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70h8cj-Z7LYOdAE5TzLFnb2KK4cG9NwPd3g&usqp=CAU',
    'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/137889383/original/74e1b24a7e52f565bd4139f2532ce2c5178a0a35/create-nodejs-server-with-rest-api.png',
  ];

  const randomIndex = Math.floor(Math.random() * imgUrls.length);
  return imgUrls[randomIndex];
};

class Post {
  constructor(title, description, username) {
    this.postId = uuidv4();
    this.title = title;
    this.description = description;
    this.url = randomUrl();
    this.author = username;
    this.createdAt = Date.now();
  }
}

module.exports = Post;
