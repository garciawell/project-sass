import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { actions as toastrActions } from 'react-redux-toastr';
import { Creators as MembersActions } from '../ducks/members';

export function* getMembers() {
  const response = yield call(api.get, 'members');

  yield put(MembersActions.getMembersSuccess(response.data));
}

export function* updateMember(action) {
  try {
    yield call(api.put, `members/${action.payload.id}`, {
      roles: action.payload.roles.map(role => role.id),
    });

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Membro Atualizado',
        message: 'Membro foi atualizado com sucesso',
      }),
    );
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
