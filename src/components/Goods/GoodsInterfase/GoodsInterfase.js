import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../gui/Headers/Header/Header.js";
import "./GoodsInterface.scss";
import heartActive from "../../../images/heart_active.svg";
import heartNoActive from "../../../images/no_active_heart.svg";
import UseGoodsService from "../../../services/UseGoodsService";
import Loader from "../../gui/Loader/Loader";
import Counter from "../Counter/Counter.js";
import { goods_data_from_server } from "../../../data/data.js";

const GoodsInterfase = () => {
  const { id, type } = useParams();
  const { onGetGoodsById, loading } = UseGoodsService();
  const [propsGoods, setPropertiesGoods] = useState({ title: "...", price: 0 });
  const [show, setShowWish] = useState(false);

  useEffect(() => {
    // тут надо сделаьть запрос на получение товара по id
    if (id) {
      // console.log(goods_data_from_server[0].items.find((el) => el.id == id));
      setPropertiesGoods(goods_data_from_server[0].items.find((el) => el.id == id));
    }
  }, []);

  useEffect(() => onShowWishGoods(), [propsGoods]);

  const onShowWishGoods = () => {
    const goodsWish = JSON.parse(localStorage.getItem("wishlist")) || [];

    for (let value of goodsWish) {
      if (value.id === propsGoods.id) {
        setShowWish(true);
        break;
      }
      setShowWish(false);
    }
  };

  const onToggleWishList = (id) => {
    const goodsWish = JSON.parse(localStorage.getItem("wishlist")) || [];
    let toggle = true;

    if (toggle) {
      for (let item of goodsWish) {
        if (item.id === id) {
          goodsWish.splice(goodsWish.indexOf(item), 1);
          localStorage.setItem("wishlist", JSON.stringify(goodsWish));
          toggle = false;
          setShowWish(false);
          break;
        }
      }
    }

    if (toggle) {
      for (let item of goodsWish) {
        if (item.id !== id || goodsWish.length === 0) {
          localStorage.setItem("wishlist", JSON.stringify([...goodsWish, propsGoods]));
          setShowWish(true);
          break;
        }
      }

      if (goodsWish.length === 0) {
        localStorage.setItem("wishlist", JSON.stringify([...goodsWish, propsGoods]));
        setShowWish(true);
      }
    }
  };

  return (
    <div>
      <Header extension={true} title={``} button={false} />
      {loading ? (
        <div className="center_loader">
          <Loader />
        </div>
      ) : (
        <div className="goods__wrapper__interfase">
          <div className="goods__bg__interfase">
            <img src={propsGoods.img} alt="" />
          </div>
          <div className="goods__info__interfase">
            <ul className="goods__photos__interfase">
              <li className="photo__item"></li>
              <li className="photo__item"></li>
              <li className="photo__item"></li>
              <li className="photo__item"></li>
              <li className="photo__item"></li>
            </ul>
          </div>
          <div className="goods__title__interfase">
            <div className="goods__text__interfase">
              <br />«{propsGoods.name}»
            </div>
          </div>
          <div className="goods__descr__interfase">{propsGoods.descr}</div>
          <div className="goods__props__interfase">
            <hr />
          </div>
          <div className="container__counter">
            <Counter goods={propsGoods} />
          </div>
        </div>
      )}
    </div>
  );
};

export { GoodsInterfase };
