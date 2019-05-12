import Immutable from 'seamless-immutable';

export const Types = {
  GET_PROJECTS_REQUEST: 'projects/GET_PROJECTS_REQUEST',
  GET_PROJECTS_SUCCESS: 'projects/GET_PROJECTS_SUCCESS',
};

const INITIAL_STATE = Immutable({
  data: [],
});

export default function Projects(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_PROJECTS_REQUEST:
      return { ...state };
    case Types.GET_PROJECTS_SUCCESS:
      return { ...state, data: action.payload.data };

    default:
      return state;
  }
}

export const Creators = {
  getProjectsRequest: () => ({
    type: Types.GET_PROJECTS_REQUEST,
  }),
  getProjectsSuccess: data => ({
    type: Types.GET_PROJECTS_SUCCESS,
    payload: { data },
  }),
};
