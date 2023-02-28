import { useEffect, useState } from "react";
import UseProfileService from "../../../services/UseProfileService";
import Header from "../../gui/Header/Header";
import Input from "../../gui/Input/Input";
import { arrow, settings } from "../MainProfile/icons";
import "./SettingsProfile.scss";

const settingOnStyle = {
  height: "42px",
  width: "100%",
};

const SettingsProfile = () => {
  const { onChangeProfileSettings, onGetProfileSettings } = UseProfileService();

  const [inputState, setInputState] = useState({});

  useEffect(() => {
    onGetProfileSettings().then((data) => setInputState(data));
  }, []);

  const onRequest = () => {
    onChangeProfileSettings(inputState);
  };

  const onHundlerInput = (value, name) => {
    setInputState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <Header onRequest={onRequest} title={"Настройки"} extension={true} />
      <div className="setting__profile__wrapper">
        <div className="profile__input__wrapper">
          <ul className="input__list">
            <li className="input__item">
              <div className="input__label">Имя</div>
              <Input
                onHundlerInput={onHundlerInput}
                name={"user_name"}
                type={"text"}
                placeholder={inputState.user_name}
                settings={settingOnStyle}
              />
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
                placeholder={inputState.user_birthday}
                settings={settingOnStyle}
              />
            </li>
          </ul>
        </div>
        <div className="change__password">
          <div className="text">Изменить пароль</div>
          <img src={arrow} alt="" />
        </div>
        <a href="/">
          <div onClick={() => onLogout()} className="sign__out">
            Выйти из аккаунта
          </div>
        </a>
      </div>
    </>
  );
};

export default SettingsProfile;
