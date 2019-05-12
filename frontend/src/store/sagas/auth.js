import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';
import { actions as toastrActions } from 'react-redux-toastr';
import { push } from 'connected-react-router';
import { Creators as AuthActions } from '../ducks/auth';

export function* signIn(action) {
  const infs = {
    email: action.payload.email,
    password: action.payload.password,
  };
  try {
    const response = yield call(api.post, 'sessions', infs);
    localStorage.setItem('@Omni:token', response.data.token);

    yield put(AuthActions.signinSuccess(response.data.token));
    yield put(push('/'));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique seu e-mail/senha!',
      }),
    );
  }
}

export function* signUp(action) {
  const infs = {
    name: action.payload.name,
    email: action.payload.email,
    password: action.payload.password,
  };
  try {
    const response = yield call(api.post, 'users', infs);
    localStorage.setItem('@Omni:token', response.data.token);

    yield put(AuthActions.signinSuccess(response.data.token));
    yield put(push('/'));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no cadastro',
        message: 'Você foi convidado para algum time ?',
      }),
    );
  }
}

export function* signOut() {
  localStorage.removeItem('@Omni:token');
  localStorage.removeItem('@Omni:team');

  yield put(push('/signin'));
}

export function* getPermissions() {
  const team = yield select(state => state.teams.active);
  const signedIn = yield select(state => state.auth.signedIn);

  if (!signedIn || !team) {
    return;
  }
  const response = yield call(api.get, 'permissions');

  const { roles, permissions } = response.data;

  yield put(AuthActions.getPermissionsSuccess(roles, permissions));
}
