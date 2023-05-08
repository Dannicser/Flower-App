import { useEffect, useState } from "react";
import Banner from "../components/Goods/Banner/Banner";
import HeaderLogo from "../components/gui/HeaderLogo/HeaderLogo";
import Slider from "../components/gui/Slider/Slider";
import UseGoodsService from "../services/UseGoodsService";
import Loader from "../components/gui/Loader/Loader";

const MainPage = () => {
  const { onGetPopularGoods, onGetDiscountGoods, loading } = UseGoodsService();

  const [goodsPopular, setGoodsPopular] = useState([]);
  const [goodsDiscount, setGoodsDiscount] = useState([]);

  useEffect(() => {
    onGetPopularGoods().then((data) => setGoodsPopular(data));
  }, []);

  useEffect(() => {
    onGetDiscountGoods().then((data) => setGoodsDiscount(data));
  }, []);

  const banners = [
    {
      id: 1,
      img: "https://www.hawk.ru/media/filebrowser/yablonka_gl-01.jpg",
    },
    {
      id: 2,
      img: "https://sun9-9.userapi.com/impg/EQ_-axqRARNoKjFwQJwl_X6xfu_c2QdZduoDJw/oaeSiy1E1y8.jpg?size=1244x720&quality=96&sign=7c4f78ceb864a913997f40d1b9e5b164&type=album",
    },
  ];

  return (
    <div className="main__page__container">
      <HeaderLogo />
      <Banner data={banners} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Slider title={"Популярные товары"} goods={goodsPopular} />
          <Slider title={"Товары co скидкой"} goods={goodsDiscount} />
        </>
      )}
    </div>
  );
};

export default MainPage;
