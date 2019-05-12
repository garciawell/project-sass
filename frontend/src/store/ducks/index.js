import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import teams from './teams';
import projects from './projects';
import members from './members';

export default history => combineReducers({
  auth,
  teams,
  toastr,
  projects,
  members,
  router: connectRouter(history),
});
