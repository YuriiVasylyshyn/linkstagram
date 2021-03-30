import styles from './style.module.scss';
import Button from '../button/index';

type ProfileBlocProps = {
  user?: Profile;
};

const ProfileBloc = ({ ...props }: ProfileBlocProps): JSX.Element => {
  return (
    <div className={styles.bloc}>
      <div className={styles.header}>
        <div className={styles.info}>
          <span className={styles.count}>12 k</span>
          <span className={styles.title}>Followers</span>
        </div>

        <img src="http://pngimg.com/uploads/horse/horse_PNG2556.png" alt="" />
        <div className={styles.info}>
          <span className={styles.count}>448</span>
          <span className={styles.title}>Following</span>
        </div>
      </div>
      <div className={styles.body}>
        <span>Yura Vasylyshyn - ASDASdasd</span>
        <br />
        <span className={styles.description}>
          Like to travel and shoot cinematic and b/w photos Tools - Capture One
          for Raw
        </span>
      </div>
      <div className={styles.buttonRow}>
        <Button
          title={'Edit profile'}
          type="button"
          className={styles.edit}
        ></Button>
        <Button
          title={'New post'}
          type="button"
          className={styles.post}
        ></Button>
      </div>
    </div>
  );
};

export default ProfileBloc;
