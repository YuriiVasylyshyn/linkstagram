import styles from './style.module.scss';

type ButtonProps = {
  content?: string | Element;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  onClick?: (e: Object) => {};
};

const Button = ({
  content,
  className,
  onClick,
  type = 'button',
}: ButtonProps) => (
  <button type={type} className={className ?? styles.button} onClick={onClick}>
    {content}
  </button>
);

export default Button;
