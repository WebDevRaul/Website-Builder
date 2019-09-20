import { ERRORS, ACCOUNT } from './types';
import axios from 'axios';
import URL from '../../utils/URL';

export const register = (data, history) => dispatch => {
  axios
    .post(`${URL.account}/register`, data)
    .then(res => dispatch({
      type: ACCOUNT.REGISTER_USER,
      payload: true
    }))
    .then(() => history.push('/sign-in'))
    .catch(err => dispatch({
      type: ERRORS.ERROR,
      payload: err
    }));
};