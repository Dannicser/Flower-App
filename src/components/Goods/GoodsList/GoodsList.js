import { useEffect, useState } from "react";
import UseGoodsService from "../../../services/UseGoodsService";
import CarouselGoods from "../CarouselGoods/CarouselGoods";
import GoodsCard from "../GoodsCard/GoodsCard";
import Loader from "../../gui/Loader/Loader.js";
import HeaderLogo from "../../../components/gui/HeaderLogo/HeaderLogo";
import "./GoodsList.scss";

const GoodsList = () => {
  const [goods, setGoods] = useState([]);

  const { onGetGoodsByType, loading } = UseGoodsService();

  useEffect(() => {
    onGetGoodsByType("classic").then((data) => setGoods(data));
  }, []);

  const onChooseTypeGoods = (type) => {
    onRequest(type);
  };

  const onRequest = (type) => {
    onGetGoodsByType(type).then((data) => setGoods(data));
  };

  const content = loading ? (
    <div className="goods__loader">
      <Loader />
    </div>
  ) : (
    <List goods={goods} />
  );

  return (
    <>
      <HeaderLogo />
      <CarouselGoods onChooseTypeGoods={onChooseTypeGoods} />
      {content}
    </>
  );
};

const List = ({ goods }) => {
  return (
    <ul className="goods__list">
      {goods.map((el) => {
        return (
          <li key={el.id}>
            <GoodsCard
              title={el.title}
              img={el.img}
              price={el.price}
              descr={el.descr}
              id={el.id}
              composition={el.composition}
              type={el.type}
            />
          </li>
        );
      })}
    </ul>
  );
};

export { List, GoodsList };
