import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import { connectRouter } from 'connected-react-router';
import Auth from './auth';

export default history => combineReducers({
  Auth,
  toastr,
  router: connectRouter(history),
});
