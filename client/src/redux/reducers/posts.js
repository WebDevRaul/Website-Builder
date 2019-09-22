import { POST } from '../actions/types';

const INITIAL_STATE = {
  posts: []
};

const messages = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case POST.LOAD:
      return {
        posts: [...state.posts, action.payload]
      }
    case POST.SAVE:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    default:
      return state;
  }
}

export default messages;