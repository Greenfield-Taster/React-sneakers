import heartUnlike from "../assets/img/heart-unlike.svg";
import heartLike from "../assets/img/heart-like.svg";
import plus from "../assets/img/plus.svg";

function Card(props) {
  return (
    <div class="card">
      <div className="favorite">
        <img width={20} height={20} src={props.liked} alt="Unliked" />
      </div>
      <img class="displayed" src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="cardButton">
        <div className="textButton">
          <span>Цена:</span>
          <b style={{ fontSize: 13 }}>{props.price}</b>
        </div>
        <button className="button">
          <img width={11} height={11} src={plus} alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
