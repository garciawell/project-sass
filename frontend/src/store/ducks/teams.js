import Immutable from 'seamless-immutable';

export const Types = {
  GET_TEAMS_REQUEST: 'teams/GET_TEAMS_REQUEST',
  GET_TEAMS_SUCCESS: 'teams/GET_TEAMS_SUCCESS',
};

const INITIAL_STATE = Immutable({
  data: [],
});

export default function teams(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_TEAMS_REQUEST:
      return { ...state };
    case Types.GET_TEAMS_SUCCESS:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getTeamsRequest: () => ({
    type: Types.GET_TEAMS_REQUEST,
  }),
  getTeamsSuccess: data => ({
    type: Types.GET_TEAMS_SUCCESS,
    payload: { data },
  }),
};
