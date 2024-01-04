import { useEffect, useRef, useState } from "react";

interface FetchData {
  [key: string]: any;
}

const useJsonFetch = (url: string, options = {}) => {
  const [data, setData] = useState<FetchData>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const timestampRef = useRef<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const timestamp = Date.now();
      timestampRef.current = timestamp;
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(response.statusText);
        const result = await response.json();
        if (timestampRef.current === timestamp) setData(result);
        setError(null);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return [{ data, loading, error }];
};

export default useJsonFetch;
