import axios from "axios";
import { useCallback, useState } from "react";

function useHttp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(false);

  const request = useCallback(async (url, body = null, method = "get") => {
    setLoading(true);
    try {
      const response = await axios[method](url, body);
      setLoading(false);
      setResult(true);
      return response;
    } catch (error) {
      setLoading(false);
      setError(true);
      setResult(false);
    }
  }, []);

  return { loading, error, result, request };
}

export default useHttp;
