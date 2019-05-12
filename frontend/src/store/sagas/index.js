import { all, takeLatest } from 'redux-saga/effects';
import { Types as AuthTypes } from '../ducks/auth';
import { Types as TeamsTypes } from '../ducks/teams';

import { signIn } from './auth';
import { getTeams } from './teams';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGNIN_REQUEST, signIn),
    takeLatest(TeamsTypes.GET_TEAMS_REQUEST, getTeams),
  ]);
}
