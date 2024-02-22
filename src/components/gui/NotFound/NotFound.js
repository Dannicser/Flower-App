import { NavLink } from "react-router-dom";
import SecondButton from "../Button/SecondButton/SecondButton";
import "./NotFound.scss";

const NotFound = ({ img, descr, title, button, textButton = "Profile", path = "profile", reload = false }) => {
  return (
    <div className="empty__wrapper">
      <div className="empty__container">
        <div className="empty__img">
          <img src={img} alt="" />
        </div>
        <div className="empty__title">{title}</div>
        <div className="empty__description">{descr}</div>
        {reload ? (
          <a href={path}>{<SecondButton text={textButton} />}</a>
        ) : (
          <NavLink to={path}>{button ? <SecondButton text={textButton} /> : null}</NavLink>
        )}
      </div>
    </div>
  );
};
export default NotFound;
