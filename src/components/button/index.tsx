import styles from './style.module.scss';

type ButtonProps = {
  content?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  onClick?: (e: Object) => {};
};

const Button = ({
  content,
  className = styles.button,
  onClick,
  type = 'button',
}: ButtonProps) => (
  <button type={type} className={className} onClick={onClick}>
    {content}
  </button>
);

export default Button;
