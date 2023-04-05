import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import searchIcon from "./assets/img/search.png";

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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
