import Header from "../../../gui/Headers/Header/Header.js";
import NotFound from "../../../gui/NotFound/NotFound";
import nothing from "../../../../images/not__found_2.png";
import remove from "../../../../images/delete_.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MyAddress.scss";
import MainButton from "../../../gui/Button/MainButton/MainButton";

const MyAddresses = () => {
  const [addresses, setAdrresses] = useState([]);

  useEffect(() => {
    onGetAddresses();
  }, []);

  const onGetAddresses = () => {
    const all = JSON.parse(localStorage.getItem("addresses")) || [];
    setAdrresses(all);
  };

  const onDeleteAddress = (id) => {
    const all = JSON.parse(localStorage.getItem("addresses")) || [];
    all.splice(id, 1);
    localStorage.setItem("addresses", JSON.stringify(all));
    setAdrresses(all);
  };

  return <View onDeleteAddress={onDeleteAddress} addresses={addresses} />;
};

const View = ({ addresses, onDeleteAddress }) => {
  return (
    <>
      <Header title={"Мои адреса"} button={false} extension={true} />
      {addresses.length ? (
        <div className="addresses__wrapper">
          <ul className="address__list">
            {addresses.map((el, i) => (
              <li key={i} className="address__item">
                <div className="address__title">
                  <div className="text">{el.place_name}</div>
                  <img onClick={() => onDeleteAddress(i)} src={remove} alt="" />
                </div>
                <div className="address__other__info">
                  <span>г.{el.city_name}</span>
                  <span>д.{el.number_apartment},</span>
                  <span>Подъезд №{el.home_entrance},</span>
                  <br />
                  <span>Этаж №{el.home_floor},</span>
                  <span>Квартира №{el.home_intercom}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="address__container__btn">
            <NavLink to={"add_new_address"}>
              <MainButton text={"Добавить"} />
            </NavLink>
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};

const Empty = () => {
  return (
    <NotFound
      title={"У вас пока нет адресов"}
      descr={"Они появятся после выполненных заказов или добавьте их сейчас"}
      img={nothing}
      button={true}
      textButton={"Добавить"}
      path="add_new_address"
    />
  );
};

export default MyAddresses;
