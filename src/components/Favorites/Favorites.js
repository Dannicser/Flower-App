import "./Favorites.scss";
import heart from "./img/empty__heart.png";
import Header from "../gui/Header/Header";
import NotFound from "../gui/NotFound/NotFound";

const title = "Список пуст";
const descr =
  "Когда найдете товар, который вам  понравился, сохраните его нажав на сердечко";

const Favorites = () => {
  return (
    <div className="favorites__wrapper">
      <Header title={"Избранное"} />
      <NotFound img={heart} title={title} descr={descr} />
    </div>
  );
};

export default Favorites;
