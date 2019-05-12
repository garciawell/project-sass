import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TeamsActions } from '~/store/ducks/teams';
import { Creators as AuthActions } from '~/store/ducks/auth';
import Modal from '~/components/Modal';
import Button from '~/styles/components/Button';
import {
  Container, TeamList, Team, NewTeam, Logout,
} from './styles';

class TeamSwitcher extends Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
    createTeamRequest: PropTypes.func.isRequired,
    openTeamModal: PropTypes.func.isRequired,
    closeTeamModal: PropTypes.func.isRequired,
    getTeamsRequest: PropTypes.func.isRequired,
    selectTeam: PropTypes.func.isRequired,
    teams: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  state = {
    newTeam: '',
  };

  componentDidMount() {
    const { getTeamsRequest } = this.props;

    getTeamsRequest();
  }

  handleTeamSelect = (team) => {
    const { selectTeam } = this.props;

    selectTeam(team);
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleCreateTeam = (e) => {
    e.preventDefault();

    const { createTeamRequest } = this.props;
    const { newTeam } = this.state;

    createTeamRequest(newTeam);
  };

  render() {
    const {
      teams, openTeamModal, closeTeamModal, signOut,
    } = this.props;
    const { newTeam } = this.state;
    return (
      <Container>
        <TeamList>
          {teams.data.map(team => (
            <Team key={team.id} onClick={() => this.handleTeamSelect(team)}>
              <img
                alt={team.name}
                src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${
                  team.name
                }`}
              />
            </Team>
          ))}
          <NewTeam onClick={openTeamModal}>NOVO</NewTeam>
          {teams.teamModalOpen && (
            <Modal>
              <h1>Criar time</h1>
              <form onSubmit={this.handleCreateTeam}>
                <span>NOME</span>
                <input name="newTeam" value={newTeam} onChange={this.handleInputChange} />
                <Button size="big" type="submit">
                  Salvar
                </Button>
                <Button onClick={closeTeamModal} size="small" color="gray" type="submit">
                  Cancelar
                </Button>
              </form>
            </Modal>
          )}
        </TeamList>
        <Logout onClick={signOut}>Sair</Logout>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.teams,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...AuthActions, ...TeamsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamSwitcher);
