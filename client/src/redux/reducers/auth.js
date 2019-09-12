import { AUTH } from '../actions/types';

const INITIAL_STATE = {
  isAuth: false
};

const auth = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case AUTH.SIGN_IN:
      return {
        ...state,
        isAuth: action.payload
      }    
    default:
      return state
  }
};

export default auth;