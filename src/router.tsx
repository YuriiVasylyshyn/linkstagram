import { Route, Switch } from 'react-router-dom';

import LoginPage from './pages/login-page/content';
import SignUpPage from './pages/sign-up-page/index';
import MainPage from './pages/main-page/index';

const Router = () => (
  <>
    <Switch>
      <Route path="/login" component={LoginPage} />

      <Route path="/sign-up" component={SignUpPage} />

      <Route path="/" component={MainPage} />
      {/* Add new routes here */}
    </Switch>
  </>
);

export default Router;
