import Auth from "../components/Auth/Auth";
import Navbar from "../components/Navbar/Navnar";
import "./App.scss";

function App() {
  return (
    <div className="app__main__container">
      <Auth />
      <Navbar />
    </div>
  );
}

export default App;
