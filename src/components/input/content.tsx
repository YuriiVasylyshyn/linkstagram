import styles from './style.module.scss';

type InputProps = { placeHolder: string };

const Input = ({ placeHolder }: InputProps) => (
  <input className={styles.input} type='text' placeholder={placeHolder}></input>
);

export default Input;
