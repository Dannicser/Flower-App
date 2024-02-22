import { useContext, useEffect, useState } from "react";
import UseAuthService from "../../../services/UseAuthService";
import Header from "../../gui/Headers/Header/Header.js";
import Input from "../../gui/Input/Input";
import "./AuthCreateProfile.scss";
import Loader from "../../gui/Loader/Loader";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";

const settingOnStyle = {
  height: "42px",
  width: "100%",
};

const AuthCreateProfile = () => {
  const [inputState, setInputState] = useState({});
  const { onCreateProfile, result, loading, error } = UseAuthService();

  const auth = localStorage.getItem("userId");

  const onRequest = () => {
    onCreateProfile(inputState);
  };

  const onHundlerInput = (value, name) => {
    setInputState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const content = result && auth ? <Success /> : <View onRequest={onRequest} loading={loading} onHundlerInput={onHundlerInput} error={error} />;
  return <>{content}</>;
};

const View = ({ onHundlerInput, onRequest, loading, error }) => {
  return (
    <>
      <Header onRequest={onRequest} extension={true} title={"Новый профиль"} />
      <div className="auth__create__profile__wrapper">
        {loading ? (
          <div className="auth__loader">
            <Loader />
          </div>
        ) : (
          <>
            <form action="">
              <ul className="auth__create__list">
                <li className="auth__create__profile__item">
                  <div className="auth__item__title">Введите ваше имя</div>
                  <Input name={"user_name"} onHundlerInput={onHundlerInput} placeholder={"Иван"} settings={settingOnStyle} />
                </li>
                <li className="auth__create__profile__item">
                  <div className="auth__item__title">Введите ваш номер телефона</div>
                  <Input name={"user_phone"} onHundlerInput={onHundlerInput} placeholder={"8-800-555-35-35"} settings={settingOnStyle} />
                </li>
                <li className="auth__create__profile__item">
                  <div className="auth__item__title">Введите ваш email</div>
                  <Input name={"user_email"} type={"email"} onHundlerInput={onHundlerInput} placeholder={"email@mail.ru"} settings={settingOnStyle} />
                </li>
                <li className="auth__create__profile__item">
                  <div className="auth__item__title">Введите ваш пароль</div>
                  <Input
                    name={"user_password"}
                    type={"password"}
                    onHundlerInput={onHundlerInput}
                    placeholder={"***********"}
                    settings={settingOnStyle}
                  />
                </li>
              </ul>
            </form>
            {error ? <p className="error_message">Не удалось создать аккаунт</p> : null}
          </>
        )}
      </div>
    </>
  );
};

const Success = () => {
  const { isAuth } = useContext(AuthContext);

  useEffect(() => isAuth(true), []);

  return <Navigate to="/" />;
};

export default AuthCreateProfile;
