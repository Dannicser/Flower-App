import "./Navbar.scss";
import { navbar, basket, favorites, profile, search } from "./icons/index.js";
const Navbar = () => {
  return (
    <nav>
      <hr />
      <div className="container-sm">
        <div className="nav__wrapper">
          <div className="nav__item">
            <img className="nav__icon" src={navbar} alt="" />
            <div className="nav__title">Главная</div>
          </div>
          <div className="nav__item">
            <img className="nav__icon" src={search} alt="" />
            <div className="nav__title">Каталог</div>
          </div>
          <div className="nav__item">
            <img className="nav__icon" src={basket} alt="" />
            <div className="nav__title">Корзина</div>
          </div>
          <div className="nav__item">
            <img className="nav__icon" src={favorites} alt="" />
            <div className="nav__title">Избранное</div>
          </div>
          <div className="nav__item">
            <img className="nav__icon" src={profile} alt="" />
            <div className="nav__title">Профиль</div>
          </div>
        </div>
        <div className="nav_line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
