import React, { Component } from 'react';
import TeamSwitcher from '~/components/TeamSwitcher';
import Projects from '~/components/Projects';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';
import { Creators as AuthActions } from '~/store/ducks/auth';
import PropTypes from 'prop-types';
import api from '~/services/api';

class Main extends Component {
  static propTypes = {
    getPermissionsSuccess: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    const { getPermissionsSuccess } = this.props;

    const response = await api.get('permissions');

    const { roles, permissions } = response.data;

    getPermissionsSuccess(roles, permissions);
  }

  render() {
    return (
      <Container>
        <TeamSwitcher />
        <Projects />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Main);
