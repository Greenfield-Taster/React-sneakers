function Header(){
    return(
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
    );
}
export default Header;