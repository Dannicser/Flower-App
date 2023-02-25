import "./Auth.scss";
import { vk, google, facebook } from "../icons/index";
import { NavLink } from "react-router-dom";
const AuthMain = () => {
  return (
    <div className="auth__wrapper">
      <div className="auth__bg"></div>
      <div className="auth__enter__wrapper">
        <div className="auth__enter__container">
          <div className="auth__enter">
            <div className="auth__title">Войдите в Аккаунт</div>
            <div className="auth__info">
              Оформляйте заказы гораздо быстрее <br /> и отслеживайте статус
              заказа
            </div>
          </div>
          <div className="auth__btn__container">
            <div className="auth__btn">По номеру телефона</div>
            <NavLink to={"/profile/auth/enter_with_email"}>
              <div className="auth__btn auth__white__btn">
                По электронной почте
              </div>
            </NavLink>
          </div>
          <div className="auth__line__container">
            <div className="auth__line"></div>
            <div className="auth__line__text">или</div>
            <div className="auth__line"></div>
          </div>
          <div className="soсial__networks__container">
            <div className="auth__item">
              <div className="auth__bg__icon">
                <img className="auth__icon" src={vk} alt="" />
              </div>
              <div className="auth__title__icons">Вконтакте</div>
            </div>{" "}
            <div className="auth__item">
              <div className="auth__bg__icon">
                <img className="auth__icon" src={google} alt="" />
              </div>
              <div className="auth__title__icons">Google</div>
            </div>
            <div className="auth__item">
              <div className="auth__bg__icon">
                <img className="auth__icon" src={facebook} alt="" />
              </div>
              <div className="auth__title__icons">Facebook</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthMain;
