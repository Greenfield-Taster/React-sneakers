import removeBtn from "../assets/img/remove.svg";
import emptyBox from "../assets/img/open-box.png";

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2
          style={{
            margin: 0,
            marginBottom: 30,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Корзина{" "}
          <img
            onClick={onClose}
            className="removeBtn"
            width={25}
            height={25}
            src={removeBtn}
            alt="Remove"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="Items" style={{ flex: 1 }}>
              {items.map((obj) => (
                <div className="cartItem">
                  <img
                    style={{
                      marginRight: 20,
                      backgroundImage: "url({obj.imageUrl})",
                    }}
                    width={70}
                    height={70}
                    // src="./assets/img/sneakers/1.png"
                    alt="Sneakers"
                  />
                  <div style={{ marginRight: 20 }}>
                    <p style={{ marginBottom: 5, fontSize: 16 }}>{obj.title}</p>
                    <b style={{ fontSize: 14 }}>{obj.price} грн</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    width={25}
                    height={25}
                    src={removeBtn}
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 657 грн.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1078 грн.</b>
                </li>
              </ul>
              <button className="greenButton">Оформить заказ</button>
            </div>
          </div>
        ) : (
          <div onClick={onClose} className="cartEmpty">
            <img src={emptyBox} alt="Empty" />
            <h2>Корзина пустая</h2>
            <p style={{ opacity: "6px" }}>
              Добавьте хотя бы пару кроссовок, чтоб сделать заказ.
            </p>
            <button className="greenButton">Вернуться назад</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
