import { combineReducers } from 'redux';
import errors from './errors';
import account from './authentication';


export default combineReducers({
  errors,
  account
});