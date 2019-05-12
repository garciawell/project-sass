import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '~/styles/components/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Project } from './styles';
import { Creators as ProjectsActions } from '~/store/ducks/projects';

class Projects extends Component {
  static propTypes = {
    getProjectsRequest: PropTypes.func.isRequired,
    activeTeam: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
    projects: PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
    }).isRequired,
  };

  componentDidMount() {
    const { getProjectsRequest, activeTeam } = this.props;

    if (activeTeam) {
      getProjectsRequest();
    }
  }

  render() {
    const { activeTeam, projects } = this.props;

    if (!activeTeam) return null;
    return (
      <Container>
        <header>
          <h1>{activeTeam.name}</h1>
          <div>
            <Button>+ Novo</Button>
            <Button>Membros</Button>
          </div>
        </header>

        {projects.data.map(project => (
          <Project key={project.id}>
            <p>{project.title}</p>
          </Project>
        ))}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(ProjectsActions, dispatch);

const mapStateToProps = state => ({
  activeTeam: state.teams.active,
  projects: state.projects,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);
