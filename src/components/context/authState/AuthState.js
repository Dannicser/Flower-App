import AuthContext from "../authcontext/authContext";

const AuthState = ({ children }) => {
  const name = "danil";
  return (
    <AuthContext.Provider value={{ name }}>{children}</AuthContext.Provider>
  );
};

export default AuthState;
