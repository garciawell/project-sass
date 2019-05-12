import Immutable from 'seamless-immutable';

export const Types = {
  SIGNIN_REQUEST: 'auth/SIGNIN_REQUEST',
  SIGNIN_SUCCESS: 'auth/SIGNIN_SUCCESS',
};

const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@Omni:token'),
  token: localStorage.getItem('@Omni:token') || null,
});

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGNIN_REQUEST:
      return { ...state };
    case Types.SIGNIN_SUCCESS:
      return { ...state, signedIn: true, token: action.payload.token };

    default:
      return state;
  }
}

export const Creators = {
  signinRequest: (email, password) => ({
    type: Types.SIGNIN_REQUEST,
    payload: {
      email,
      password,
    },
  }),
  signinSuccess: token => ({
    type: Types.SIGNIN_SUCCESS,
    payload: { token },
  }),
};
