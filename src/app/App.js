import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasketPage from "../components/Basket/Basket";
import Navbar from "../components/Navbar/Navnar";
import CatalogPage from "../pages/CatalogPage";
import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/ProfilePage";
import WishListPage from "../pages/WishListPage";
import Page404 from "../pages/Page404";
import "./App.scss";

function App() {
  return (
    <div className="app__main__container">
      <BrowserRouter>
        <Routes>
          <Route element={<MainPage />} path="/*" />
          <Route element={<CatalogPage />} path="/catalog/*" />
          <Route element={<BasketPage />} path="/basket" />
          <Route element={<WishListPage />} path="/wishlist" />
          <Route element={<ProfilePage />} path="/profile/*" />
          <Route element={<Page404 />} path="*" />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
