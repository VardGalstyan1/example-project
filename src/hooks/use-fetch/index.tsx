import  { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images:string
}

const useFetch = (
  url: string,
  options?: AxiosRequestConfig
): [Product[] | null, boolean, any] => {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Product[]>(url, options);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return [data, loading, error];
};

export default useFetch;


