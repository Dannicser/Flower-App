import { classical, field, box, author } from "../img";
import select from "./icons/carousel_select.svg";
import "./CarouselGoods.scss";
import { useState } from "react";

const CarouselGoods = ({ onChooseTypeGoods }) => {
  const [type, setType] = useState("");

  return (
    <div className="wrapper__carousel">
      <ul className="carousel__list__gods">
        <li
          onClick={() => {
            setType("Классика");
            onChooseTypeGoods("classic");
          }}
          className="carousel__item__goods"
        >
          <div className="carousel__img">
            <img src={classical} alt="" />
          </div>
          <div className="title__carousel">Классика</div>
        </li>
        <li
          onClick={() => {
            onChooseTypeGoods("author");
            setType("Авторские");
          }}
          className="carousel__item__goods"
        >
          <div className="carousel__img">
            <img src={author} alt="" />
          </div>
          <div className="title__carousel">Авторские</div>
        </li>
        <li
          onClick={() => {
            onChooseTypeGoods("box");
            setType("В коробке");
          }}
          className="carousel__item__goods"
        >
          <div className="carousel__img">
            <img src={box} alt="" />
          </div>
          <div className="title__carousel">В коробке</div>
        </li>
        <li
          onClick={() => {
            onChooseTypeGoods("field");
            setType("Полевые");
          }}
          className="carousel__item__goods"
        >
          <div className="carousel__img">
            <img src={field} alt="" />
          </div>
          <div className="title__carousel">Полевые</div>
        </li>
      </ul>
      <div className="carousel__menu">
        <div className="carouse__sub__header">{type ? type : "Классика"}</div>
        <div className="carousel__select__container">
          <img src={select} alt="" />
        </div>
      </div>
    </div>
  );
};
export default CarouselGoods;
