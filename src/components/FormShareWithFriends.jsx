import { useState } from 'react';
import styles from './FormShareWithFriends.module.css';

export function FormShareWithFriends() {
  const [inputValue, setInputValue] = useState('');

  function handleValidateInputs(event) {
    event.preventDefault();

    const regexValidateEmail = /^\S+@\S+\.\S+$/;

    if (!regexValidateEmail.test(inputValue)) {
      alert('Insira um E-mail válido');
      return;
    }

    alert('Compartilhamento feito com sucesso');
    window.location.reload();
  }

  return (
    <div>
      <p className={styles.paragraph}>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>

      <form id='share' onSubmit={handleValidateInputs} className={styles.form}>
        <div className={styles.inputsContainer}>
          <div>
            <label htmlFor="friendName">Nome do seu amigo: </label>
            <input type="text" id="friendName" required />
          </div>
          <div>
            <label htmlFor="emailFriend">E-mail:</label>
            <input
              type="text"
              id="emailFriend"
              onChange={e => setInputValue(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Enviar agora</button>
      </form>
    </div>
  );
}
