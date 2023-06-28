import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import searchIcon from "./assets/img/search.png";
import removeBtn from "./assets/img/remove.svg";
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
  // const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://648b113717f1536d65ea468c.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://648b113717f1536d65ea468c.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.delete("https://648b113717f1536d65ea468c.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  // const onFavorite = (obj) => {
  //   axios.delete("https://648b113717f1536d65ea468c.mockapi.io/favorrites", obj);
  //   setFavorites((prev) => [...prev, obj]);
  // };

  const onRemoveItem = (id) => {
    axios.delete(`https://648b113717f1536d65ea468c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="search-text">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>

          <div className="search-block">
            <img className="search-block-img" src={searchIcon} alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear"
                src={removeBtn}
                alt="Clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              style={{ outline: "none" }}
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="sneakers">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                // liked={heartUnlike}
                plus={plus}
                plusAdded={plusAdded}
                // onFavorite={() => console.log("Добавили в закладки")}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
