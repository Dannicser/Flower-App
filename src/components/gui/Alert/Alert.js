import "./Alert.scss";
import success from "../../../images/success_2.svg";
const Alert = ({ text }) => {
  return (
    <div className="alert__gui">
      <img src={success} alt="" />
      <div>{text}</div>
    </div>
  );
};

export default Alert;
