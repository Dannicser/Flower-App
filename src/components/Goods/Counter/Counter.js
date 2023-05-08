import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../gui/Button/MainButton/MainButton.js";
import plus from "./img/add_plus.svg";
import subtract from "./img/subtract.svg";

const Counter = ({ goods, full = false, onGetSum }) => {
  const [count, setCount] = useState(1);
  const [cost, setCost] = useState(goods.price);

  useEffect(() => {
    onShowCountFromLS();
  }, []);

  useEffect(() => {
    onCalculateCost();
  }, [count]);

  useEffect(() => {
    if (count >= 1 && full) {
      onAddGoodsToBasket();
    }
  }, [count]);

  useEffect(() => {
    if (onGetSum) {
      onGetSum();
    }
  }, [count]);

  const decrease = () => {
    setCount((prev) => {
      if (count > 1) {
        return count - 1;
      }
      return count;
    });
  };

  const increase = () => {
    setCount((prev) => {
      if (count > 0) {
        return count + 1;
      }
      return count;
    });
  };

  const onCalculateCost = () => {
    setCost(() => {
      return Number(goods.price * count);
    });
  };

  const onAddGoodsToBasket = () => {
    const prev = JSON.parse(localStorage.getItem("basket")) || [];

    for (let item of prev) {
      if (item.id !== goods.id) {
        localStorage.setItem("basket", JSON.stringify([{ ...goods, count }, ...prev]));
      }
      if (item.id === goods.id) {
        prev.splice(prev.indexOf(item), 1);
        localStorage.setItem("basket", JSON.stringify([{ ...goods, count }, ...prev]));
      }
    }

    if (prev.length == 0) {
      localStorage.setItem("basket", JSON.stringify([{ ...goods, count }, ...prev]));
    }
  };

  const onShowCountFromLS = () => {
    const countFromBasket = JSON.parse(localStorage.getItem("basket")) || [];

    for (let item of countFromBasket) {
      if (item.id === goods.id) {
        setCount(item.count);
      }
    }
  };

  const content = (
    <>
      <div className="basket__ui">
        <div className="count__interfase">
          <div onClick={decrease} className="subtract">
            <img src={subtract} alt="" />
          </div>
          <div className="count">{count}</div>
          <div onClick={increase} className="add">
            <img src={plus} alt="" />
          </div>
        </div>
        {full ? null : <ButtonBasket onAddGoodsToBasket={onAddGoodsToBasket} cost={cost} />}
      </div>
    </>
  );

  return <>{content}</>;
};

const ButtonBasket = ({ cost = "...", onAddGoodsToBasket }) => {
  return (
    <NavLink to={"/basket"}>
      <div onClick={onAddGoodsToBasket}>
        <Button text={`В корзину за ${cost}₽`} />
      </div>
    </NavLink>
  );
};

export default Counter;
