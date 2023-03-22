import useHttp from "../components/hooks/http.hook";
import api_base from "./api_base";

const UseAuthService = () => {
  const { request, result, loading, error } = useHttp();

  const API_AUTH = "https://identitytoolkit.googleapis.com/v1/accounts:";
  const API_KEY = "AIzaSyDmdsSeJ-OAW-XxCgHaPtXwqi5YYHH3gw4"; // хз где хранить

  const onGetAuthWithEmail = async (body) => {
    const data = await request(
      `${API_AUTH}signInWithPassword?key=${API_KEY}`,
      {
        ...body,
        returnSecureToken: true,
      },
      "post"
    );

    if (data.data) {
      const idUser = data.data.localId;
      localStorage.setItem("userId", idUser);
      localStorage.setItem("TokenForChangePassword", data.data.idToken);
    }
  };

  const onCreateProfile = async ({
    user_email,
    user_password,
    user_phone,
    user_name,
  }) => {
    let user = {
      email: user_email,
      password: user_password,
      returnSecureToken: true,
    };

    const data = await request(
      `${API_AUTH}signUp?key=${API_KEY}`,
      user,
      "post"
    );

    const userId = await data.data.localId;

    localStorage.setItem("userId", userId);

    localStorage.setItem("TokenForChangePassword", data.data.idToken); // хз

    const response = await request(
      `${api_base}/users/${userId}/user_info.json`,
      user,
      "post"
    );

    user = { user_email, user_phone, user_name };

    const put = await request(
      `${api_base}/users/${userId}/user_info.json`,
      user,
      "put"
    ); // так фикшу баг
  };

  const onRestorePasswordWithEmail = async (body) => {
    const response = await request(
      `${API_AUTH}sendOobCode?key=${API_KEY}`,
      {
        ...body,
        requestType: "PASSWORD_RESET",
      },
      "post"
    );
  };

  const onUpdatePassword = async (body) => {
    const idToken = localStorage.getItem("TokenForChangePassword");
    const response = await request(
      `${API_AUTH}update?key=${API_KEY}`,
      {
        idToken,
        ...body,
        returnSecureToken: true,
      },
      "post"
    );

    localStorage.setItem("TokenForChangePassword", response.data.idToken);
  };

  return {
    request,
    loading,
    error,
    result,
    onGetAuthWithEmail,
    onCreateProfile,
    onRestorePasswordWithEmail,
    onUpdatePassword,
  };
};

export default UseAuthService;
