import { POST } from '../actions/types';

const INITIAL_STATE = {
  posts: [],
  index: {
    startIndex: null,
    endIndex: null
  }
};

const posts = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case POST.LOAD:
      return {
        ...state,
        posts: payload.posts,
        index: { startIndex: payload.startIndex, endIndex: payload.endIndex }
      }
    case POST.LOAD_MORE:
      return {
        ...state,
        posts: [...state.posts, ...payload.posts],
        index: { startIndex: payload.startIndex, endIndex: payload.endIndex }
      }
    case POST.LIKE:
      return {
        ...state,
        posts: [...state.posts.map(post => post.id === payload.id 
          ? { ...post, like: [...post.like, payload.user_id] } 
          : post
          )]
      }
    case POST.UNLIKE:
      return {
        ...state,
        posts: [...state.posts.map(post => post.id === payload.id 
          ? { ...post, like: [...post.like.filter(i => i !== payload.user_id)] } 
          : post
          )]
      }
    default:
      return state;
  }
}

export default posts;