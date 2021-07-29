import styles from './styles.module.scss';

export const Skils = () => {
  return (
    <section className={styles.Container}>
      <article className={styles.title}>
        <h2>Algumas skils</h2>
        <p>Sempre buscando melhoria</p>
      </article>

      <article className={styles.TextContainer}>

        <article>
          <h3>React</h3>
          <p>
            To wrap up January, we are proud to bring you the release of Firefox 85.
            In this version we are bringing you support for the :focus-visible
            pseudo-class in CSS and associated devtools, and the complete removal of
            Flash support from Firefox.
          </p>
        </article>

        <article>
          <h3>React</h3>
          <p>
            To wrap up January, we are proud to bring you the release of Firefox 85.
            In this version we are bringing you support for the :focus-visible
            pseudo-class in CSS and associated devtools, and the complete removal of
            Flash support from Firefox.
          </p>
        </article>

        <article>
          <h3>React</h3>
          <p>
            To wrap up January, we are proud to bring you the release of Firefox 85.
            In this version we are bringing you support for the :focus-visible
            pseudo-class in CSS and associated devtools, and the complete removal of
            Flash support from Firefox.
          </p>
        </article>

      </article>
    </section>
  );
};
