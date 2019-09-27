import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './account';
import posts from './posts';
import loading from './loading';
import errors from './errors';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'website-builder']
};


const rootReducer =  combineReducers({
  errors,
  user,
  posts,
  loading
});

export default persistReducer(persistConfig, rootReducer);