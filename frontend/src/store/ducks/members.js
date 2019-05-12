import Immutable from 'seamless-immutable';

export const Types = {
  OPEN_MEMBERS_MODAL: 'members/OPEN_MEMBERS_MODAL',
  CLOSE_MEMBERS_MODAL: 'members/CLOSE_MEMBERS_MODAL',
};

const INITIAL_STATE = Immutable({
  membersModalOpen: false,
});

export default function members(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MEMBERS_MODAL:
      return { ...state, membersModalOpen: true };
    case Types.CLOSE_MEMBERS_MODAL:
      return { ...state, membersModalOpen: false };
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
};
