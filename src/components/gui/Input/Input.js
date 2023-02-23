import "./Input.scss";

const Input = ({ placeholder, type }) => {
  return (
    <div className="input__container">
      <input type={type} placeholder={placeholder} className="input__gui" />
    </div>
  );
};

export default Input;
