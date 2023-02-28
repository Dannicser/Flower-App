import "./MainButton.scss";

const MainButton = ({ text, loader = false }) => {
  return (
    <div className="btn__gui__container">
      <div className="btn__gui">{!loader ? text : <Loader />}</div>
    </div>
  );
};

const Loader = () => {
  return (
    <div className="text-center">
      <div className="spinner-border spinner-border-sm" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default MainButton;
