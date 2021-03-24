import { Route, Switch } from 'react-router-dom';

import LoginPage from './pages/login-page/content';
import SignUpPage from './pages/sign-up-page/index';

const Router = () => (
  <>
    <Switch>
      <Route path="/login" component={LoginPage} />

      <Route path="/" component={SignUpPage} />
      {/* Add new routes here */}
    </Switch>
  </>
);

export default Router;
