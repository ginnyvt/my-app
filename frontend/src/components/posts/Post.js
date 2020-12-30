import React from 'react';
import { Link } from 'react-router-dom';

const truncateStr = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
};

function Post({ post }) {
  const { title, description, url: img, author } = post;
  return (
    <article className='single-post'>
      <div className='post'>
        <div className='post__header'>
          <Link>
            <img src={img} alt='image' className='post__img radius__img' />
          </Link>
        </div>

        <div className='post__body'>
          <Link className='post__desc'>{title}</Link>
          <p>
            {truncateStr(description, 100)}
            <a href='#' className='readmore'>
              {' '}
              Read more
            </a>
          </p>
          {/* author */}
          <div className='author'>
            <span>{author}</span>
          </div>
          <ul className='post__meta'>
            <li className='meta__item'>
              <span className='meta__value'>December 28, 2020</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Post;
