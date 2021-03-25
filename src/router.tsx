import { Route, Switch, Redirect } from 'react-router-dom';

import LoginPage from './pages/login-page/content';
import SignUpPage from './pages/sign-up-page/content';

const Router = () => (
  <>
    <Redirect from="/" to="/login" />
    <Switch>
      <Route path="/login" component={LoginPage} />

      <Route path="/sign-up" component={SignUpPage} />
      {/* Add new routes here */}
    </Switch>
  </>
);

export default Router;
