import React, { useEffect } from 'react';
import { userAction } from '../../hooks/useActions';
import { useTypesSelector } from '../../hooks/useTypedSelector';

import ProfileRow from './content';

const ProfilesRow: React.FC = () => {
  const { profiles, loading, error } = useTypesSelector(
    (state) => state.profile
  );

  const { getUsers } = userAction();

  useEffect(() => {
    getUsers();
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      {profiles.map((profile) => (
        <ProfileRow user={profile} />
      ))}
    </>
  );
};

export default ProfilesRow;
