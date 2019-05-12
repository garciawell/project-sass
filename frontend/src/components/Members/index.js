import React from 'react';
import Modal from '~/components/Modal';
import { MembersList } from './styles';
import Button from '~/styles/components/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MembersActions } from '~/store/ducks/members';

const Members = ({ closeMembersModal }) => (
  <Modal size="big">
    <h1>Membros</h1>
    <form>
      <MembersList>
        <li>
          <strong>Wellington Garcia</strong>
        </li>
      </MembersList>

      <Button onClick={closeMembersModal} filled={false} color="gray">
        Cancelar
      </Button>
    </form>
  </Modal>
);

Members.propTypes = {
  closeMembersModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(MembersActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Members);
