import styles from './styles.module.scss';

export const Programmer = () => {
  return (
    <section id="home" className={styles.Container}>
      <div>
        <article className={styles.TitleContainer}>
          <h1>Meus estudos Front-End</h1>
          <p>
            A área que sou apaixonado e que mais estou tendo vontade de 
            estudar é desenvolvimento web, no momento estou focado em
            front-end. Cada dia me desafiando para buscar minha auto evolução.
          </p>
        </article>
        <article className={styles.Image}>
          <img src="/programmer.svg" alt="programador" />
        </article>
      </div>
    </section>
  );
};
