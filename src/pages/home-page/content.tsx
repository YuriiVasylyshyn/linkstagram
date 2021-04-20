import styles from '../../styles/main.module.scss';
import ProfilesRow from '../../components/profiles-row/index';
import ProfileBloc from '../../components/profile-bloc/index';
import Post from '../../components/post/index';

import { isAuthorized } from '../../configs/api';
import React from 'react';
import AccountModal from '../../components/modals/account-modal';
import { EditAccountAction } from '../../hooks/useActions';

type HomeLayoutProps = {
  users: Profile[];
  posts: Post[];
  user: Profile;
};

const HomeLayout = ({ users, posts, user }: HomeLayoutProps): JSX.Element => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  const { editAccount } = EditAccountAction();

  return (
    <div className={styles.body}>
      <AccountModal
        modalIsOpen={modalIsOpen}
        account={user}
        closeModal={closeModal}
        callBack={(values) =>
          editAccount(
            values.firstName,
            values.lastName,
            values.file,
            values.jobTitle,
            values.description
          )
        }
      />
      <div className={styles.content}>
        <ProfilesRow users={users} />
        <div className={styles.postsList}>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
      {isAuthorized()
        ? user && <ProfileBloc user={user} openModal={openModal} />
        : null}
    </div>
  );
};

export default HomeLayout;
