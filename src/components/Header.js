import logo from "../assets/img/logo.png";
import cart from "../assets/img/cart.png";
import user from "../assets/img/user.png";

function Header(props) {
  return (
    <header>
      <div className="headerLeft">
        <img width={40} height={40} src={logo} />
        <div>
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight">
        <li onClick={props.onClickCart}>
          <img width={20} height={20} src={cart} />
          <span>1200 грн.</span>
        </li>
        <li>
          <img width={23} height={23} src={user} />
        </li>
      </ul>
    </header>
  );
}
export default Header;
