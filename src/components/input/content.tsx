import styles from './input.module.scss';

type InputProps = { placeHolder: string };

const Input = ({ placeHolder }: InputProps) =>
    <input className={styles.input} type='text' placeholder={placeHolder}></input>


export default Input;