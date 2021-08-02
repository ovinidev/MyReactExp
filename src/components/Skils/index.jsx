import styles from './styles.module.scss';

export const Skils = () => {
  return (
    <section id="skils" className={styles.Container}>
      <article className={styles.title}>
        <h2>Habilidades</h2>
        <p>Tudo que aprendi e venho estudando diariamente para me tornar um excelente
          desenvolvedor.
        </p>
      </article>

      <article className={styles.TextContainer}>

        <article>
          <h3>React</h3>
          <p>
            Como dito anteriormente, meus estudos de React são diários, estudando 
            hooks, consumo de API, SPA, styled components. Além do React, fiz aplicações 
            com Next.js, visando utilizar SPA, SSR e SSG em uma única aplicação.
            
          </p>
        </article>

        <article>
          <h3>HTML e CSS</h3>
          <p>
            Um dos principais fundamentos na área de desenvolvimento web. Minha principal
            preocupação como dev é criar uma aplicação semântica e acessível para
            todos os usuários, por isso é fundamental estudar e dominar HTML e CSS.
          </p>
        </article>

        <article>
          <h3>Javascript</h3>
          <p>
            Para começar a estudar React é fundamental ter uma boa noção de javascript, 
            sua sintaxe, arrow functions, map, etc. Tendo um bom entendimento de javascript,
            começar a desenvolver com React será mais tranquilo.
          </p>
        </article>

      </article>
    </section>
  );
};
