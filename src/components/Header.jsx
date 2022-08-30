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
        <div>
          <a href="#">Conheça a Linx</a>
          <a href="#">Ajude o algorítimo</a>
        </div>
        <div>
          <a href="#">Seus produtos</a>
          <a href="#">Compartilhe</a>
        </div>
      </footer>
    </header>
  );
}
