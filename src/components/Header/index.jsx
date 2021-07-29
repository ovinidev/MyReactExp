import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.Container}>
      <strong>Logo</strong>
      <nav>
        <ul>
          <a href="#">intro</a>
          <a href="#">top 3</a>
          <a href="#">gallery</a>
          <a href="#">work</a>
          <a href="#">contact</a>
        </ul>
      </nav>
    </header>
  );
};
