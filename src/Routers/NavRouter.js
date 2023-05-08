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
  { path: "/main", title: "Главная", img: main, active: mainActive },
  { path: "/catalog", title: "Каталог", img: catalog, active: catalogActive },
  { path: "/basket", title: "Корзина", img: basket, active: basketActive },
  { path: "/wishlist", title: "Избранное", img: favorites, active: favoritesActive },
  { path: "/", title: "Профиль", img: profile, active: profileActive },
];
