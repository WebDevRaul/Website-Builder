import { LOADING } from '../actions/types';

const INITIAL_STATE = {
  isLoading: false
};

const loading = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case LOADING.TRUE:
      return {
        isLoading: true
      }
    case LOADING.FALSE:
      return {
        isLoading: false
      }
    default:
      return state;
  }
}

export default loading;