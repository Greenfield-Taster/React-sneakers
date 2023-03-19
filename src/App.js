function App() {
  return (
    <div className="wrapper">
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
        <h1>Все кроссовки</h1>

        <div className="sneakers">
        <div class="card">
          <img class="displayed" width={133} height={133} src="/img/sneakers/1.png" alt="Sneakers" />
          <h5>Мужский кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="textButton">
              <span>Цена:</span>
              <b>12 999 грн.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.png" alt="Plus" />
            </button>
          </div>
        </div>

        <div class="card">
          <img class="displayed" width={133} height={133} src="/img/sneakers/2.png" alt="Sneakers" />
          <h5>Мужский кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="textButton">
              <span>Цена:</span>
              <b>12 999 грн.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.png" alt="Plus" />
            </button>
          </div>
        </div>

        <div class="card">
          <img class="displayed" width={133} height={133} src="/img/sneakers/3.png" alt="Sneakers" />
          <h5>Мужский кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="textButton">
              <span>Цена:</span>
              <b>12 999 грн.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.png" alt="Plus" />
            </button>
          </div>
        </div>

        <div class="card">
          <img class="displayed" width={133} height={133} src="/img/sneakers/4.png" alt="Sneakers" />
          <h5>Мужский кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="textButton">
              <span>Цена:</span>
              <b>12 999 грн.</b>
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
