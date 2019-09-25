import { POST } from './types';
// import axios from 'axios';
// import URL from '../../utils/URL';

import { posts } from '../../db.json';


export const loadPosts = () => dispatch => {
  dispatch({ 
    type: POST.LOAD,
    payload: posts
   })
}