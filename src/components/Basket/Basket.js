import "./Basket.scss";
import Header from "../gui/Headers/Header/Header.js";
import NotFound from "../gui/NotFound/NotFound";
import bag from "./img/basket_empty.png";
import { useEffect, useState } from "react";
import GoodsCard from "../Goods/GoodsCard/GoodsCard";
import MainButton from "../gui/Button/MainButton/MainButton";

const title = "Ой, пусто";
const descr = `Ваша корзина пуста, откройте «Каталог» и выберите понравившийся товар`;

const Basket = () => {
  const [goods, setGoods] = useState([]);
  const [sum, setTotalSum] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("basket")) || [];
    setGoods(data);
  }, []);

  const onGetSum = () => {
    const data = JSON.parse(localStorage.getItem("basket")) || [];
    let cost = 0;
    let amount = 0;

    for (let item of data) {
      cost = item.price * item.count + cost;
      amount = item.count + amount;
    }

    setTotalSum(() => {
      return cost;
    });

    setAmount(() => {
      return amount;
    });
  };

  const onDeleteItemFromBasket = (id) => {
    const data = JSON.parse(localStorage.getItem("basket")) || [];

    data.map((item) => {
      if (item.id === id) {
        data.splice(data.indexOf(item), 1);
        localStorage.setItem("basket", JSON.stringify(data));
      }
    });
    setGoods(data);

    onGetSum();
  };

  const content = (
    <>
      <div className="basket__total">
        <div className="total__container">
          <span>{amount}</span> товар(-a) на
          <span> {sum} ₽</span>
        </div>
      </div>
      <div className="basket__list">
        {goods.map((el) => {
          return (
            <li key={el.id}>
              <GoodsCard
                type={el.type}
                composition={el.composition}
                title={el.title}
                img={el.img}
                price={el.price}
                id={el.id}
                basket={true}
                goods={el}
                onDeleteItemFromBasket={onDeleteItemFromBasket}
                onGetSum={onGetSum}
              />
            </li>
          );
        })}
        <div className="order__button">
          <MainButton text={`Оформить заказ на ${sum}₽`} />
        </div>
      </div>
    </>
  );

  return (
    <div className="basket__wrapper">
      <Header title={"Корзина"} />
      {goods.length ? (
        content
      ) : (
        <NotFound img={bag} title={title} descr={descr} />
      )}
    </div>
  );
};

export default Basket;
