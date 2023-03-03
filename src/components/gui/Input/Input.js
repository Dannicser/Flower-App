import "./Input.scss";

const Input = ({
  placeholder,
  type = "text",
  settings = {},
  name,
  onHundlerInput,
  disabled = false,
  value,
}) => {
  return (
    <div className="input__container">
      <input
        onChange={(e) => onHundlerInput(e.target.value, e.target.name)}
        name={name}
        style={settings}
        type={type}
        placeholder={placeholder}
        className="input__gui"
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
