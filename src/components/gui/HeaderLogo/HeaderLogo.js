import search from "./icons/header__logo__search.svg";
import map from "./icons/header__logo__map.svg";
import logo from "./logo/header__logo.svg";
import "./HeaderLogo.scss";

const HeaderLogo = () => {
  return (
    <div className="header__logo__wrapper">
      <div className="header__map">
        <img src={map} alt="" />
      </div>
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <div className="header__logo__search">
        <img src={search} alt="" />
      </div>
    </div>
  );
};

export default HeaderLogo;
