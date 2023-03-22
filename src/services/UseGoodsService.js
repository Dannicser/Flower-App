import api_base from "./api_base.js";
import useHttp from "../components/hooks/http.hook.js";
const UseGoodsService = () => {
  const { request, result, loading, error } = useHttp();

  const onGetAllGoods = async () => {
    const response = await request(`${api_base}/goods.json`);

    if (response != null) {
      const array = [];

      //выносить ли это ?
      for (let key in response.data) {
        array.push(...Object.values(response.data[key]));
      }

      return array;
    }
    return [];
  };

  const onGetGoodsByType = async (type) => {
    const response = await request(`${api_base}/goods/${type}.json`);

    if (response != null) {
      return Object.values(response.data);
    }

    return [];
  };

  const onGetGoodsById = async (type = "classic", id) => {
    const response = await request(`${api_base}/goods/${type}/${id}.json`);

    if (response != null) {
      return response.data;
    }

    return {};
  };

  return {
    onGetAllGoods,
    onGetGoodsByType,
    onGetGoodsById,
    loading,
  };
};
export default UseGoodsService;
