import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import errors from './errors';
import user from './account';
import posts from './posts';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'website-builder']
};


const rootReducer =  combineReducers({
  errors,
  user,
  posts
});

export default persistReducer(persistConfig, rootReducer);