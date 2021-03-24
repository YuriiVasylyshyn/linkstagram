import styles from './style.module.scss';

type ButtonProps = {
  title: string;
  className?: string;
  onClick?: (e: Object) => void;
};

const Button = ({ title, className, onClick }: ButtonProps) => (
  <button
    type="button"
    className={className ?? styles.button}
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
