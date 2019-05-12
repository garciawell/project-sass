import Immutable from 'seamless-immutable';

export const Types = {
  GET_TEAMS_REQUEST: 'teams/GET_TEAMS_REQUEST',
  GET_TEAMS_SUCCESS: 'teams/GET_TEAMS_SUCCESS',
  SELECT_TEAM: 'teams/SELECT_TEAM',
  OPEN_TEAM_MODAL: 'teams/OPEN_TEAM_MODAL',
  CLOSE_TEAM_MODAL: 'teams/CLOSE_TEAM_MODAL',
  CREATE_TEAM_REQUEST: 'teams/CREATE_TEAM_REQUEST',
  CREATE_TEAM_SUCCESS: 'teams/CREATE_TEAM_SUCCESS',
};

const INITIAL_STATE = Immutable({
  data: [],
  teamModalOpen: false,
  active: JSON.parse(localStorage.getItem('@Omni:team')) || null,
});

export default function teams(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_TEAMS_REQUEST:
      return { ...state };
    case Types.GET_TEAMS_SUCCESS:
      return { ...state, data: action.payload.data };
    case Types.SELECT_TEAM:
      localStorage.setItem('@Omni:team', JSON.stringify(action.payload.team));
      return { ...state, active: action.payload.team };
    case Types.OPEN_TEAM_MODAL:
      return { ...state, teamModalOpen: true };
    case Types.CLOSE_TEAM_MODAL:
      return { ...state, teamModalOpen: false };
    case Types.CREATE_TEAM_REQUEST:
      return { ...state };
    case Types.CREATE_TEAM_SUCCESS:
      return { ...state, data: [...state.data, action.payload.team] };
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
  selectTeam: team => ({
    type: Types.SELECT_TEAM,
    payload: { team },
  }),
  openTeamModal: () => ({
    type: Types.OPEN_TEAM_MODAL,
  }),
  closeTeamModal: () => ({
    type: Types.CLOSE_TEAM_MODAL,
  }),
  createTeamRequest: name => ({
    type: Types.CREATE_TEAM_REQUEST,
    payload: { name },
  }),
  createTeamSuccess: team => ({
    type: Types.CREATE_TEAM_SUCCESS,
    payload: { team },
  }),
};
