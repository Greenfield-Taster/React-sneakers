import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import searchIcon from "./assets/img/search.png";
import sneak1 from "../src/assets/img/sneakers/1.png";
import sneak2 from "../src/assets/img/sneakers/2.png";
import sneak3 from "../src/assets/img/sneakers/3.png";
import sneak4 from "../src/assets/img/sneakers/4.png";
import heartLike from "../src/assets/img/heart-like.svg";
import heartUnlike from "../src/assets/img/heart-unlike.svg";

const arr = [
  {
    title: "Мужский кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: sneak1,
  },
  {
    title: "Мужский кроссовки Nike Air Max 230",
    price: 15100,
    imageUrl: sneak2,
  },
  {
    title: "Kроссовки Nike Air Free 550",
    price: 8099,
    imageUrl: sneak3,
  },
  {
    title: "Kроссовки Puma X Aka Boku Future Rider",
    price: 13000,
    imageUrl: sneak4,
  },
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="search-text">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img className="search-block-img" src={searchIcon} alt="Search" />
            <input style={{ outline: "none" }} placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              liked={heartUnlike}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
