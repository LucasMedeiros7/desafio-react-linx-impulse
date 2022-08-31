import { useState } from 'react';

import styles from './FormNewsLetter.module.css';

export function FormNewsLetter() {
  const [checkbox, setCheckbox] = useState('');

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <h2>Ajude o algorítimo a ser mais certeiro</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris
          rhoncus erat sed interdum dignissim. Suspendisse semper pretium
          consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus
          quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia
          euismod augue vel egestas. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel
          urna tortor. Vivamus et arcu non felis tristique eleifend.
        </p>
        <p>
          Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum
          ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed,
          egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut
          neque mattis, consequat velit ut, ultrices orci. Nulla varius
          elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra,
          magna ac luctus commodo, odio ante suscipit libero, at mattis augue
          est vel metus.
        </p>
      </aside>

      <form className={styles.form}>
        <div className={styles.formInputs}>
          <label htmlFor="name">Seu nome:</label>
          <input type="text" id="name" />

          <label htmlFor="email">E-mail:</label>
          <input type="text" id="email" />

          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" />
        </div>

        <div className={styles.checkboxes}>
          <input
            type="radio"
            id="masculino"
            checked={checkbox === 'masculino'}
            onChange={() => setCheckbox('masculino')}
          />
          <label htmlFor="masculino">Masculino</label>

          <input
            type="radio"
            id="feminino"
            checked={checkbox === 'feminino'}
            onChange={() => setCheckbox('feminino')}
          />
          <label htmlFor="feminino">Feminino</label>
        </div>

        <button>Enviar</button>
      </form>
    </div>
  );
}
