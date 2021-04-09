import styles from './style.module.scss';

import closeIcon from '../../../../assets/icons/close-icon.svg';
import likeIcon from '../../../../assets/icons/like-icon.svg';
import isLikedIcon from '../../../../assets/icons/isLiked-icon.svg';
import { useTypesSelector } from '../../../../hooks/useTypedSelector';
import { CommentsAction } from '../../../../hooks/useActions';
import { useEffect } from 'react';

import ScreenWrapper from '../../../../services/wrappers/screen-wrapper';

type PostModalProps = {
  post: Post;
  onClose: () => void;
};

const PostModalContent = ({ onClose, post }: PostModalProps): JSX.Element => {
  const { likes_count, is_liked, id }: Post = post;
  const { first_name, last_name, profile_photo_url }: Profile = post.author;
  const { url }: Photo = post.photos[0];

  const { comments, loading, error } = useTypesSelector(
    (state) => state.comments
  );

  const { getComments } = CommentsAction();

  void useEffect(() => {
    getComments(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScreenWrapper
      error={error}
      loading={loading}
      page={
        <div className={styles.overlay}>
          <img src={url} alt="Post" />
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.user}>
                <img src={profile_photo_url} alt="avatar" />
                <span>{first_name + ' ' + last_name}</span>
              </div>
              <button type="button" className={styles.close} onClick={onClose}>
                <img src={closeIcon} alt="Close" />
              </button>
            </div>
            {comments?.map((value: Comment, index: number) => (
              <div className={styles.body} key={index}>
                {value.id}
              </div>
            ))}
            <div className={styles.like}>
              <img src={is_liked ? isLikedIcon : likeIcon} alt="like" />
              <span>{likes_count ?? 0}</span>
            </div>
            <div className={styles.footer}>footer</div>
          </div>
        </div>
      }
    />
  );
};

export default PostModalContent;
