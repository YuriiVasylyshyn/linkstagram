import styles from './content.module.scss';

import closeIcon from '../../../assets/icons/close-icon.svg';
import likeIcon from '../../../assets/icons/like-icon.svg';
import isLikedIcon from '../../../assets/icons/isLiked-icon.svg';
import CommentBloc from '../../comment-bloc/index';
import { useState } from 'react';
import Button from '../../button';
import { LeaveCommentAction } from '../../../hooks/useActions';
import { isAuthorized } from '../../../configs/api';

type PostModalProps = {
  post: Post;
  comments: Comment[];
  onClose: () => void;
};

const PostModalContent = ({
  onClose,
  post,
  comments,
}: PostModalProps): JSX.Element => {
  const { likes_count, is_liked, id }: Post = post;
  const { first_name, last_name, profile_photo_url }: Profile = post.author;
  const { url }: Photo = post.photos[0];

  const { leaveComment } = LeaveCommentAction();

  const [comment, setComment] = useState('');

  return (
    <div className={styles.overlay}>
      <div className={styles.image}>
        <img src={url} alt="Post" />
      </div>
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
        <div className={styles.body}>
          {comments?.map((value: Comment, index: number) => {
            const { message, created_at, commenter } = value;
            const { profile_photo_url } = commenter;

            return (
              <CommentBloc
                key={index}
                avatar={profile_photo_url}
                comment={message}
                createdAt={created_at}
              />
            );
          })}
        </div>
        <div className={styles.like}>
          <img src={is_liked ? isLikedIcon : likeIcon} alt="like" />
          <span>{likes_count ?? 0}</span>
        </div>
        {isAuthorized() && (
          <div className={styles.footer}>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
            />
            <Button
              type="button"
              content="Post"
              className={styles.post}
              onClick={() => leaveComment(id, comment, comments)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostModalContent;
