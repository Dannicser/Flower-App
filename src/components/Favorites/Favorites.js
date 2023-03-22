import "./Favorites.scss";
import heart from "./img/empty__heart.svg";
import Header from "../gui/Headers/Header/Header.js";
import NotFound from "../gui/NotFound/NotFound";
import { useEffect, useState } from "react";
import { List } from "../Goods/GoodsList/GoodsList";

const title = "Список пуст";
const descr =
  "Когда найдете товар, который вам  понравился, сохраните его нажав на сердечко";

const Favorites = () => {
  const [wish, setWish] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWish(data);
  }, []);

  const content = wish.length ? (
    <List goods={wish} />
  ) : (
    <NotFound img={heart} title={title} descr={descr} />
  );

  return (
    <div className="favorites__wrapper">
      <Header title={"Избранное"} />
      {content}
    </div>
  );
};

export default Favorites;
