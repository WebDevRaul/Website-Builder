import { POST } from '../actions/types';

const INITIAL_STATE = {
  posts: []
};

const posts = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case POST.LOAD:
      return {
        ...state,
        posts: action.payload
      }
    case POST.LOAD_MORE:
      return {
        posts: [...state.posts, ...action.payload]
      }
    default:
      return state;
  }
}

export default posts;