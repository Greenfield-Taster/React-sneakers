import heartUnlike from "../assets/img/heart-unlike.svg";
import heartLike from "../assets/img/heart-like.svg";
import sneaker1 from "../assets/img/sneakers/1.png";
import plus from "../assets/img/plus.svg";
function Card() {
  return (
    <div class="card">
      <div className="favorite">
        <img width={20} height={20} src={heartUnlike} alt="Unliked" />
      </div>
      <img class="displayed" src={sneaker1} alt="Sneakers" />
      <h5>Мужский кроссовки Nike Blazer Mid Suede</h5>
      <div className="cardButton">
        <div className="textButton">
          <span>Цена:</span>
          <b style={{ fontSize: 13 }}>12 999 грн.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src={plus} alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
