import styles from './style.module.scss';

type ProfileProps = { users: Profile[] };

const ProfileRow = ({ users }: ProfileProps): JSX.Element => (
  <div className={styles.row}>
    {users.map((user, index) =>
      user.profile_photo_url != null ? (
        <img
          key={index}
          className={styles.img}
          src={user.profile_photo_url}
          alt={user.first_name}
        />
      ) : null
    )}
  </div>
);

export default ProfileRow;
