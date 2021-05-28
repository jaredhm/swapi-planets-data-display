import { useState, useEffect } from "react";
import validateResponse from './validateResponse';

const SWAPI_PLANETS_URL = "https://swapi.dev/api/planets";

const useRequestData = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const requestData = async () => {
      setLoading(true);
      try {
        const res = await fetch(SWAPI_PLANETS_URL);
        if (!res.ok) {
          setError("Request failed");
        }
        const data = await res.json();
        if (validateResponse(data)) {
          setPlanets(data.results);
        } else {
          setError("Unexpected response data");
        }
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    }
    requestData();
  // intentionally leave dep array empty, we only want 
  // this to run once on mount
  }, []);

  return [loading, planets, error];
};

export default useRequestData;