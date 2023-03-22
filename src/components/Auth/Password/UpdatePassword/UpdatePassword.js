import { useState } from "react";
import UseAuthService from "../../../../services/UseAuthService";
import MainButton from "../../../gui/Button/MainButton/MainButton";
import Header from "../../../gui/Headers/Header/Header.js";
import Input from "../../../gui/Input/Input";
import NotFound from "../../../gui/NotFound/NotFound";
import success from "../../../../images/success_.png";
import "./UpdatePassword.scss";

const PasswordUpdate = () => {
  const { onUpdatePassword, loading, error, result } = UseAuthService();

  const [inputState, setInputState] = useState({});

  const onHundlerInput = (value, name) => {
    setInputState({ [name]: value });
  };

  const onRequest = () => {
    onUpdatePassword(inputState);
  };

  return result ? (
    <SuccessUpdate />
  ) : (
    <>
      <Header button={false} extension={true} title={"Пароль"} />
      <div className="restore__container">
        <Input
          type="password"
          onHundlerInput={onHundlerInput}
          placeholder={"*******"}
          name="password"
        />
        <div className="restore__title">
          Пожалуйста, придумайте новый пароль
        </div>
      </div>
      <div onClick={onRequest}>
        <MainButton loader={loading} text={"Продолжить"} />
      </div>
      <div className="container">
        <div className="error_message">
          {error ? "Что-то пошло не так" : null}
        </div>
      </div>
    </>
  );
};

const SuccessUpdate = () => {
  return (
    <NotFound
      title={"Ваш пароль был изменен"}
      button={true}
      textButton={"Профиль"}
      path={"/profile"}
      img={success}
    />
  );
};

export default PasswordUpdate;
