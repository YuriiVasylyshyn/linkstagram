import { useTypesSelector } from '../../hooks/useTypedSelector';
import { authAction } from '../../hooks/useActions';
import React, { useState } from 'react';
import SigningFormLayout from './index';

const SigningForm: React.FC = () => {
  const { loading, error } = useTypesSelector((state) => state.auth);

  const { signUp } = authAction();

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  if (loading) {
    return <h1>LOADING</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <SigningFormLayout
      onChangeEmail={(e: { target: { value: React.SetStateAction<string> } }) =>
        setEmail(e.target.value)
      }
      onChangePassword={(e: {
        target: { value: React.SetStateAction<string> };
      }) => setPassword(e.target.value)}
      onChangeUsername={(e: {
        target: { value: React.SetStateAction<string> };
      }) => setUserName(e.target.value)}
      onConfirm={() => {
        console.log(userName, email, password);
        signUp(userName, email, password);
      }}
    ></SigningFormLayout>
  );
};

export default SigningForm;
