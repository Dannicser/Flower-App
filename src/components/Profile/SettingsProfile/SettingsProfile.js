import { useContext, useEffect, useState } from "react";
import UseProfileService from "../../../services/UseProfileService";
import Header from "../../gui/Headers/Header/Header.js";
import Input from "../../gui/Input/Input";
import { arrow } from "../MainProfile/icons";
import { NavLink } from "react-router-dom";
import "./SettingsProfile.scss";
import Alert from "../../gui/Alert/Alert";
import { AuthContext } from "../../context/authContext";

const settingOnStyle = {
  height: "42px",
  width: "100%",
};

const SettingsProfile = () => {
  const { onChangeProfileSettings, onGetProfileSettings, error } = UseProfileService();

  const [inputState, setInputState] = useState({});

  const [notification, setNotification] = useState(false);

  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    onGetProfileSettings().then((data) => setInputState(data));
  }, []);

  const onRequest = () => {
    onChangeProfileSettings(inputState);
    setNotification(true);
  };

  const onHundlerInput = (value, name) => {
    setInputState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onLogout = () => {
    isAuth(false);

    localStorage.removeItem("userId");
    localStorage.removeItem("TokenForChangePassword");
  };

  return (
    <>
      <Header onRequest={onRequest} title={"Настройки"} extension={true} />
      <div className="setting__profile__wrapper">
        <div className="profile__input__wrapper">
          <ul className="input__list">
            <li className="input__item">
              <div className="input__label">Имя</div>
              <Input onHundlerInput={onHundlerInput} name={"user_name"} type={"text"} placeholder={inputState.user_name} settings={settingOnStyle} />
            </li>
            <li className="input__item">
              <div className="input__label">Телефон</div>
              <Input
                onHundlerInput={onHundlerInput}
                name={"user_phone"}
                type={"text"}
                placeholder={inputState.user_phone}
                settings={settingOnStyle}
              />
            </li>
            <li className="input__item">
              <div className="input__label">Email</div>
              <Input
                onHundlerInput={onHundlerInput}
                name={"user_email"}
                type={"text"}
                disabled={true}
                placeholder={inputState.user_email}
                settings={settingOnStyle}
              />
            </li>
            <li className="input__item">
              <div className="input__label">День рождения</div>
              <Input
                onHundlerInput={onHundlerInput}
                type={"text"}
                name={"user_birthday"}
                placeholder={inputState.user_birthday ? inputState.user_birthday : "Ваш день рождения"}
                settings={settingOnStyle}
              />
            </li>
          </ul>
        </div>
        <NavLink style={{ color: "black" }} to={"/settings/change_password"}>
          <div className="change__password">
            <div className="text">Изменить пароль</div>
            <img src={arrow} alt="" />
          </div>
        </NavLink>
        <NavLink to="/">
          <div onClick={() => onLogout()} className="sign__out">
            Выйти из аккаунта
          </div>
        </NavLink>
        {notification && !error ? <Alert text={"Данные успешно изменены"} /> : null}
      </div>
    </>
  );
};

export default SettingsProfile;
