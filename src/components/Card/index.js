import styles from "./Card.modul.css";

console.log(styles);

function Card(props) {
  return (
    <div class="card">
      <div className="favorite" onClick={props.onFavorite}>
        <img width={20} height={20} src={props.liked} alt="Unliked" />
      </div>
      <img class="displayed" src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="cardButton">
        <div className="textButton">
          <span>Цена:</span>
          <b style={{ fontSize: 13 }}>{props.price} грн</b>
        </div>
        <button className="button" onClick={props.onPlus}>
          <img width={11} height={11} src={props.plus} alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
