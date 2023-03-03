import useHttp from "../components/hooks/http.hook";
import api_base from "./api_base.js";

const UseProfileService = () => {
  const userId = localStorage.getItem("token");

  const { request, result, loading, error } = useHttp();

  const onChangeProfileSettings = async (user) => {
    const response = await request(
      `${api_base}/users/${userId}/user_info.json`,
      user,
      "put"
    );

    document.location.reload();
  };

  const onGetProfileSettings = async () => {
    const response = await request(
      `${api_base}/users/${userId}/user_info.json`
    );

    return response.data;
  };

  const onAddNewAddress = async (body) => {
    const response = await request(
      `${api_base}/users/${userId}/address/.json`,
      { ...body, id: Math.random().toString().slice(2) },
      "post"
    );
  };

  const onGetAddresses = async () => {
    const response = await request(
      `${api_base}/users/${userId}/address.json`,
      "get"
    );

    if (response.data != null) {
      localStorage.setItem(
        "idAddresses",
        JSON.stringify(Object.keys(response.data))
      );

      return Object.values(response.data);
    }
    return [];
  };

  const onDeleteAddress = async (id) => {
    const idAddress = await JSON.parse(localStorage.getItem("idAddresses"));

    const response = await request(
      `${api_base}/users/${userId}/address/${idAddress[id]}.json`,
      null,
      "delete"
    );
  };

  return {
    onChangeProfileSettings,
    onGetProfileSettings,
    onAddNewAddress,
    result,
    loading,
    error,
    onGetAddresses,
    onDeleteAddress,
  };
};
export default UseProfileService;

// восстановление пароля делай завтра
