import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';

import { Wrapper } from './styles/components';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Wrapper>
          <Routes />
        </Wrapper>
        <GlobalStyle />
      </Fragment>
    </BrowserRouter>
  </Provider>
);
export default App;
