import "./MainButton.scss";

const MainButton = ({ text }) => {
  return (
    <div className="btn__gui__container">
      <div className="btn__gui">{text}</div>
    </div>
  );
};
export default MainButton;
