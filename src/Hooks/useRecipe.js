import { useState, useEffect } from "react";
import axios from "axios";
 
export const useRecipe = (id) => {
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res => {setIngredients(ingredients => [...ingredients, ...res.data.extendedIngredients])})
        .catch(err => {console.log(err)})
    }, [id] )

    
    
    return { ingredients }
}

// return id to use as key to remove values