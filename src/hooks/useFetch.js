import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return data;
}

export default useFetch;
