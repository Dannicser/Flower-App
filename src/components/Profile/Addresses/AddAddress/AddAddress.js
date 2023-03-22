import Header from "../../../gui/Headers/Header/Header.js";
import Input from "../../../gui/Input/Input";
import "./AddAddress.scss";
import MainButton from "../../../gui/Button/MainButton/MainButton";
import { useState } from "react";
import Alert from "../../../gui/Alert/Alert.js";

const AddAddress = () => {
  const [inputState, setInputState] = useState({});
  const [result, setResult] = useState(false);

  const onHundlerInput = (value, name) => {
    setInputState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onAddAddress = () => {
    setResult(true);
    const prev = JSON.parse(localStorage.getItem("addresses")) || [];
    localStorage.setItem("addresses", JSON.stringify([...prev, inputState]));
  };

  const style = {
    width: "100%",
    height: "38px",
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
                  value={"399770"}
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
        <div onClick={onAddAddress}>
          <MainButton text={"Добавить"} />
        </div>
        {result ? <Alert text={"Адрес успешно добавлен"} /> : null}
      </div>
    </>
  );
};

export default AddAddress;
