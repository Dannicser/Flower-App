import { useState } from "react";
import MapHeader from "../gui/Headers/MapHeader/MapHeader.js";
import remove from "./icons/remove.svg";
import "./Map.scss";

const Map = () => {
  const [toggle, setToggle] = useState(true);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const content = toggle ? (
    <>
      <MapView />
      <Info />
    </>
  ) : (
    <MapList />
  );

  return (
    <div className="map__wrapper">
      <MapHeader onToggle={onToggle} toggle={toggle} />
      <div className="map__container">{content}</div>
    </div>
  );
};

const MapView = () => {
  return <iframe src="https://yandex.ru/map-widget/v1/?ll=38.457713%2C52.629659&z=18.08"></iframe>;
};

const Info = () => {
  const [close, setClose] = useState(false);

  const onClose = () => {
    setClose(true);
  };

  const content = close ? null : (
    <div className="geo__wrapper">
      <div className="geo__title">
        <div className="text">ул. Московское шоссе, 3А, Елец, Липецкая обл., 399783</div>
        <div onClick={onClose} className="delete">
          <img src={remove} alt="" />
        </div>
      </div>
      <div className="geo__work">Круглосуточно</div>
      <div className="geo__phone">+7 (3812) 293-814</div>
    </div>
  );

  return <>{content}</>;
};

const MapList = () => {
  const style = { position: "static", boxShadow: "none" };

  return (
    <>
      <hr />
      <div style={style} className="geo__wrapper">
        <div className="geo__title">
          <div className="text">ул. Московское шоссе, 3А, Елец, Липецкая обл., 399783</div>
        </div>
        <div className="geo__work">Круглосуточно</div>
        <div className="geo__phone">+7 (3812) 293-814</div>
      </div>
    </>
  );
};

export default Map;
