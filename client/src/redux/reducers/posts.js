import { POST } from '../actions/types';

const INITIAL_STATE = {
  posts: [],
  index: {
    startIndex: 0,
    endIndex: 4
  }
};

const posts = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case POST.LOAD:
      return {
        ...state,
        posts: [...state.posts, ...action.payload.posts],
        index: { startIndex: action.payload.startIndex, endIndex: action.payload.endIndex }
      }
    default:
      return state;
  }
}

export default posts;