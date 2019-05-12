import React, { Component } from 'react';
import api from '~/services/api';
// import { Container } from './styles';

class Main extends Component {
  componentDidMount() {
    api.get('/teste');
  }

  render() {
    return (
      <div>
        <h1>TESTE</h1>
      </div>
    );
  }
}

export default Main;
