import styles from './Divisor.module.css';

export function Divisor({ text, id = false }) {
  return (
    <div id={id ? id : ''} className={styles.divisor}>
      <strong>{text}</strong>
    </div>
  );
}
