import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { actions as toastrActions } from 'react-redux-toastr';
import { Creators as TeamActions } from '../ducks/teams';

export function* getTeams() {
  const response = yield call(api.get, 'teams');

  yield put(TeamActions.getTeamsSuccess(response.data));
}

export function* createTeam(action) {
  try {
    const response = yield call(api.post, 'teams', { name: action.payload.name });

    yield put(TeamActions.createTeamSuccess(response.data));
    yield put(TeamActions.closeTeamModal());
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Erro na operação',
        message: 'Houve um erro, tente novamente!',
      }),
    );
  }
}
