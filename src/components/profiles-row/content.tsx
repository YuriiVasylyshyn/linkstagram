import styles from './style.module.scss';

type ProfileProps = { user: Profile };

const ProfileRow = ({ user }: ProfileProps) => (
  <div className={styles.row}>
    <img
      className={styles.img}
      src={user.profile_photo_url}
      alt={user.first_name}
    />
  </div>
);

export default ProfileRow;
