import styles from './style.module.scss';

type ButtonProps = { title: string; className?: string };

const Button = ({ title, className }: ButtonProps) => (
  <button type='button' className={className ?? styles.button}>
    {title}
  </button>
);

export default Button;
