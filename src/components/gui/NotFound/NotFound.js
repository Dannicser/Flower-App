import SecondButton from "../Button/SecondButton/SecondButton";
import "./NotFound.scss";

const NotFound = ({ img, descr, title, button }) => {
  return (
    <div className="empty__wrapper">
      <div className="empty__container">
        <div className="empty__img">
          <img src={img} alt="" />
        </div>
        <div className="empty__title">{title}</div>
        <div className="empty__description">{descr}</div>
        {button ? <SecondButton text={"Профиль"} /> : null}
      </div>
    </div>
  );
};
export default NotFound;
