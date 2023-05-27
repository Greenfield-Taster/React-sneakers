import React from "react";
import styles from "./Card.module.css";

console.log(styles);

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
        <img src={props.liked} alt="Unliked" />
      </div>
      <img class={styles.displayed} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className={styles.cardButton}>
        <div className={styles.textButton}>
          <span>Цена:</span>
          <b style={{ fontSize: 13 }}>{props.price} грн</b>
        </div>
        <button className={styles.button} onClick={props.onPlus}>
          <img width={11} height={11} src={props.plus} alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
