import { ACCOUNT } from '../actions/types';

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
    case ACCOUNT.SIGN_IN_USER:
      return {
        account: { ...state.account, userDAta: action.payload.user, isAuth: action.payload.isAuth }
      }
    default:
      return state;
  };
};

export default account;