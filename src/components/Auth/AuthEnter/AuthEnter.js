import Header from "../../gui/Header/Header";
import "./AuthEnter.scss";
import Input from "../../gui/Input/Input";
import Button from "../../gui/Button/Button.js";
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
      <Button text={"Войти"} />
    </div>
  );
};

export default AuthEnterWithEmail;
