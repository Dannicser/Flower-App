import { GoodsList } from "../components/Goods/GoodsList/GoodsList";
import { Route, Routes } from "react-router-dom";
import { GoodsInterfase } from "../components/Goods/GoodsInterfase/GoodsInterfase";
import Search from "../components/Search/Search";
import Map from "../components/Map/Map";

const Catalog = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<GoodsList />} />
        <Route path="/:type/:id_goods" element={<GoodsInterfase />} />
        <Route path="/search" element={<Search />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </>
  );
};

export default Catalog;
