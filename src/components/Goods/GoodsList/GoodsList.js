import { useEffect, useState } from "react";
import UseGoodsService from "../../../services/UseGoodsService";
import CarouselGoods from "../CarouselGoods/CarouselGoods";
import GoodsCard from "../GoodsCard/GoodsCard";
import Loader from "../../gui/Loader/Loader.js";
import HeaderLogo from "../../../components/gui/HeaderLogo/HeaderLogo";
import "./GoodsList.scss";
import axios from "axios";

const goods_data_from_server = [
  {
    items: [
      {
        name: "goods 1",
        price: 100,
      },
      {
        name: "goods 1",
        price: 100,
      },
      {
        name: "goods 1",
        price: 100,
      },
      {
        name: "goods 1",
        price: 100,
      },
    ],
    address: {
      street: "string",
      city: "string",
      zip_code: "string",
    },
  },
];

const GoodsList = () => {
  const [goods, setGoods] = useState([]);

  const { onGetGoodsByType, loading } = UseGoodsService();

  useEffect(() => {
    onGetGoods();
  }, []);

  const onGetGoods = async () => {
    try {
      //тут запрос на получении товаров

      // const response = await axios.get("");

      setGoods(goods_data_from_server[0].items);
    } catch (error) {}
  };

  console.log(goods);

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
      {/* <CarouselGoods onChooseTypeGoods={onChooseTypeGoods} /> */}
      {content}
    </>
  );
};

const List = ({ goods }) => {
  return (
    <div className="goods_wrapper">
      <ul className="goods__list">
        {goods.map((el, i) => {
          return (
            <li key={el.id}>
              <GoodsCard title={el.name} img={""} price={el.price} descr={""} id={i} composition={""} type={""} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { List, GoodsList };
