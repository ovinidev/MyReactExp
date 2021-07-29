import styles from './styles.module.scss';

export const Gallery = () => {
  return (
    <section className={styles.Container}>
      <article className={styles.title}>
        <h2>Alguns projetos</h2>
        <p>Sempre buscando melhoria</p>
      </article>

      <article className={styles.TextContainer}>

        <article>
          <img src="/imc.png" alt="imagem" />
        </article>

        <article>
          <img src="/moveit.png" alt="imagem" />
        </article>

        <article>
          <img src="/podcastr.png" alt="imagem" />
        </article>

        <article>
          <img src="/projeto.png" alt="imagem" />
        </article>

        <article>
          <img src="/reponsivo.png" alt="imagem" />
        </article>

        <article>
          <img src="/imc.png" alt="imagem" />
        </article>

      </article>
    </section>
  );
};
