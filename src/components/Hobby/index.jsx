import styles from './styles.module.scss';

export const Hobby = () => {
  return (
    <section id="hobby" className={styles.Container}>
      <h2>Hobbies</h2>
      <p>Coisas que curto fazer em meu tempo livre.</p>
      <div className={styles.Grid1}>
        <article>
          <h3>Leitura</h3>
          <img src="/lofi.png" alt="lofi" />
          <p>
            Ler é uma boa estratégia para relaxar em meio a tantas informações
            que recebemos no nosso dia a dia.
          </p>
        </article>

        <article>
          <h3>Valorant</h3>
          <img src="/valorant.png" alt="valorant" />
          <p>
            Nos fins de semana eu gosto de jogar Valorant com meus amigos, um dos
            melhores jogos FPS da atualidade.
          </p>
        </article>

        <article>
          <h3>League of legends</h3>
          <img src="/leagueoflegends.png" alt="league of legends" />
          <p>
            Além do valorant, também curto jogar um lolzinho nas madrugadas. Disparado
            o melhor jogo MOBA da atualidade.
          </p>
        </article>
      </div>

      <div className={styles.Grid2}>
        <article>
          <h3>Filmes</h3>
          <img src="/marvel.png" alt="filmes" />
          <p>Um dos meus hobbies favoritos é ir ao cinema para ver os melhores filmes
            do ano.
          </p>
        </article>

        <article>
          <h3>Musicas</h3>
          <img src="/nike.png" alt="musicas" />
          <p>Durante todo meu dia estou ouvindo músicas, trap brasileiro como destaque.
          <a
            href="https://open.spotify.com/playlist/1FqEEPdabTGDX7BBYHsHTt?si=7271fe8fa1954a3f" 
            target="_blank"
            rel="noreferrer"> Minha playlist.</a>
          </p>
        </article>
      </div>
    </section>
  );
};
