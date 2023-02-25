import "./SecondButton.scss";
const SecondButton = ({ text }) => {
  return (
    <div className="second__btn__gui__container">
      <div className="second__btn__gui">{text}</div>
    </div>
  );
};
export default SecondButton;
