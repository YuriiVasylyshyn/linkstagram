import { Component, useEffect } from 'react';
import { authAction } from '../../hooks/useActions';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import { signUp } from '../../store/action-creators/auth';
import SignUpLayout from './content';

class SignUpPage extends Component {
  render() {
    const { loading, error } = useTypesSelector((state) => state.auth);

    const { signUp } = authAction();

    if (loading) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      return <h1>{error}</h1>;
    }

    return <SignUpLayout />;
  }
}

export default SignUpPage;
