import "./NotFound.scss";

const NotFound = ({ img, descr, title }) => {
  return (
    <div className="empty__wrapper">
      <div className="empty__container">
        <div className="empty__img">
          <img src={img} alt="" />
        </div>
        <div className="empty__title">{title}</div>
        <div className="empty__description">{descr}</div>
      </div>
    </div>
  );
};
export default NotFound;
