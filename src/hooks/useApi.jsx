import axios from "axios";
import { useEffect, useState } from "react";

const useApi = () => {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async (URL = undefined) => {
    setLoading(true);
    if (!URL) return;
    try {
      const res = await axios.get(`${URL}`);
      setdata(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(URL);
  }, []);

  return [data, loading, error, fetchData];
};
export default useApi;
