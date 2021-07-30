import styles from './styles.module.scss';

export const Goals = () => {
  return (
    <section id="goals" className={styles.Container}>
      <article className={styles.title}>
        <h2>Objetivos como Dev Web</h2>
        <p>Sempre buscando melhoria</p>
      </article>

      <article className={styles.TextContainer}>

        <article>
          <h3>React Native</h3>
          <p>
            Um dos meus principais objetivos é aprender React Native, acho muito 
            incrível ver uma aplicação mobile sendo desenvolvida e finalizada. Muito 
            em breve estarei começando meus estudos de React Native.
          </p>
        </article>

        <article>
          <h3>Back-end</h3>
          <p>
            No momento meu foco está sendo em front-end, mas com certeza desejo aprender 
            a parte de back-end. Acredito que começarei com NodeJs, já que vou continuar 
            utilizando javascript e aproveitar meu aprendizado com a linguagem.
          </p>
        </article>

        <article>
          <h3>VueJs</h3>
          <p>
            É um framework que tenho bastante interesse de aprender, então em breve 
            estarei aprendendo VueJs. Por ser utilizado javascript acredito que o 
            aprendizado será mais tranquilo.
          </p>
        </article>

        <article>
        <h3>Evoluir a cada dia</h3>
          <p>
            Sempre há como melhorar, sempre podemos nos desafiar e crescer como 
            desenvolvedor, para isso é necessário foco, esforço e dedicação. 
            Pensando nisso, venho a cada dia buscando minha evolução na área da 
            programação.
          </p>
        </article>
      </article>
    </section>
  );
};
