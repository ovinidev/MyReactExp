import styles from './styles.module.scss';

export const Programmer = () => {
  return (
    <section className={styles.Container}>
      <div>
        <article className={styles.TitleContainer}>
          <h1>Estou aprendendo React</h1>
          <p>
            To wrap up January, we are proud to bring you the release of Firefox 85.
            In this version we are bringing you support for the :focus-visible
            pseudo-class in CSS and associated devtools, and the complete removal of
            Flash support from Firefox.
          </p>
        </article>
        <article className={styles.Image}>
          <img src="/programmer.svg" alt="programador" />
        </article>
      </div>
    </section>
  );
};
