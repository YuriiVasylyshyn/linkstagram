import styles from './style.module.scss';

type PostActionProps = {
  image?: string;
  title?: number;
};

const PostAction = ({ ...props }: PostActionProps): JSX.Element => {
  return (
    <button type="button" className={styles.body}>
      <img src={props.image} alt="" />
      {props.title ?? 0}
    </button>
  );
};

export default PostAction;
