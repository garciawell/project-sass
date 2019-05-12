import Immutable from 'seamless-immutable';

export const Types = {
  SIGNIN_REQUEST: 'auth/SIGNIN_REQUEST',
  SIGNIN_SUCCESS: 'auth/SIGNIN_SUCCESS',
};

const INITIAL_STATE = Immutable({
  signedIn: false,
  token: null,
});

export default function Auth(state = INITIAL_STATE, action) {
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

// export const Types = {
//   GET_REQUEST: 'playlists/GET_REQUEST',
//   GET_SUCCESS: 'playlists/GET_SUCCESS',
// };

// const INITIAL_STATE = {
//   data: [],
//   loading: false,
// };

// export default function playlists(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case Types.GET_REQUEST:
//       return { ...state, loading: true };
//     case Types.GET_SUCCESS:
//       return { ...state, loading: false, data: action.payload.data };
//     default:
//       return state;
//   }
// }

// export const Creators = {
//   getPlaylistsRequest: () => ({ type: Types.GET_REQUEST }),

//   getPlaylistsSuccess: data => ({
//     type: Types.GET_SUCCESS,
//     payload: { data },
//   }),
// };
