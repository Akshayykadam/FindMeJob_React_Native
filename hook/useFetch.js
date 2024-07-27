import { useState, useEffect } from "react";
import axios from 'axios';

//const rapidApiKey = '397eb7041amsh18c7ccff3c08270p1eaee2jsne3ef67d5282b';
const rapidApiKey = 'b27629a3c9msheeb32b5b9b7fd66p1361b9jsn2e1cc01438a3'; 

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const options = {
      method: "GET",
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
      params: { ...query },
    };
  
    const fetchData = async () => {
      setIsLoading(true);
  
      try {
        const response = await axios.request(options);
  
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const refetch = () => {
      setIsLoading(true);
      fetchData();
    };
  
    return { data, isLoading, error, refetch };
  };
  
  export default useFetch;