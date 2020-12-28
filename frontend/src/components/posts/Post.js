import React from 'react';

function Post({ post }) {
  const { title, description, url: img, author } = post;
  return (
    <div>
      <article>
        <img src={img} alt='' />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Posted by: {author}</p>
        </div>
      </article>
    </div>
  );
}

export default Post;
