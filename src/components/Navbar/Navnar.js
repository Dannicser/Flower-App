import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { navRoutes } from "../../Routers/NavRouter";

const Navbar = () => {
  const content = navRoutes.map(({ title, img, path, active }) => {
    return (
      <NavLink key={path} to={path}>
        {({ isActive }) => {
          return (
            <div className="nav__item">
              <img className="nav__icon" src={isActive ? active : img} alt={title} />
              <div className="nav__title">{title}</div>
            </div>
          );
        }}
      </NavLink>
    );
  });

  return (
    <nav>
      <hr />
      <div className="container-sm">
        <div className="nav__wrapper">{content}</div>
        <div className="nav_line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
