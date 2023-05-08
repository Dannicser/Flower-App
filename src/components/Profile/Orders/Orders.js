import "./Orders.scss";
import Header from "../../gui/Headers/Header/Header";
import NotFound from "../../gui/NotFound/NotFound";
import empty from "./img/empty.png";
import { useState } from "react";

const Orders = () => {
  const [show, setShow] = useState(true);

  const content = show ? <CurrentOrders /> : <HistoryOrders />;

  return (
    <>
      <Header extension={true} button={false} title={"Мои заказы"} />
      <div className="orders__sub__header">
        <div onClick={() => setShow(true)} className={`current__orders ${show ? "active__item" : null}`}>
          Текущие
        </div>
        <div onClick={() => setShow(false)} className={`story__orders ${!show ? "active__item" : null}`}>
          История заказов
        </div>
      </div>
      {content}
    </>
  );
};

const CurrentOrders = () => {
  return <NotFound descr={"Здесь появится информация о ваших заказах"} title={"У вас пока нет заказов"} img={empty} />;
};

const HistoryOrders = () => {
  return <NotFound descr={"Здесь появится информация о ваших заказах"} title={"У вас пока нет истории заказов"} img={empty} />;
};

export default Orders;
