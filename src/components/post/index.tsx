import styles from './style.module.scss';
import Button from '../button/index';

import PostAction from './post-action/index';

import likeIcon from '../../assets/icons/like-icon.svg';
import commentIcon from '../../assets/icons/comment-icon.svg';
import arrowIcon from '../../assets/icons/arrow-icon.svg';

type PostProps = {
  post?: Post;
};

const Post = ({ post }: PostProps): JSX.Element => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.user}></div>
        <img src="http://pngimg.com/uploads/horse/horse_PNG2556.png" alt="" />
        <div className={styles.title}>
          <span>Yura Vasylyshyn</span>
          <span className={styles.date}>Just now</span>
        </div>
        <Button type="button" className={styles.moreIcon}></Button>
      </div>
      <div className={styles.body}>
        <img
          src="https://www.denverpost.com/wp-content/uploads/2017/10/5203536.jpg"
          alt=""
        />
        <span className={styles.description}>Description</span>
      </div>
      <div className={styles.footer}>
        <div className={styles.actions}>
          <PostAction image={likeIcon} />
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
