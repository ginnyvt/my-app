const postRepository = require('../../repositories/postRepository');
const createError = require('http-errors');

const handle = async (postId) => {
  const foundPost = await postRepository.get(postId);
  if (!foundPost) {
    throw createError(404, 'No post found!');
  }
  return foundPost;
};

module.exports = { handle };
