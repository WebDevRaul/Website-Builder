import { POST, LOADING } from './types';
// import axios from 'axios';
// import URL from '../../utils/URL';

import { posts } from '../../db.json';


export const loadPosts = data => dispatch => {
  const { index, lastIndex } = data;
  dispatch({ type: LOADING.TRUE })
  dispatch({ 
    type: POST.LOAD,
    payload: posts.slice(index, lastIndex)
   })
  setTimeout(() => {
    dispatch({ type: LOADING.FALSE })
  }, 3000);
}