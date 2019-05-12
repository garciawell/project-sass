import { all, takeLatest } from 'redux-saga/effects';
import { Types as AuthTypes } from '../ducks/auth';
import { Types as TeamsTypes } from '../ducks/teams';

import { signIn, signOut } from './auth';
import { getTeams, createTeam } from './teams';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGNIN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGNOUT, signOut),
    takeLatest(TeamsTypes.GET_TEAMS_REQUEST, getTeams),
    takeLatest(TeamsTypes.CREATE_TEAM_REQUEST, createTeam),
  ]);
}
