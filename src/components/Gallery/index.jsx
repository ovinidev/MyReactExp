import styles from './styles.module.scss';

export const Gallery = () => {
  return (
    <section id="projetos" className={styles.Container}>
      <article className={styles.title}>
        <h2>Meus projetos</h2>
        <p>Algumas aplicação feitas por mim durante todo meu estudo de React.</p>
      </article>

      <article className={styles.TextContainer}>
        <article>
          <h3>Calculadora imc</h3>
          <img src="/imc.png" alt="Calculadora imc" />
          <p>Meu primeiro projeto com HTML, CSS e JS.</p>
        </article>

        <article>
          <h3>Move It</h3>
          <img src="/moveit.png" alt="Move It" />
          <p>Primeira aplicação feita em NodeJs realizado na NLW 4 da Rocketseat.</p>
        </article>

        <article>
          <h3>Podcastr</h3>
          <img src="/podcastr.png" alt="podcastr" />
          <p>Mais uma aplicação criada com NodeJs na NLW 5.</p>
        </article>

        <article>
          <h3>Range Hotels</h3>
          <img src="/projeto.png" alt="Range Hotels" />
          <p>Projeto criado durante o curso de HTML, CSS e JS.</p>
        </article>

        <article>
          <h3>Infusion</h3>
          <img src="/reponsivo.png" alt="Infusion" />
          <p>Mais um projeto realizado no curso, meu primeiro projeto responsivo.</p>
        </article>

        <article>
          <h3>Components</h3>
          <img src="/landing.png" alt="landing pages" />
          <p>Esse projeto que tive como objetivo treinar components em React.</p>
        </article>
      </article>
    </section>
  );
};
