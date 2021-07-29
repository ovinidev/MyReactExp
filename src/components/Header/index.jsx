import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.Container}>
      <strong>Logo</strong>
      <nav>
        <ul>
          <li>intro</li>
          <li>top 3</li>
          <li>gallery</li>
          <li>work</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
  );
};
