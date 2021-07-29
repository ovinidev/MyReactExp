import styles from './styles.module.scss';

export const Hobby = () => {
  return (
    <section className={styles.Container}>
      <h2>Hobby</h2>
      <div className={styles.Grid1}>
        <article>
          <h3>Leitura</h3>
          <img src="/lofi.png" alt="lofi" />
          <p> Eu leio leio lei djsoa dkaosasasasasasasaskdo askdokas okd</p>
        </article>

        <article>
          <h3>Valorant</h3>
          <img src="/valorant.png" alt="valorant" />
          <p> Eu leio leio lei djsoa dkaosasasdasdasdkdo askdokas okd</p>
        </article>

        <article>
          <h3>League of legends</h3>
          <img src="/leagueoflegends.png" alt="league of legends" />
          <p> Eu leio leio lei djsoa dkaoskdo askdokasdasdasdsadsa okd</p>
        </article>
      </div>

      <div className={styles.Grid2}>
        <article>
          <h3>Filmes</h3>
          <img src="/marvel.png" alt="filmes" />
          <p> Eu leio leio lei djsoa dkaoskdo asdasdasdasdasdkdokas okd</p>
        </article>

        <article>
          <h3>Musicas</h3>
          <img src="/nike.png" alt="musicas" />
          <p> Eu leio leio lei djsoa dkaoskdo adasdasdasdasdskdokas okd</p>
        </article>
      </div>
    </section>
  );
};
