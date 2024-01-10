import { createContext, useState } from "react";

export const FetchContext = createContext();

export const FetchProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (inputVal) => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${
        inputVal ? inputVal : "192.212.174.101"
      }`;
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    data,
    loading,
    error,
    fetchData,
  };

  return (
    <FetchContext.Provider value={contextValue}>
      {children}
    </FetchContext.Provider>
  );
};
