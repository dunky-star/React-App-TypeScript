import { useState, useEffect } from "react";
export const useFetchData = (url) => {
  const [users, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const users = await response.json();
        console.log(users);
        setUser(users);
      } catch (error) {
        setIsError(true);

        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { isLoading, isError, users };
};
