import { useState, useEffect } from "react";
import axios from "axios";
 
export const useInstructions = (id) => {
    const [instructions, setInstructions ] = useState([])

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&visualizeRecipe&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res => {setInstructions(res.data.analyzedInstructions[0].steps)})
        .catch(err => {console.log("useInstructions:\n" + err.message)})
    }, [id] )
    
    return { instructions }
}
