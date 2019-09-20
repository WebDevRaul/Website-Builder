import { ACCOUNT } from '../actions/types';

const initialState = {
  account: {
    user: {
      id: '',
      name: '',
      email: '',
    },
    isAuth: true,
    newUser: false
  }
};

const account = (state=initialState, action) => {
  switch(action.type) {
    case ACCOUNT.REGISTER_USER:
      return {
        account: {...account, newUser: action.payload}
      }
    default:
      return state;
  };
};

export default account;