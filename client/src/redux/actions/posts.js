import { POST, LOADING } from './types';
// import axios from 'axios';
// import URL from '../../utils/URL';

import { posts } from '../../db.json';


export const loadPosts = index => dispatch => {
  const { startIndex, endIndex } = index;
  dispatch({ type: LOADING.TRUE });

  dispatch({ 
    type: POST.LOAD,
    payload: {
      posts: posts.slice(startIndex, endIndex),
      startIndex,
      endIndex
    }
   });
  
  setTimeout(() => {
    dispatch({ type: LOADING.FALSE })
  }, 3000);
}

export const likePost = data => dispatch => {
  dispatch({
    type: POST.LIKE,
    payload: data
  })
}

export const unlikePost = data => dispatch => {
  console.log('unlike action')
  dispatch({
    type: POST.UNLIKE,
    payload: data
  })
}