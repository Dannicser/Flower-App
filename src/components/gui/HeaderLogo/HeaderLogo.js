import search from "./icons/header__logo__search.svg";
import map from "./icons/header__logo__map.svg";
import logo from "./logo/header__logo.svg";
import "./HeaderLogo.scss";
import { NavLink } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <div className="header__logo__wrapper">
      <NavLink to="/catalog/map">
        <div className="header__map">
          <img src={map} alt="" />
        </div>{" "}
      </NavLink>
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <div className="header__logo__search">
        <NavLink to={"/catalog/search"}>
          <img src={search} alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderLogo;
