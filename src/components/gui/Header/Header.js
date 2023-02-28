import "./Header.scss";
import back from "../../../images/back.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ title, extension = false, onRequest = null, button }) => {
  return extension ? (
    <ExtensionHeader button={button} onRequest={onRequest} title={title} />
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

const ExtensionHeader = ({ title, onRequest, button = true }) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const style = {};
  return (
    <div className="gui__header">
      <NavLink onClick={goBack}>
        <div className="gui__header__back">
          <img src={back} alt="" />
        </div>
      </NavLink>
      <div style={style} className="gui__header__title">
        {title}
      </div>
      {button ? (
        <div onClick={() => onRequest()} className="gui__header__button">
          {"Готово"}
        </div>
      ) : (
        <div className="mr" />
      )}
    </div>
  );
};

export default Header;
