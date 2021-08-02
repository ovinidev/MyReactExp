/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    document.getElementById('Menu').checked = false;
  }, [clicked]);
  
  return (
    <div>
      <input className={styles.Menu} id="Menu" type="checkbox" aria-label="close" role="button" />
      <label className={styles.Label} htmlFor="Menu" title="Close menu"></label>
      <header className={styles.Container}>
        <strong><a href="#home">React</a></strong>
        <nav>
          <ul onClick={handleClick}>
            <a href="#description">Descrição</a>
            <a href="#skils">Habilidades</a>
            <a href="#projetos">Projetos</a>
            <a href="#goals">Objetivos</a>
            <a href="#hobby">Hobbies</a>
          </ul>
        </nav>
      </header>
    </div>
  );
};
