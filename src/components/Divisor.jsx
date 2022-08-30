import styles from './Divisor.module.css';

export function Divisor({ text }) {
  return (
    <div className={styles.divisor}>
      <strong>{text}</strong>
    </div>
  );
}
