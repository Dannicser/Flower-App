import "./Loader.scss";
const Loader = ({ color }) => {
  return (
    <div className="spinner-border ms-1 text-danger" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
export default Loader;
