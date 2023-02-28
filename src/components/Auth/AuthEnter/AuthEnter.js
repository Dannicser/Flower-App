import Header from "../../gui/Header/Header";
import "./AuthEnter.scss";
import Input from "../../gui/Input/Input";
import NoteFound from "../../gui/NotFound/NotFound";
import success from "../../../images/success_.png";
import MainButton from "../../gui/Button/MainButton/MainButton";
import { useState } from "react";
import UseAuthService from "../../../services/UseAuthService";
import { NavLink } from "react-router-dom";

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

  const content = result ? (
    <Success />
  ) : (
    <View
      onRequest={onRequest}
      onHundlerInput={onHundlerInput}
      loading={loading}
      error={error}
    />
  );

  return (
    <div className="main__enter__container">
      <Header title={"Вход"} />
      {content}
    </div>
  );
};

const View = ({ onRequest, onHundlerInput, loading, error }) => {
  return (
    <>
      <div className="enter">
        <div className="enter__container">
          <div className="enter__by__email">По почте</div>
          <div className="enter__by__phone">По номеру</div>
        </div>
      </div>
      <Input
        onHundlerInput={onHundlerInput}
        name={"email"}
        type={"email"}
        placeholder={"mail@mail.ru"}
      />
      <Input
        onHundlerInput={onHundlerInput}
        name={"password"}
        type={"password"}
        placeholder={"*******"}
      />
      <div className="enter__agreement">
        <div className="agreement__text">
          Продолжая, вы принимаете условия пользовательского <br /> соглашения и
          политики конфиденциальности
        </div>
      </div>
      <div onClick={() => onRequest()}>
        <MainButton loader={loading} text={"Войти"} />
      </div>
      {error ? <p className="enter__error"> Что-то пошло не так</p> : null}
      <NavLink to={"/profile/create_profile"}>
        <div className="enter__create__profile">У меня нет аккаунта</div>
      </NavLink>
    </>
  );
};

const Success = () => {
  return (
    <NoteFound
      img={success}
      title={"Готово"}
      descr={"Вы успешно пошли в аккаунт"}
      button={true}
    />
  );
};

export default AuthEnterWithEmail;
