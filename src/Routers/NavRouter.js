import {
  main,
  basket,
  favorites,
  profile,
  catalog,
  mainActive,
  basketActive,
  favoritesActive,
  profileActive,
  catalogActive,
} from "../components/Navbar/icons/index";

export const navRoutes = [
  { path: "/catalog", title: "Каталог", img: catalog, active: catalogActive },
  { path: "/basket", title: "Корзина", img: basket, active: basketActive },
];
