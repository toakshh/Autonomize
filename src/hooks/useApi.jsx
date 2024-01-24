import axios from "axios";
import { useEffect, useState } from "react";

const useApi = (URL = "", options = {}) => {
  const [fetchedDAta, setFetchedData] = useState([]);

  const fetchApi = async () => {
    if (options.skip) return;
    try {
      const response = await axios.get(URL);
      setFetchedData(response);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    fetchApi();
  }, [URL]);

  return [fetchedDAta];
};

export default useApi;
