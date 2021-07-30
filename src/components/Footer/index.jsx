/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/alt-text */
import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <div>
      <footer className={styles.Container}>
        <strong className={styles.Title}>Feito com 💜 por Vinícius</strong>
        <div className={styles.Icons}>
          <a href="https://www.instagram.com/vinimedeiros13/" target="_blank" rel="noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/vinimedeiros13/" target="_blank" rel="noreferrer">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.youtube.com/watch?v=7zHfYLDQEvw" target="_blank" rel="noreferrer">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </footer>
      <a href="#" className={styles.Top}>
        <i class="fas fa-arrow-up"></i>
      </a>
    </div>
  );
};
