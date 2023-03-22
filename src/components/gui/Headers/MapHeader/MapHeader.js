import { useState } from "react";
import "./MapHeader.scss";

const MapHeader = ({ toggle, onToggle }) => {
  return (
    <div className="map__header__wrapper">
      <div onClick={onToggle} className={`map${toggle ? " active" : ""}`}>
        На карте
      </div>
      <div
        onClick={onToggle}
        className={`map__list${!toggle ? " active" : ""}`}
      >
        Списком
      </div>
    </div>
  );
};

export default MapHeader;
