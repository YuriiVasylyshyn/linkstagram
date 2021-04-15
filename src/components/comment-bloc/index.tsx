import styles from './style.module.scss';

type Key = {
  key: string;
};

type CommentBlocProps = {
  avatar: string;
  comment: string;
  createdAt: string;
};

const CommentBloc = (
  { avatar, comment, createdAt }: CommentBlocProps,
  { key }: Key
): JSX.Element => {
  return (
    <div key={key} className={styles.body}>
      <img src={avatar} alt="avatar" />
      <div className={styles.message}>
        <span>{comment}</span>
        <span className={styles.createdAt}>{createdAt}</span>
      </div>
    </div>
  );
};

export default CommentBloc;
