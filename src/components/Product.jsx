import styles from './Product.module.css';

export function Product(props) {
  return (
    <div>
      <img className={styles.productImg} src={props.image} alt="" />

      <div className={styles.nameAndDescription}>
        <strong>{props.name}</strong>
        <p>{props.description}</p>
      </div>

      <div className={styles.price}>
        <span>De: R${props.oldPrice}</span>
        <strong>Por: R${props.price}</strong>
        <small>
          ou {props.installments.count}x de R${props.installments.value}0
        </small>
      </div>
    </div>
  );
}
