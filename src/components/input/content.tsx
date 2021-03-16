import styles from './input.module.scss';

type InputProps = { placeHolder: string };

const Input = ({ ...props }: InputProps) =>
    <input className={styles.input} type='text' placeholder={props.placeHolder}></input>

export default Input;