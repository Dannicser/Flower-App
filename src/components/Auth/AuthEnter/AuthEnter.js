import Header from "../../gui/Header/Header";
import "./AuthEnter.scss";
import Input from "../../gui/Input/Input";
import NoteFound from "../../gui/NotFound/NotFound";
import success from "../../../images/success_.png";
import MainButton from "../../gui/Button/MainButton/MainButton";

const AuthEnterWithEmail = () => {
  return (
    <div className="main__enter__container">
      <Header title={"Вход"} />
      <div className="enter">
        <div className="enter__container">
          <div className="enter__by__email">По почте</div>
          <div className="enter__by__phone">По номеру</div>
        </div>
      </div>
      <Input type={"email"} placeholder={"mail@mail.ru"} />
      <Input type={"password"} placeholder={"*******"} />
      <div className="enter__agreement">
        <div className="agreement__text">
          Продолжая, вы принимаете условия пользовательского <br /> соглашения и
          политики конфиденциальности
        </div>
      </div>
      <MainButton text={"Войти"} />
    </div>
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
