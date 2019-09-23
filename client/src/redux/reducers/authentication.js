import { ACCOUNT, ALERT } from '../actions/types';

const initialState = {
  account: {
    userData: {
      id: '',
      name: '',
      email: '',
    },
    isAuth: false,
    newUser: false
  }
};

const account = (state=initialState, action) => {
  switch(action.type) {
    case ACCOUNT.REGISTER_USER:
      return {
        account: {...state.account, newUser: action.payload}
      }
    case ALERT.HIDE_MESSAGE:
      return {
        account: {...state.account, newUser: false}
      }
    case ACCOUNT.SIGN_IN_USER:
      return {
        account: { ...state.account, userData: action.payload.user, isAuth: action.payload.isAuth }
      }
    default:
      return state;
  };
};

export default account;