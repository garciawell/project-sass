import Immutable from 'seamless-immutable';

export const Types = {
  OPEN_MEMBERS_MODAL: 'members/OPEN_MEMBERS_MODAL',
  CLOSE_MEMBERS_MODAL: 'members/CLOSE_MEMBERS_MODAL',
  GET_MEMBERS_REQUEST: 'members/GET_MEMBERS_REQUEST',
  GET_MEMBERS_SUCCESS: 'members/GET_MEMBERS_SUCCESS',
  UPDATE_MEMBER_REQUEST: 'members/UPDATE_MEMBER_REQUEST',
};

const INITIAL_STATE = Immutable({
  membersModalOpen: false,
  data: [],
});

export default function members(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MEMBERS_MODAL:
      return { ...state, membersModalOpen: true };
    case Types.CLOSE_MEMBERS_MODAL:
      return { ...state, membersModalOpen: false };
    case Types.GET_MEMBERS_REQUEST:
      return { ...state };
    case Types.GET_MEMBERS_SUCCESS:
      return { ...state, data: action.payload.data };
    case Types.UPDATE_MEMBER_REQUEST:
      return {
        ...state,
        data: state.data.map(member => (member.id === action.payload.id ? { ...member, roles: action.payload.roles } : { member })),
      };
    default:
      return state;
  }
}

export const Creators = {
  openMembersModal: () => ({
    type: Types.OPEN_MEMBERS_MODAL,
  }),
  closeMembersModal: () => ({
    type: Types.CLOSE_MEMBERS_MODAL,
  }),
  getMembersRequest: () => ({
    type: Types.GET_MEMBERS_REQUEST,
  }),
  getMembersSuccess: data => ({
    type: Types.GET_MEMBERS_SUCCESS,
    payload: { data },
  }),
  updateMemberRequest: (id, roles) => ({
    type: Types.UPDATE_MEMBER_REQUEST,
    payload: { id, roles },
  }),
};
