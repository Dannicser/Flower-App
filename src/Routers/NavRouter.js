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
  { path: "/catalog", title: "Catalog", img: catalog, active: catalogActive },
  { path: "/basket", title: "Basket", img: basket, active: basketActive },
];
