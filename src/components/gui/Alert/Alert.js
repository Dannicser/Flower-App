import "./Alert.scss";

const Alert = ({ type, text }) => {
  return (
    <div className="alert__wrapper">
      <div className={"alert alert-" + type} role="alert"></div>
    </div>
  );
};

export default Alert;
