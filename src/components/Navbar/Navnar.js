import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { navbar, basket, favorites, profile, search } from "./icons/index.js";

const Navbar = () => {
  const auth = localStorage.getItem("token");
  const page = auth ? "/profile" : "profile/auth";

  return (
    <nav>
      <hr />
      <div className="container-sm">
        <div className="nav__wrapper">
          <NavLink to={"/"}>
            <div className="nav__item">
              <img className="nav__icon" src={navbar} alt="" />
              <div className="nav__title">Главная</div>
            </div>
          </NavLink>
          <NavLink to={"/catalog"}>
            <div className="nav__item">
              <img className="nav__icon" src={search} alt="" />
              <div className="nav__title">Каталог</div>
            </div>
          </NavLink>
          <NavLink to="/basket">
            <div className="nav__item">
              <img className="nav__icon" src={basket} alt="" />
              <div className="nav__title">Корзина</div>
            </div>
          </NavLink>
          <NavLink to="/wishlist">
            <div className="nav__item">
              <img className="nav__icon" src={favorites} alt="" />
              <div className="nav__title">Избранное</div>
            </div>
          </NavLink>
          <NavLink to={page}>
            <div className="nav__item">
              <img className="nav__icon" src={profile} alt="" />
              <div className="nav__title">Профиль</div>
            </div>
          </NavLink>
        </div>
        <div className="nav_line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
