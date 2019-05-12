import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import teams from './teams';

export default history => combineReducers({
  auth,
  teams,
  toastr,
  router: connectRouter(history),
});
