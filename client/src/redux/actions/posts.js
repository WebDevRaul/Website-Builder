import { POST } from './types';
// import axios from 'axios';
// import URL from '../../utils/URL';

import db from '../../db.json';


export const loadPosts = () => dispatch => {
  dispatch({ 
    type: POST.LOAD,
    payload: db.users
   })
}

export const sendPost = ({ post, history }) => dispatch => {
  dispatch({
    type: POST.SAVE,
    payload: post
  })
  history.push('/')
};