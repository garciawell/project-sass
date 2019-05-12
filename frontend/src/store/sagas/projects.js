import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { actions as toastrActions } from 'react-redux-toastr';
import { Creators as ProjectsActions } from '../ducks/projects';

export function* getProjects() {
  const response = yield call(api.get, 'projects');

  yield put(ProjectsActions.getProjectsSuccess(response.data));
}
