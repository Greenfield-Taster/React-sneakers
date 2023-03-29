function Card(){
    return (
<div class="card">
            <div className="favorite">
              <img width={20} height={20} src="/img/heart-unlike.svg" alt="Unliked" />
            </div>
            <img class="displayed" src="/img/sneakers/1.png" alt="Sneakers" />
            <h5>Мужский кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardButton">
              <div className="textButton">
                <span>Цена:</span>
                <b style={{ fontSize: 13 }}>12 999 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
    );
}
export default Card;