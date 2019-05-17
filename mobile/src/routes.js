import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import SignIn from '~/pages/SignIn';

const Routes = createAppContainer(
  createSwitchNavigator({
    SignIn,
    Main,
  }),
);

export default Routes;
