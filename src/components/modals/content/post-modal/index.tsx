import styles from './style.module.scss';

import icon from '../../../../assets/icons/close-icon.svg';

type PostModalProps = {
  post: Post;
  onClose: () => void;
};

const PostModalContent = ({ onClose, post }: PostModalProps): JSX.Element => {
  const { likes_count, is_liked }: Post = post;
  const { first_name, last_name, profile_photo_url }: Profile = post.author;
  const { url }: Photo = post.photos[0];

  return (
    <div className={styles.overlay}>
      <img src={url} alt="Post" />
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.user}>
            <img src={profile_photo_url} alt="avatar" />
            <span>
              {first_name} ' ' {last_name}
            </span>
          </div>
          <button type="button" className={styles.close} onClick={onClose}>
            <img src={icon} alt="Close" />
          </button>
        </div>
        <div className={styles.body}>body</div>
        <div className={styles.like}>like</div>
        <div className={styles.footer}>footer</div>
      </div>
    </div>
  );
};

export default PostModalContent;
