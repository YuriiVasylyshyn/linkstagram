import LoginPage from './pages/login-page/content';
import SignUpPage from './pages/sign-up-page/content';
import Header from './components/header/content';
import { Route, Switch, Redirect } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Redirect from="/" to="/login" />
      <Switch>
        <Route
          path='/login'
          component={LoginPage}
        />

        <Route
          path='/sign-up'
          component={SignUpPage}
        />
      </Switch>
    </>
  );
}

export default App;
