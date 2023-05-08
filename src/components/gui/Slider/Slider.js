import "./Slider.scss";
import GoodsCard from "../../Goods/GoodsCard/GoodsCard";

const Slider = ({ goods, title }) => {
  return (
    <>
      <div className="carousel__wrapper">
        <h2>{title}</h2>
        <div className="carousel__container">
          {goods.map(({ img, title, price, descr, composition, id, type }) => {
            return (
              <GoodsCard
                key={id}
                title={title}
                img={img}
                price={price}
                descr={descr}
                composition={composition}
                id={id}
                type={type}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
