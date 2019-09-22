import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import errors from './errors';
import account from './authentication';
import dashboard from './dashboard';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'website-builder']
};


const rootReducer =  combineReducers({
  errors,
  account,
  dashboard
});

export default persistReducer(persistConfig, rootReducer);