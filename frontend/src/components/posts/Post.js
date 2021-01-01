import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const truncateStr = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
};

function Post({ post }) {
  const {
    title,
    description,
    url: img,
    author,
    createdAt: time,
    postId,
  } = post;

  return (
    <article className='single-post'>
      <div className='post'>
        <div className='post__header'>
          <Link to={`/posts/${postId}`}>
            <img src={img} alt='image' className='post__img radius__img' />
          </Link>
        </div>

        <div className='post__body'>
          <Link to={`/posts/${postId}`} className='post__desc'>
            {title}
          </Link>
          <p>
            {truncateStr(description, 100)}
            <Link to={`/posts/${postId}`} className='readmore'>
              {' '}
              Read more
            </Link>
          </p>
          {/* author */}
          <div className='author'>
            <span> {author}</span>
          </div>
          <ul className='post__meta'>
            <li className='meta__item'>
              <span className='meta__value'>
                {moment(time).format('MMMM, Do YYYY - h:mm a')}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Post;
