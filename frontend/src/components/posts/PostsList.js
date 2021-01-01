import React from 'react';

import Post from './Post';

function PostsList({ fetchedPosts }) {
  // console.log(fetchedPosts);
  // let history = useHistory();
  // const token = localStorage.getItem('token');
  // if (!token) {
  //   history.push('/login');
  // }

  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:8080/posts')
  //     .then((response) => {
  //       setPosts(response.data);
  //     })
  //     .catch((err) => {
  //       history.push('/login');
  //     });
  // }, []);

  return (
    <section>
      <div className='container'>
        <h3 className='section__title'>/ Technology</h3>
        <div className='posts__container'>
          {fetchedPosts.map((post) => {
            return <Post key={post.postId} post={post} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default PostsList;
