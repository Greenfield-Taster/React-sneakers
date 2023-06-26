import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import searchIcon from "./assets/img/search.png";
// import sneak1 from "./assets/img/sneakers/1.png";
// import sneak2 from "../src/assets/img/sneakers/2.png";
// import sneak3 from "../src/assets/img/sneakers/3.png";
// import sneak4 from "../src/assets/img/sneakers/4.png";
// import sneak5 from "../src/assets/img/sneakers/5.png";
// import sneak6 from "../src/assets/img/sneakers/6.png";
// import sneak7 from "../src/assets/img/sneakers/7.png";
import heartLike from "./assets/img/heart-like.svg";
import heartUnlike from "../src/assets/img/heart-unlike.svg";
import plus from "../src/assets/img/plus.svg";
import plusAdded from "../src/assets/img/icons8-done-24.png";

function App() {
  let [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://648b113717f1536d65ea468c.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="search-text">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img className="search-block-img" src={searchIcon} alt="Search" />
            <input style={{ outline: "none" }} placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              liked={heartUnlike}
              plus={plus}
              plusAdded={plusAdded}
              onFavorite={() => console.log("Добавили в закладки")}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
