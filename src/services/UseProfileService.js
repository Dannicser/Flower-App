import useHttp from "../components/hooks/http.hook";
import api_base from "./api_base.js";

const UseProfileService = () => {
  const userId = localStorage.getItem("userId");

  const { request, result, loading, error } = useHttp();

  const onChangeProfileSettings = async (user) => {
    const response = await request(`${api_base}/users/${userId}/user_info.json`, user, "put");
  };

  const onGetProfileSettings = async () => {
    const response = await request(`${api_base}/users/${userId}/user_info.json`);

    if (response != null) {
      return response.data;
    }

    return {};
  };

  return {
    onChangeProfileSettings,
    onGetProfileSettings,
    result,
    loading,
    error,
  };
};

export default UseProfileService;
