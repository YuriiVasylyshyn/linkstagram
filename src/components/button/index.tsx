import styles from './style.module.scss';

type ButtonProps = {
  title: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  onClick?: (e: Object) => {};
};

const Button = ({
  title,
  className,
  onClick,
  type = 'button',
}: ButtonProps) => (
  <button type={type} className={className ?? styles.button} onClick={onClick}>
    {title}
  </button>
);

export default Button;
