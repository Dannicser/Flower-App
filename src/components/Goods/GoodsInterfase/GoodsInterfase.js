import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../gui/Headers/Header/Header.js";
import "./GoodsInterface.scss";
import heartActive from "../../../images/heart_active.svg";
import heartNoActive from "../../../images/no_active_heart.svg";
import UseGoodsService from "../../../services/UseGoodsService";
import Loader from "../../gui/Loader/Loader";
import Counter from "../Counter/Counter.js";

const GoodsInterfase = () => {
  const { id_goods, type } = useParams();
  const { onGetGoodsById, loading } = UseGoodsService();
  const [propsGoods, setPropertiesGoods] = useState({ title: "..." });
  const [show, setShowWish] = useState(false);

  useEffect(() => {
    onGetGoodsById(type, id_goods).then((data) => {
      setPropertiesGoods(data);
    });
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
      <Header extension={true} title={`Авторский букет ${loading ? "..." : "«" + propsGoods.title + "»"}`} button={false} />
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
              Авторский букет <br />«{propsGoods.title}»
            </div>
            <div onClick={() => onToggleWishList(propsGoods.id)} className="goods__wish__interfase">
              <img src={show ? heartActive : heartNoActive} alt="" />
            </div>
          </div>
          <div className="goods__descr__interfase">{propsGoods.descr}</div>
          <div className="goods__props__interfase">
            <div className="title__interfase">Характеристики:</div>
            <hr />
            <div className="color__interfase">
              <div className="sub__header__interfase">Цвет:</div>
              <div className="props__intefase">{propsGoods.color}</div>
            </div>
            <div className="count__interfase">
              <div className="sub__header__interfase">Состав букета:</div>
              <div className="props__intefase">{propsGoods.count}</div>
            </div>
            <div className="deliver__interfase">Доставка по Ельцу</div>
            <hr />
            <div className="deliver__time">
              <div className="time"> c 8:00 до 21:00 </div>
              <div className="cost"> 350₽</div>
            </div>
            <div className="deliver__time">
              <div className="time">c 21:00 до 8:00 </div>
              <div className="cost"> 550₽</div>
            </div>
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
