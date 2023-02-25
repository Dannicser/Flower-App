import "./Input.scss";

const Input = ({ placeholder, type, settings = {} }) => {
  return (
    <div className="input__container">
      <input
        style={settings}
        type={type}
        placeholder={placeholder}
        className="input__gui"
      />
    </div>
  );
};

export default Input;
