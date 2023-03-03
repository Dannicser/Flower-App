import Header from "../../../gui/Header/Header";
import Input from "../../../gui/Input/Input";
import "./AddAddress.scss";
import MainButton from "../../../gui/Button/MainButton/MainButton";
import { useState } from "react";
import UseProfileService from "../../../../services/UseProfileService";
import success from "../../../../images/success_2.svg";

const AddAddress = () => {
  const [inputState, setInputState] = useState({});
  const { onAddNewAddress, loading, result } = UseProfileService();

  const onHundlerInput = (value, name) => {
    setInputState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onRequest = () => {
    onAddNewAddress(inputState);
  };

  const style = {
    width: "100%",
    height: "45px",
  };

  return (
    <>
      <Header button={false} extension={true} title={"Новый адрес"} />

      <div className="address_wrapper__form">
        <ul className="address__list">
          <li className="address__item">
            <div className="address__title">Название</div>
            <Input
              name="place_name"
              onHundlerInput={onHundlerInput}
              settings={style}
              placeholder={"Любовница"}
            />
          </li>
          <li className="address__item">
            <div className="address__title">Город, улица</div>
            <Input
              name="city_name"
              onHundlerInput={onHundlerInput}
              settings={style}
              placeholder={"Елец, Коммунаров"}
            />
          </li>
          <li className="address__item">
            <div className="address__container">
              <div className="address__sub__item">
                <div className="address__title">Дом</div>
                <Input
                  name="number_apartment"
                  onHundlerInput={onHundlerInput}
                  settings={style}
                  type="number"
                  placeholder={"131"}
                />
              </div>
              <div className="address__sub__item">
                <div className="address__title">Индекс</div>
                <Input
                  name="city_index"
                  onHundlerInput={onHundlerInput}
                  settings={style}
                  type="number"
                  placeholder={"399770"}
                />
              </div>
            </div>
          </li>
          <li className="address__item">
            <div className="address__container">
              <div className="address__sub__item">
                <div className="address__title">Подъезд</div>
                <Input
                  name="home_entrance"
                  onHundlerInput={onHundlerInput}
                  settings={style}
                  type="number"
                  placeholder={"3"}
                />
              </div>
              <div className="address__sub__item">
                <div className="address__title">Этаж</div>
                <Input
                  name="home_floor"
                  onHundlerInput={onHundlerInput}
                  settings={style}
                  type="number"
                  placeholder={"4"}
                />
              </div>
              <div className="address__sub__item">
                <div className="address__title">Домофон</div>
                <Input
                  name="home_intercom"
                  onHundlerInput={onHundlerInput}
                  settings={style}
                  type="number"
                  placeholder={"55"}
                />
              </div>
            </div>
          </li>
        </ul>
        <div onClick={onRequest}>
          <MainButton loader={loading} text={"Добавить"} />
        </div>
        {result ? <Success /> : null}
      </div>
    </>
  );
};

const Success = () => {
  return (
    <div className="address__add__success">
      <img src={success} alt="" />
      <div>Адрес успешно добавлен</div>
    </div>
  );
};

export default AddAddress;
