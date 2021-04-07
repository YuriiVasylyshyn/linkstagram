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
  const {
    className,
    title,
    type,
    name,
    placeholder,
    onChange,
    handleBlur,
    value,
    fieldStyle,
    errorStyle,
  } = props;

  return (
    <div className={compare(className, styles.input)}>
      <span>{title}</span>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={handleBlur ?? null}
        value={value}
        className={fieldStyle ?? styles.field}
      />
      <ErrorMessage
        name={name}
        component="span"
        className={errorStyle ?? styles.error}
      />
    </div>
  );
};

export default Input;
