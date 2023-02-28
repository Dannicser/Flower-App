import SecondButton from "../Button/SecondButton/SecondButton";
import "./NotFound.scss";

const NotFound = ({ img, descr, title, button, textButton = "Профиль" }) => {
  return (
    <div className="empty__wrapper">
      <div className="empty__container">
        <div className="empty__img">
          <img src={img} alt="" />
        </div>
        <div className="empty__title">{title}</div>
        <div className="empty__description">{descr}</div>
        <a href="/profile">
          {button ? <SecondButton text={textButton} /> : null}
        </a>
      </div>
    </div>
  );
};
export default NotFound;
