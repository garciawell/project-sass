import React, { Component } from 'react';
import TeamSwitcher from '~/components/TeamSwitcher';

import { Container } from './styles';

class Main extends Component {
  render() {
    return (
      <Container>
        <TeamSwitcher />
      </Container>
    );
  }
}

export default Main;
