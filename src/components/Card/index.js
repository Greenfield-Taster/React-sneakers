import React from "react";
import styles from "./Card.module.css";

import plusCard from "../Card/img/plus.svg";
import plusAddedCard from "../Card/img/icons8-done-24.png";

import heartLike from "../Card/img/heart-like.svg";
import heartUnlike from "../Card/img/heart-unlike.svg";

function Card({ title, imageUrl, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  // const [isFollowed, setIsFollow] = React.useState(false);

  // const onClickFollow = () => {
  //   setIsFollow(!isFollowed);
  // };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          onClick={onClickFavorite}
          src={isFavorite ? heartLike : heartUnlike}
          alt="Unliked"
        />
      </div>
      <img className={styles.displayed} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className={styles.cardButton}>
        <div className={styles.textButton}>
          <span>Цена:</span>
          <b style={{ fontSize: 13 }}>{price} грн</b>
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
