import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import { connectRouter } from 'connected-react-router';
import auth from './auth';

export default history => combineReducers({
  auth,
  toastr,
  router: connectRouter(history),
});
