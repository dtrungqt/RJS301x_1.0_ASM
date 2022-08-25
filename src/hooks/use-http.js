import { useCallback, useState } from "react";

const useHttpHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (apiLink, processDataFn) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(apiLink);
      if (!response.ok) throw new Error("Can't loading movies!");

      const data = await response.json();

      processDataFn(data);
    } catch (error) {
      setError(error.messagge || "Something went wrong!");
    }

    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttpHook;
