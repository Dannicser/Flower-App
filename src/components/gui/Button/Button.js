import "./Button.scss";

const Button = ({ text, width }) => {
  return (
    <div className="btn__gui__container">
      <div className="btn__gui">{text}</div>
    </div>
  );
};
export default Button;
