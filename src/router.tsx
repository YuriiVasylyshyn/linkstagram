import { Route, Switch } from 'react-router-dom';

import LoginPage from './pages/login-page/index';
import SignUpPage from './pages/sign-up-page/index';
import MainPage from './pages/main-page/index';

import * as routes from './configs/routes';

const Router = () => (
  <>
    <Switch>
      <Route path={routes.login_page} component={LoginPage} />

      <Route path={routes.signUp_page} component={SignUpPage} />

      <Route path={routes.main_page} component={MainPage} />

      {/* Add new routes here */}
    </Switch>
  </>
);

export default Router;
