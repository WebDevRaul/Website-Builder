import { ACCOUNT } from './types';
// import axios from 'axios';
// import URL from '../../utils/URL';

export const register = (data, history) => dispatch => {
  dispatch({
    type: ACCOUNT.REGISTER_USER,
    payload: true
  })
  history.push('/sign-in')
};

export const signIn = data => dispatch => {
  dispatch({
    type: ACCOUNT.SIGN_IN_USER,
    payload: {
      user: {
        id: '1',
        name: 'Jhon Snow',
        email: 'JhonSnow@gmail.com',
      },
      isAuth: true,
    }
  })
}