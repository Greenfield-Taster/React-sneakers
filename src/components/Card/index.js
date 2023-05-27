import React from "react";
import styles from "./Card.module.css";

import plusCard from "../Card/img/plus.svg";
import plusAddedCard from "../Card/img/icons8-done-24.png";

import heartLike from "../Card/img/heart-like.svg";
import heartUnlike from "../Card/img/heart-unlike.svg";

console.log(styles);

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  const [isFollowed, setIsFollow] = React.useState(false);

  const onClickFollow = () => {
    setIsFollow(!isFollowed);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
        <img
          onClick={onClickFollow}
          src={isFollowed ? heartLike : heartUnlike}
          alt="Unliked"
        />
      </div>
      <img class={styles.displayed} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className={styles.cardButton}>
        <div className={styles.textButton}>
          <span>Цена:</span>
          <b style={{ fontSize: 13 }}>{props.price} грн</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? plusAddedCard : plusCard}
          alt="Plus"
        />
      </div>
    </div>
  );
}
export default Card;
