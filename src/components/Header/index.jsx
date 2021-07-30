import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.Container}>
      <strong>React</strong>
      <nav>
        <ul>
          <a href="#">Home</a>
          <a href="#description">Descrição</a>
          <a href="#projetos">Projetos</a>
          <a href="#goals">Objetivos</a>
          <a href="#hobby">Hobbies</a>
        </ul>
      </nav>
    </header>
  );
};
