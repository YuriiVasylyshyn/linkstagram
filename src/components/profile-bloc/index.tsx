import styles from './style.module.scss';
import Button from '../button/index';

type ProfileBlocProps = {
  user: Profile;
};

const ProfileBloc = ({ user }: ProfileBlocProps): JSX.Element => {
  const {
    profile_photo_url,
    followers,
    following,
    first_name,
    last_name,
    job_title,
    description,
  }: Profile = user;

  return (
    <div className={styles.bloc}>
      <div className={styles.header}>
        <div className={styles.info}>
          <span>{followers}</span>
          <span>Followers</span>
        </div>
        <img src={profile_photo_url} alt="" />
        <div className={styles.info}>
          <span>{following}</span>
          <span>Following</span>
        </div>
      </div>
      <div className={styles.body}>
        <span>{first_name + ' ' + last_name + '-' + job_title}</span>
        <br />
        <span className={styles.description}>{description}</span>
      </div>
      <div className={styles.buttonRow}>
        <Button
          content={'Edit profile'}
          type="button"
          className={styles.edit}
        ></Button>
        <Button
          content={'New post'}
          type="button"
          className={styles.post}
        ></Button>
      </div>
    </div>
  );
};

export default ProfileBloc;
