import styles from './FormShareWithFriends.module.css'

export function FormShareWithFriends() {
  return (
    <div>
      <p className={styles.paragraph}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>

      <form className={styles.form}>
        <div className={styles.inputsContainer}>
          <div>
            <label htmlFor="friendName">Nome do seu amigo:</label>
            <input type="text" id="friendName" />
          </div>
          <div>
            <label htmlFor="emailFriend">E-mail:</label>
            <input type="text" id="emailFriend" />
          </div>
        </div>
        <button>Enviar agora</button>
      </form>
    </div>
  )
}