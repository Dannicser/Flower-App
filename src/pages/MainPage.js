import { Routes, Route } from "react-router-dom";
import SpecialOffer from "../components/Goods/SpecialOffers/SpecialOffers";
import Search from "../components/Search/Search";

const MainPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SpecialOffer />} />
      </Routes>
    </>
  );
};

export default MainPage;
