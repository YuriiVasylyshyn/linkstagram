import { Route, Switch, Redirect } from 'react-router-dom';

import LoginPage from './pages/login-page/index';
import SignUpPage from './pages/sign-up-page/index';
import MainPage from './pages/home-page/index';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { isAuthorized } from './configs/api';

import * as routes from './configs/routes';

const Router = () => (
  <>
    <Switch>
      <Route exact path={routes.initial_page}>
        <Redirect to={isAuthorized() ? routes.home_page : routes.signUp_page} />
      </Route>

      <Route path={routes.login_page} component={LoginPage} />

      <Route path={routes.signUp_page} component={SignUpPage} />

      <Route path={routes.home_page} component={MainPage} />

      {/* Add new routes here */}
    </Switch>
    <ToastContainer />
  </>
);

export default Router;
