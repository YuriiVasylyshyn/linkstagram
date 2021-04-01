import styles from './style.module.scss';

type PostActionProps = {
  image: string;
  title?: number;
};

const PostAction = ({ image, title }: PostActionProps): JSX.Element => {
  return (
    <button type="button" className={styles.body}>
      <img src={image} alt="" />
      {title ?? 0}
    </button>
  );
};

export default PostAction;
