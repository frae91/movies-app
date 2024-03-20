import { useState, useEffect } from "react";

export default  function useFetch(url, options) {
    const [data, setData] = useState(null);

    useEffect( () => {
        const fetchData = async () => {
            fetch(url, options)
            .then(response=>response.json())
            .then(json=>setData(json))
        }
        fetchData();
    }, [url])

    return data
}