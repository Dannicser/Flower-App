import { NavLink } from "react-router-dom";
import Header from "../../gui/Header/Header";

import {
  settings,
  box,
  arrow,
  aboutApp,
  currency,
  map,
  notifications,
  order,
  lunguage,
  documents,
} from "./icons/index";
import "./MainProfile.scss";

const MainProfile = () => {
  return (
    <>
      <Header title={"Профиль"} />
      <div className="wrapper__profile">
        <div className="user__info__container">
          <div className="user__info">
            <div className="user__name">Дмитрий</div>
            <div className="user__phone">+7 999 121-64-45</div>
          </div>
          <NavLink to={"settings"}>
            <div className="user__settings">
              <img src={settings} alt="" />
            </div>
          </NavLink>
        </div>

        <ul className="profile__functions__list">
          <li className="profile__item__function">
            <div className="profile__title">
              <img src={order} alt="" />
              <div className="profile__text">Мои заказы</div>
            </div>
            <div className="profile__arrow">
              <img src={arrow} alt="" />
            </div>
          </li>
          <li className="profile__item__function">
            <div className="profile__title">
              <img className="mr" src={map} alt="" />
              <div className="profile__text">Мои адреса</div>
            </div>
            <div className="profile__arrow">
              <img src={arrow} alt="" />
            </div>
          </li>
          <li className="profile__item__function">
            <div className="profile__title">
              <img src={notifications} alt="" />
              <div className="profile__text">Настройка уведомлений</div>
            </div>
            <div className="profile__arrow">
              <img src={arrow} alt="" />
            </div>
          </li>
          <li className="profile__item__function">
            <div className="profile__title">
              <img src={currency} alt="" />
              <div className="profile__text">Валюта</div>
            </div>
            <div className="profile__arrow">
              <img src={arrow} alt="" />
            </div>
          </li>
          <li className="profile__item__function">
            <div className="profile__title">
              <img src={lunguage} alt="" />
              <div className="profile__text">Русский язык</div>
            </div>
            <div className="profile__arrow">
              <img src={arrow} alt="" />
            </div>
          </li>
          <li className="profile__item__function">
            <div className="profile__title">
              <img src={box} alt="" />
              <div className="profile__text">О компании</div>
            </div>
            <div className="profile__arrow">
              <img src={arrow} alt="" />
            </div>
          </li>
          <li className="profile__item__function">
            <div className="profile__title">
              <img src={documents} alt="" />
              <div className="profile__text">Правовые документы</div>
            </div>
            <div className="profile__arrow">
              <img src={arrow} alt="" />
            </div>
          </li>{" "}
          <li className="profile__item__function">
            <div className="profile__title">
              <img src={aboutApp} alt="" />
              <div className="profile__text">О приложении</div>
            </div>
            <div className="profile__arrow">
              <img src={arrow} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainProfile;
