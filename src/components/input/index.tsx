import compare from 'classnames';
import { Field, ErrorMessage } from 'formik';

import styles from './style.module.scss';

type InputProps = {
  value: string;
  title: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: Object) => void;
  handleBlur?: (e: Object) => void;
  className?: string;
  fieldStyle?: string;
  errorStyle?: string;
};

const Input = ({ ...props }: InputProps): JSX.Element => {
  return (
    <div className={compare(props.className, styles.input)}>
      <span>{props.title}</span>
      <Field
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.handleBlur ?? null}
        value={props.value}
        className={props.fieldStyle ?? styles.field}
      />
      <ErrorMessage
        name={props.name}
        component="span"
        className={props.fieldStyle ?? styles.error}
      />
    </div>
  );
};

export default Input;
