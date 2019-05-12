import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { actions as toastrActions } from 'react-redux-toastr';
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
