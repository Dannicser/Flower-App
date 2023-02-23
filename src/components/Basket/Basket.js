import "./Basket.scss";
import Header from "../gui/Header/Header";
import NotFound from "../gui/NotFound/NotFound";
import bag from "./img/basket_empty.png";

const title = "Ой, пусто";
const descr = `Ваша корзина пуста, откройте «Каталог» и выберите понравившийся товар`;

const Basket = () => {
  return (
    <div className="basket__wrapper">
      <Header title={"Корзина"} />
      <NotFound img={bag} title={title} descr={descr} />
    </div>
  );
};
export default Basket;
