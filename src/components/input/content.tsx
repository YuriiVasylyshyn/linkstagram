import { ChangeEventHandler } from 'react';
import styles from './style.module.scss';

type InputProps = {
  type: string;
  placeHolder: string;
  onChange: ChangeEventHandler<any>;
};

const Input = ({ type, placeHolder, onChange }: InputProps) => (
  <input
    className={styles.input}
    type={type}
    placeholder={placeHolder}
    onChange={onChange}
  ></input>
);

export default Input;
