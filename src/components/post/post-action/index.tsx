import styles from './style.module.scss';

type PostActionProps = {
  image?: string;
  title?: string;
};

const PostAction = ({ ...props }: PostActionProps): JSX.Element => {
  return (
    <button type="button" className={styles.body}>
      <img src={props.image} alt="" />
      {props.title ?? '12321'}
    </button>
  );
};

export default PostAction;
