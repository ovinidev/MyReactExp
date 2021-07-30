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
          <a
            href="https://vinimedeiros13.github.io/CalculadoraIMC/"
            target="_blank"
            rel="noreferrer">
            <img src="/imc.png" alt="Calculadora imc" />
          </a>
          <p>Meu primeiro projeto com HTML, CSS e JS.</p>
        </article>

        <article>
          <h3>Move It</h3>
          <a 
            href="https://move-it-lemon.vercel.app/"
            target="_blank"
            rel="noreferrer">
            <img src="/moveit.png" alt="Move It" />
          </a>
          <p>Primeira aplicação feita em NodeJs realizado na NLW 4 da Rocketseat.</p>
        </article>

        <article>
          <h3>Podcastr</h3>
          <a
            href="https://github.com/vinimedeiros13/Podcastr"
            target="_blank"
            rel="noreferrer">
            <img src="/podcastr.png" alt="podcastr" />
          </a>
          <p>Mais uma aplicação criada com NodeJs na NLW 5.</p>
        </article>

        <article>
          <h3>Range Hotels</h3>
          <a
            href="https://github.com/vinimedeiros13/WebDev/tree/main/Project/ProjectResponsive"
            target="_blank"
            rel="noreferrer">
            <img src="/projeto.png" alt="Range Hotels" />
          </a>
          <p>Projeto criado durante o curso de HTML, CSS e JS.</p>
        </article>

        <article>
          <h3>Infusion</h3>
          <a
            href="https://projectinfusion.netlify.app/"
            target="_blank"
            rel="noreferrer">
            <img src="/reponsivo.png" alt="Infusion" />
          </a>
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
