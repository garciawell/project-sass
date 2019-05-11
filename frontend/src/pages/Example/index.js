import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';
import { Creators as PlaylistActions } from '../../store/ducks/playlists';

class Example extends Component {
  state = {};
  // static propTypes = {
  //   getPlaylistsRequest: PropTypes.func.isRequired,
  //   playlists: PropTypes.shape({
  //     data: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         id: PropTypes.number,
  //         title: PropTypes.string,
  //         description: PropTypes.string,
  //         thumbnail: PropTypes.string,
  //       }),
  //     ),
  //     loading: PropTypes.bool,
  //   }).isRequired,
  // };

  render() {
    return (
      <Container>
        <h1>Boilerplate React</h1>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  // playlists: state.playlists
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
