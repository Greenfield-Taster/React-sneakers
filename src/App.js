function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2 style={{ margin: 0, marginBottom: 30 }}>Корзина</h2>

          <div className="Items">
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

          <ul className="cartTotalBlock">
            <li style={{ display: "flex" }}>
              <span>Итого:</span>
              <div></div>
              <b>21 657 грн.</b>
            </li>
            <li style={{ display: "flex" }}>
              <span>Налог 5%:</span>
              <div></div>
              <b>1078 грн.</b>
            </li>
          </ul>
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

          <div class="card">
            <div className="favorite">
              <img width={20} height={20} src="/img/heart-unlike.svg" alt="Unliked" />
            </div>
            <img class="displayed" src="/img/sneakers/2.png" alt="Sneakers" />
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

          <div class="card">
            <div className="favorite">
              <img width={20} height={20} src="/img/heart-unlike.svg" alt="Unliked" />
            </div>
            <img class="displayed" src="/img/sneakers/3.png" alt="Sneakers" />
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

          <div class="card">
            <div className="favorite">
              <img width={20} height={20} src="/img/heart-unlike.svg" alt="Unliked" />
            </div>
            <img class="displayed" src="/img/sneakers/4.png" alt="Sneakers" />
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

        </div>
      </div>
    </div>
  );
}

export default App;
