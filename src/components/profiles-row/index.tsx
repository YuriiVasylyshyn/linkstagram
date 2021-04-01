import styles from './style.module.scss';

type ProfileProps = { users: Profile[] };

const ProfileRow = ({ users }: ProfileProps): JSX.Element => (
  <div className={styles.row}>
    {users.map((user, index) => {
      const { profile_photo_url, first_name } = user;

      return (
        profile_photo_url != null && (
          <img
            key={index}
            className={styles.img}
            src={profile_photo_url}
            alt={first_name}
          />
        )
      );
    })}
  </div>
);

export default ProfileRow;
