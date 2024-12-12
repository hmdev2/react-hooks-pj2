import * as types from './types';

export const loadPosts = async (dispatch) => {
  dispatch({ type: types.POSTS_LOADING });

  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsRaw.jason();
  return () => dispatch({ type: types.POSTS_SUCCESS, payload: posts });
};
