import { useState, useEffect } from "react";
import axios
 from "axios";
 
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url)
        .then(res => {setData(res.data.results)})
        .catch(err => {console.log("useFetch:\n" + err.message + "\nExceeded daily API requests")})
    }, [url])


    return { data }
}

