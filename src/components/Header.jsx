import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <strong>uma seleção de produtos</strong>
      <h1>especial para você</h1>
      <p>
        Todos os produtos desta lista foram selecionados a partir da sua
        navegação. Aproveite!
      </p>
      <footer className={styles.footer}>
        <a href="#">Conheça a Linx</a>
        <a href="#">Ajude o algorítimo</a>
        <a href="#">Seus produtos</a>
        <a href="#">Compartilhe</a>
      </footer>
    </header>
  );
}
