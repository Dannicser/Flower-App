import { Route, Routes } from "react-router-dom";
import { publicRoutes, privetRoutes } from "../Routers/AppRouter";
import { AuthContext } from "../context/authContext";
import { useEffect, useLayoutEffect, useState } from "react";

const HomePage = () => {
  const [auth, setAuth] = useState();

  useLayoutEffect(() => {
    const isAuth = Boolean(localStorage.getItem("userId")) || false;
    setAuth(isAuth);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ auth: false, isAuth: setAuth }}>
        {!auth ? (
          <Routes>
            {publicRoutes.map((el) => {
              return <Route key={el.path} element={<el.component />} path={el.path} />;
            })}
          </Routes>
        ) : (
          <Routes>
            {privetRoutes.map((el) => {
              return <Route key={el.path} element={<el.component />} path={el.path} />;
            })}
          </Routes>
        )}
      </AuthContext.Provider>
    </>
  );
};

export default HomePage;
