import { all, takeLatest } from 'redux-saga/effects';

import { Types as AuthTypes } from '../ducks/auth';
import { signIn, signOut } from './auth';

import { Types as TeamsTypes } from '../ducks/teams';
import { getTeams, createTeam } from './teams';

import { Types as ProjectsTypes } from '../ducks/projects';
import { getProjects } from './projects';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGNIN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGNOUT, signOut),

    takeLatest(TeamsTypes.GET_TEAMS_REQUEST, getTeams),
    takeLatest(TeamsTypes.CREATE_TEAM_REQUEST, createTeam),
    takeLatest(TeamsTypes.SELECT_TEAM, getProjects),

    takeLatest(ProjectsTypes.GET_PROJECTS_REQUEST, getProjects),
  ]);
}
