import "./Header.scss";
import back from "../../../images/back.svg";
import { NavLink } from "react-router-dom";

const Header = ({ title, extension = false }) => {
  return extension ? (
    <ExtensionHeader title={title} />
  ) : (
    <DefaultHeader title={title} />
  );
};

const DefaultHeader = ({ title }) => {
  return (
    <div className="gui__header">
      <div className="gui__header__title center">{title}</div>
    </div>
  );
};

const ExtensionHeader = ({ title }) => {
  return (
    <div className="gui__header">
      <NavLink to="/profile">
        <div className="gui__header__back">
          <img src={back} alt="" />
        </div>
      </NavLink>
      <div className="gui__header__title">{title}</div>
      <div className="gui__header__button">{"Готово"}</div>
    </div>
  );
};

export default Header;
