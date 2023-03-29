import Card from './components/Card'

function App() {
  return (
    <div className="wrapper">
      <div style={{display: "none"}} className="overlay">
        <div className="drawer">
          <h2 style={{ margin: 0, marginBottom: 30, display: "flex", justifyContent: "space-between" }}>
            Корзина <img className="removeBtn" width={25} height={25} src="/img/remove.svg" alt="Remove" />
          </h2>

          <div className="Items" style={{ flex: 1 }}>
            <div className="cartItem">
              <img style={{ marginRight: 20 }} width={70} height={70} src="/img/sneakers/1.png" alt="Sneakers" />
              <div style={{ marginRight: 20 }}>
                <p style={{ marginBottom: 5, fontSize: 16 }}>Мужские кроссовки Nike Air Max 270</p>
                <b style={{ fontSize: 14 }}>12 999 грн.</b>
              </div>
              <img className="removeBtn" width={25} height={25} src="/img/remove.svg" alt="Remove" />
            </div>

            <div className="cartItem">
              <img style={{ marginRight: 20 }} width={70} height={70} src="/img/sneakers/2.png" alt="Sneakers" />
              <div style={{ marginRight: 20 }}>
                <p style={{ marginBottom: 5, fontSize: 16 }}>Мужские кроссовки Nike Air Max 270</p>
                <b style={{ fontSize: 14 }}>12 999 грн.</b>
              </div>
              <img className="removeBtn" width={25} height={25} src="/img/remove.svg" alt="Remove" />
            </div>
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
      </div>

      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={20} height={20} src="/img/cart.png" />
            <span>1200 грн.</span>
          </li>
          <li>
            <img width={23} height={23} src="/img/user.png" />
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="search-text">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img className="search-block-img" src="/img/search.png" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
