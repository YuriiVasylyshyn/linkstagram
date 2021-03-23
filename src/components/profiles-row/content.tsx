import styles from './style.module.scss';

type InputProps = { user: Profile };

const ProfileRow = ({ user }: InputProps) => (
  <div className={styles.row}>
    <img
      className={styles.img}
      src={user.profile_photo_url}
      alt={user.first_name}
    />
  </div>
);

export default ProfileRow;
