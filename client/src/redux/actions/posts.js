import { POST, LOADING } from './types';
// import axios from 'axios';
// import URL from '../../utils/URL';

import { posts } from '../../db.json';


export const loadPosts = () => dispatch => {
  dispatch({ type: LOADING.TRUE })
  dispatch({ 
    type: POST.LOAD,
    payload: posts
   })
  setTimeout(() => {
    dispatch({ type: LOADING.FALSE })
  }, 2000);
}