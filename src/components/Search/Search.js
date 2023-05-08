import { useNavigate, NavLink } from "react-router-dom";
import "./Search.scss";
import picture from "./icons/input.svg";
import Input from "../gui/Input/Input";
import UseGoodsService from "../../services/UseGoodsService";
import { useEffect, useState } from "react";
import NotFound from "../gui/NotFound/NotFound";
import nothing from "../../images/not_found.png";
import remove from "../../images/delete_on_input.svg";
import Loader from "../gui/Loader/Loader";

const Search = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { onGetAllGoods } = UseGoodsService();

  const [allGoods, setAllGoods] = useState([]);

  const [filter, setFilter] = useState([]);

  useEffect(() => {
    onGetAllGoods().then((data) => {
      setAllGoods(data);
      setFilter(data);
    });
  }, []);

  const onHundlerInput = (value) => {
    setFilter(allGoods.filter((el) => el.title.toLowerCase().includes(value.toLowerCase())));
  };

  const content = allGoods.length ? (
    <li className="search__list">
      {filter.map((el) => (
        <NavLink key={el.id} to={`/catalog/${el.type}/${el.id}`}>
          <ul key={el.id} className="search__item">
            <img src={el.img} alt="" />
            <div className="search__title">Букет «{el.title}»</div>
          </ul>
        </NavLink>
      ))}
    </li>
  ) : (
    <div className="search_loader">
      <Loader />
    </div>
  );

  const empty =
    !filter.length && allGoods.length ? (
      <NotFound descr={"Нам жаль, но мы ничего не смогли найти по вашему запросу"} title={"Ничего не найдено"} img={nothing} />
    ) : null;

  return (
    <div className="search__container">
      <div className="search__wrapper">
        <InputSearch onHundlerInput={onHundlerInput} />
        <NavLink onClick={goBack}>
          <div className="search__button">Отменить</div>
        </NavLink>
      </div>
      <hr />
      {content}
      {empty}
    </div>
  );
};

const InputSearch = ({ onHundlerInput }) => {
  return (
    <div className="search__input">
      <Input onHundlerInput={onHundlerInput} name={"search"} type={"text"} placeholder={"Найти товар"} />
      <img src={picture} alt="" />
      <img className="remove_value" src={remove} alt="" />
    </div>
  );
};

export default Search;
