import { ACCOUNT, ALERT, POST } from '../actions/types';

const initialState = {
  account: {
    user: {},
    isAuth: false,
    newUser: false
  }
};

const user = (state=initialState, action) => {
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
        account: { ...state.account, user: action.payload.user, isAuth: action.payload.isAuth }
      }
    case ACCOUNT.SIGN_OUT_USER:
      return {
        account: {
          ...state.account, user: action.payload.user, isAuth: action.payload.isAuth
        }
      }
    case POST.SAVE:
      return {
        account: { ...state.account , 
          user: { ...state.account.user, 
            posts: [...state.account.user.posts, action.payload] }
          }
      }
    case POST.EDIT:
      return {
        account: { ...state.account , 
          user: { ...state.account.user, 
            posts: [...state.account.user.posts.filter(item => item.id !== action.payload.id), action.payload] }
          }
      }
    case POST.DELETE:
      return {
        account: { ...state.account , 
          user: { ...state.account.user, 
            posts: [...state.account.user.posts.filter(item => item.id !== action.payload)] }
          }
      }
    default:
      return state;
  };
};

export default user;