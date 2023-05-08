import { useState } from "react";
import UseAuthService from "../../../../services/UseAuthService";
import MainButton from "../../../gui/Button/MainButton/MainButton";
import Header from "../../../gui/Headers/Header/Header";
import Input from "../../../gui/Input/Input";
import NotFound from "../../../gui/NotFound/NotFound";
import success from "../../../../images/success_.png";
import "../UpdatePassword/UpdatePassword.scss";

const RestorePassword = () => {
  const { onRestorePasswordWithEmail, loading, error, result } = UseAuthService();

  const [inputState, setInputState] = useState({});

  const onHundlerInput = (value, name) => {
    setInputState({ [name]: value });
  };

  const onRequest = () => {
    onRestorePasswordWithEmail(inputState);
  };

  return result ? (
    <SuccessRestore email={inputState.email} />
  ) : (
    <>
      <Header button={false} extension={true} title={"Пароль"} />
      <div className="restore__container">
        <Input type="email" onHundlerInput={onHundlerInput} placeholder={"mail@mail.ru"} name="email" />
        <div className="restore__title">Введите вашу электронную почту, чтобы мы могли отправить письмо для восстановления пароля</div>
      </div>
      <div onClick={onRequest}>
        <MainButton loader={loading} text={"Продолжить"} />
      </div>
      {error ? <div className="error_message">Что-то пошло не так </div> : null}
    </>
  );
};

const SuccessRestore = ({ email }) => {
  return (
    <NotFound
      title={"Готово"}
      descr={`На ${email} было отправлено письмо с инструкциями`}
      button={true}
      textButton={"Войти"}
      path={"/profile/auth/enter_with_email"}
      img={success}
    />
  );
};

export default RestorePassword;
