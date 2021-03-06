import Immutable from 'seamless-immutable';

export const Types = {
  SIGNIN_REQUEST: 'auth/SIGNIN_REQUEST',
  SIGNIN_SUCCESS: 'auth/SIGNIN_SUCCESS',
  SIGNOUT: 'auth/SIGNOUT',
  SIGN_UP_REQUEST: 'auth/SIGN_UP_REQUEST',
  GET_PERMISSIONS_SUCCESS: 'auth/GET_PERMISSIONS_SUCCESS',
};

const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@Omni:token'),
  token: localStorage.getItem('@Omni:token') || null,
  roles: [],
  permissions: [],
});

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGNIN_REQUEST:
      return { ...state };
    case Types.SIGNIN_SUCCESS:
      return { ...state, signedIn: true, token: action.payload.token };
    case Types.SIGNOUT:
      return { ...state, signedIn: false, token: null };
    case Types.SIGN_UP_REQUEST:
      return { ...state };
    case Types.GET_PERMISSIONS_SUCCESS:
      return {
        ...state,
        roles: [...action.payload.roles],
        permissions: [...action.payload.permissions],
      };

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
  signOut: () => ({
    type: Types.SIGNOUT,
  }),
  signUpRequest: (name, email, password) => ({
    type: Types.SIGN_UP_REQUEST,
    payload: { name, email, password },
  }),
  getPermissionsSuccess: (roles, permissions) => ({
    type: Types.GET_PERMISSIONS_SUCCESS,
    payload: { roles, permissions },
  }),
};
