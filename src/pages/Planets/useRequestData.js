import { useState, useEffect } from "react";

const SWAPI_PLANETS_URL = "https://swapi.dev/api/planets/";

const useRequestData = () => {
	const [planets, setPlanets] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const requestData = async () => {
			setLoading(true);
			try {
				const res = await fetch(SWAPI_PLANETS_URL);
				const data = await res.json();
				if (data.results && Array.isArray(data.results)) {
          setError("Oh no!");
					// setPlanets(data.results);
				}
				setLoading(false);
			} catch (e) {
				setError(e);
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