import { POST } from './types';
// import axios from 'axios';
// import URL from '../../utils/URL';


export const sendPost = ({ post, history }) => dispatch => {
  dispatch({
    type: POST.SAVE,
    payload: post
  })
  history.push('/')
};