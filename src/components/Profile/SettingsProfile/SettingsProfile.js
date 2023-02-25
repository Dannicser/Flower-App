import { NavLink } from "react-router-dom";
import Header from "../../gui/Header/Header";
import Input from "../../gui/Input/Input";
import { arrow } from "../MainProfile/icons";
import "./SettingsProfile.scss";

const settings = {
  height: "42px",
  width: "100%",
};

const SettingsProfile = () => {
  return (
    <>
      <Header title={"Настройки"} extension={true} />
      <div className="setting__profile__wrapper">
        <div className="profile__input__wrapper">
          <ul className="input__list">
            <li className="input__item">
              <div className="input__label">Имя</div>
              <Input type={"text"} placeholder={"Даниил"} settings={settings} />
            </li>
            <li className="input__item">
              <div className="input__label">Телефон</div>
              <Input
                type={"number"}
                placeholder={"8-890-999-12-11"}
                settings={settings}
              />
            </li>
            <li className="input__item">
              <div className="input__label">Email</div>
              <Input
                type={"text"}
                placeholder={"mail.mail@ru"}
                settings={settings}
              />
            </li>
            <li className="input__item">
              <div className="input__label">День рождения</div>
              <Input
                type={"number"}
                placeholder={"25.08.2002"}
                settings={settings}
              />
            </li>
          </ul>
        </div>
        <div className="change__password">
          <div className="text">Изменить пароль</div>
          <img src={arrow} alt="" />
        </div>
        <div className="sign__out">Выйти из аккаунта</div>
      </div>
    </>
  );
};
export default SettingsProfile;
