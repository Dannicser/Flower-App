import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasketPage from "../components/Basket/Basket";
import Navbar from "../components/Navbar/Navnar";
import Catalog from "../pages/CatalogPage";
import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/ProfilePage";
import WishListPage from "../pages/WishListPage";
import Page404 from "../pages/Page404";
import AuthEnterWithEmail from "../components/Auth/AuthEnter/AuthEnter";

import "./App.scss";

function App() {
  return (
    <div className="app__main__container">
      <BrowserRouter>
        <Routes>
          <Route element={<MainPage />} path="/" />
          <Route element={<Catalog />} path="/catalog" />
          <Route element={<BasketPage />} path="/basket" />
          <Route element={<WishListPage />} path="/wishlist" />
          <Route element={<ProfilePage />} path="/profile" />{" "}
          <Route element={<AuthEnterWithEmail />} path={"/profile/auth"} />
          <Route element={<Page404 />} path="*" />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
