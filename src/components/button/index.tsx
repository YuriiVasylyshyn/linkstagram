import styles from './style.module.scss';
import compare from 'classnames';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined;
  content?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({
  content,
  className,
  onClick,
  type = 'button',
}: ButtonProps) => (
  <button
    type={type}
    className={compare(styles.button, className)}
    onClick={onClick}
  >
    {content}
  </button>
);

export default Button;
