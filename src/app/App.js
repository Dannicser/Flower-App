import Auth from "../components/Auth/Auth";
import Basket from "../components/Basket/Basket";
import Favorites from "../components/Favorites/Favorites";
import Navbar from "../components/Navbar/Navnar";

import "./App.scss";

function App() {
  return (
    <div className="app__main__container">
      {/* <Favorites /> */}
      {/* <Auth /> */}
      <Basket />
      <Navbar />
    </div>
  );
}

export default App;
