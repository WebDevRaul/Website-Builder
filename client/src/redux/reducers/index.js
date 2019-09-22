import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import errors from './errors';
import account from './authentication';
import posts from './posts';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'website-builder']
};


const rootReducer =  combineReducers({
  errors,
  account,
  posts
});

export default persistReducer(persistConfig, rootReducer);