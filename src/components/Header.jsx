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
          <a href="https://www.linx.com.br/quem-somos/" target="_blank">Conheça a Linx</a>
          <a href="#helpAlgoritm">Ajude o algorítimo</a>
        </div>
        <div>
          <a href="#products">Seus produtos</a>
          <a href="#share">Compartilhe</a>
        </div>
      </footer>
    </header>
  );
}
