import "./Goods.scss";
import SecondButton from "../../gui/Button/SecondButton/SecondButton.js";
import heartNoActive from "../../../images/heart.svg";
import heartActive from "../../../images/heart_active.svg";
import { NavLink } from "react-router-dom";
import remove from "../../../images/delete_.svg";
import Counter from "../Counter/Counter";

const GoodsCard = ({
  img,
  title,
  composition,
  price,
  id,
  type,
  basket = false,
  goods = null,
  onDeleteItemFromBasket = null,
  onGetSum,
}) => {
  const goodsWish = JSON.parse(localStorage.getItem("wishlist"));

  const onShowWishGoods = () => {
    if (goodsWish) {
      for (let value of goodsWish) {
        if (value.id === id) {
          return true;
        }
      }
    }
    return false;
  };

  return (
    <>
      <NavLink to={`/catalog/${type}/${id}`}>
        <div className="goods__card__wrapper">
          <div className="goods__img">
            <img src={img} alt="" />
            <img
              className="goods__heart"
              src={onShowWishGoods() ? heartActive : heartNoActive}
              alt=""
            />
          </div>
          <div className="goods__info">
            <div className="goods__title">
              <span>Авторский букет</span> <br />«{title}»
            </div>
            <div className="goods__composition">{composition}</div>
            <div className="goods__price">
              <SecondButton text={price + "₽"} />
            </div>
          </div>
        </div>
      </NavLink>
      {basket ? (
        <div className="basket__count__container">
          <Counter onGetSum={onGetSum} goods={goods} full={true} />
          <div
            onClick={() => onDeleteItemFromBasket(id)}
            className="basket__delete"
          >
            <img src={remove} alt="" />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default GoodsCard;
