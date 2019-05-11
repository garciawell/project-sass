import React, { Fragment } from 'react';
import './config/reactotron';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';

import { Wrapper } from './styles/components';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Wrapper>
        <Routes />
      </Wrapper>
      <GlobalStyle />
    </Fragment>
  </Provider>
);
export default App;
