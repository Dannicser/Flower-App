import Header from "../../gui/Headers/Header/Header.js";
import "./AuthEnter.scss";
import Input from "../../gui/Input/Input.js";
import MainButton from "../../gui/Button/MainButton/MainButton.js";
import { useContext, useEffect, useState } from "react";
import UseAuthService from "../../../services/UseAuthService.js";
import { NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.js";

const AuthEnterWithEmail = () => {
  const [inputState, setInputState] = useState({});

  const { onGetAuthWithEmail, error, loading, result } = UseAuthService();

  const onHundlerInput = (value, name) => {
    setInputState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onRequest = () => {
    onGetAuthWithEmail(inputState);
  };

  const content = result ? <Success /> : <View onRequest={onRequest} onHundlerInput={onHundlerInput} loading={loading} error={error} />;

  return (
    <div className="main__enter__container">
      <Header button={false} extension={true} title={"Вход"} />
      {content}
    </div>
  );
};

const View = ({ onRequest, onHundlerInput, loading, error }) => {
  return (
    <div className="enter__wrapper">
      <div className="enter">
        <div className="enter__container">
          <div className="enter__by__email">По почте</div>
          <div className="enter__by__phone">По номеру</div>
        </div>
      </div>
      <form>
        <Input onHundlerInput={onHundlerInput} name={"email"} type={"email"} placeholder={"mail@mail.ru"} />
        <Input onHundlerInput={onHundlerInput} name={"password"} type={"password"} placeholder={"*******"} />
      </form>
      <NavLink to={"/auth/enter_with_email/forgot_password"}>
        <div className="enter__additional__function">
          <div className="enter__forgot__password">Забыли пароль?</div>
        </div>
      </NavLink>
      <div className="enter__agreement">
        <div className="agreement__text">
          Продолжая, вы принимаете условия пользовательского <br /> соглашения и политики конфиденциальности
        </div>
      </div>
      <div onClick={() => onRequest()}>
        <MainButton loader={loading} text={"Войти"} />
      </div>
      {error ? <p className="error_message"> Что-то пошло не так</p> : null}
      <NavLink to={"/auth/create_profile"}>
        <div className="enter__create__profile">У меня нет аккаунта</div>
      </NavLink>
    </div>
  );
};

const Success = () => {
  const { isAuth } = useContext(AuthContext);

  useEffect(() => isAuth(true), []);

  return <Navigate to="/" />;
};

export default AuthEnterWithEmail;
