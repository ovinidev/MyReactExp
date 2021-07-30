import styles from './styles.module.scss';

export const Description = () => {
  return (
    <section id="description" className={styles.Container}>
      <article className={styles.TextContainer}>
        <h2>Diariamente estudando React</h2>
        <p>
          Me chamo Vinícius, curso Engenharia de Computação e tenho 19 anos. Meus 
          estudos de desenvolvimento web começaram quando eu estava no segundo período
          do curso, tinha visto Python e C. Comecei meus estudos front-end através
          de cursos na plataforma Udemy.
        </p>
        <p>
          Comecei meus estudos front-end com o bom e velho HTML, CSS e JS. Fiquei
          aproximadamente 3 meses estudando, fazendo projetos e melhorando a cada dia,
          como eu ja tinha noção de programação, foi muito mais fácil aprender javascript,
          uma linguagem poderosa e tranquila de se trabalhar.
        </p>
        <p>
          Atualmente estou empenhado em estudar React diariamente, aprendendo seus 
          principais Hooks, o objetivo dessa aplicação é treinar a parte de components,
          essa é uma das grandes vantagens de utilizar o React.
        </p>
      </article>
    </section>
  );
};
