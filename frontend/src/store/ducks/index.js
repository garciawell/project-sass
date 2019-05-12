import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import Auth from './auth';

export default combineReducers({
  Auth,
  toastr,
});
