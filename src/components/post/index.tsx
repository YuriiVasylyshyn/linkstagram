import styles from './style.module.scss';
import Button from '../button/index';

import PostAction from './post-action/index';

import likeIcon from '../../assets/icons/like-icon.svg';
import commentIcon from '../../assets/icons/comment-icon.svg';
import arrowIcon from '../../assets/icons/arrow-icon.svg';

type PostProps = {
  post: Post;
};

const Post = ({ post }: PostProps): JSX.Element => {
  const { created_at, likes_count, description }: Post = post;
  const { first_name, last_name, profile_photo_url }: Profile = post.author;
  const { url }: Photo = post.photos[0];

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.user}></div>
        <img src={profile_photo_url} alt="" />
        <div className={styles.title}>
          <span>{first_name + ' ' + last_name}</span>
          <span className={styles.date}>{created_at}</span>
        </div>
        <Button type="button" className={styles.moreIcon}></Button>
      </div>
      <div className={styles.body}>
        <img src={url} alt="" />
        <span className={styles.description}>{description}</span>
      </div>
      <div className={styles.footer}>
        <div className={styles.actions}>
          <PostAction image={likeIcon} title={likes_count} />
          <PostAction image={commentIcon} />
        </div>
        <button type="button" className={styles.share}>
          <span>Share</span> <img src={arrowIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Post;
