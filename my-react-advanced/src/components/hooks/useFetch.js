import { useState, useEffect, useCallback } from "react";
export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const response = await resp.json();
      //console.log(response);
      setData(response);
    } catch (error) {
      setIsError(true);

      console.log(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, isError, data };
};
