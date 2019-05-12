import Immutable from 'seamless-immutable';

export const Types = {
  GET_PROJECTS_REQUEST: 'projects/GET_PROJECTS_REQUEST',
  GET_PROJECTS_SUCCESS: 'projects/GET_PROJECTS_SUCCESS',
  OPEN_PROJECT_MODAL: 'projects/OPEN_PROJECT_MODAL',
  CLOSE_PROJECT_MODAL: 'projects/CLOSE_PROJECT_MODAL',
  CREATE_PROJECT_REQUEST: 'projects/CREATE_PROJECT_REQUEST',
  CREATE_PROJECT_SUCCESS: 'projects/CREATE_PROJECT_SUCCESS',
};

const INITIAL_STATE = Immutable({
  data: [],
  projectModalOpen: false,
});

export default function Projects(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_PROJECTS_REQUEST:
      return { ...state };
    case Types.GET_PROJECTS_SUCCESS:
      return { ...state, data: action.payload.data };
    case Types.OPEN_PROJECT_MODAL:
      return { ...state, projectModalOpen: true };
    case Types.CLOSE_PROJECT_MODAL:
      return { ...state, projectModalOpen: false };
    case Types.CREATE_PROJECT_REQUEST:
      return { ...state };
    case Types.CREATE_PROJECT_SUCCESS:
      return { ...state, data: [...state.data, action.payload.project] };

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
  openProjectModal: () => ({
    type: Types.OPEN_PROJECT_MODAL,
  }),
  closeProjectModal: () => ({
    type: Types.CLOSE_PROJECT_MODAL,
  }),
  createProjectRequest: title => ({
    type: Types.CREATE_PROJECT_REQUEST,
    payload: { title },
  }),
  createProjectSuccess: project => ({
    type: Types.CREATE_PROJECT_SUCCESS,
    payload: { project },
  }),
};
