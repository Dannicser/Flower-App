import useHttp from "../components/hooks/http.hook";
import api_base from "./api_base.js";

const UseProfileService = () => {
  const userId = localStorage.getItem("token");
  const { request, result, loading, error } = useHttp();

  const onChangeProfileSettings = async (user) => {
    const response = await request(
      `${api_base}/users/${userId}.json`,
      user,
      "put"
    );

    document.location.reload();
  };

  const onGetProfileSettings = async () => {
    const response = await request(`${api_base}/users/${userId}.json`);

    return response.data;
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
