import axios from "axios";
import { useState, useEffect } from "react";

export const useAPI = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const promiseData = async () => {
            try {
                const response = await axios.get(url);

                //Se realizo un filtro, para poder obtener menos cantidad de la proporcionada por la api, para una mejor experiencia de usuario
                const albumId = response.data.filter(element => element.id <= 10);
                setData(albumId);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        promiseData();
    }, [url]);

    return { data, error, isLoading };
};
