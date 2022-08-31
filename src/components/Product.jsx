import styles from './Product.module.css';

export function Product(props) {
  return (
    <div className={styles.container}>
      <img className={styles.productImg} src={props.image} alt="" />

      <div className={styles.infoProduct}>
        <div className={styles.nameAndDescription}>
          <strong>{props.name}</strong>
          <p>{props.description}</p>
        </div>

        <div className={styles.price}>
          <span>De: R$ {props.oldPrice - 1},99</span>

          <strong>Por: R$ {props.price - 1},99</strong>

          <small>
            ou {props.installments.count}x de R${' '}
            {String(props.installments.value).replace('.', ',')}0
          </small>
        </div>

        <button>Comprar</button>
      </div>
    </div>
  );
}
