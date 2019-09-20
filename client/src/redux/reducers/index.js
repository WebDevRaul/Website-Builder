import { combineReducers } from 'redux';
import errors from './errors';
import auth from './auth';
import account from './authentication';


export default combineReducers({
  errors,
  auth,
  account
});