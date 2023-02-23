import { useState, useEffect } from "react";
import axios from "axios";
 
export const useRecipe = (id) => {
    const [ingredients, setIngredients] = useState([])


    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&visualizeRecipe&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            setIngredients(ingredients => [...ingredients, ...res.data.extendedIngredients])
        })
        .catch(err => {console.log("useRecipe:\n" + err.message)})
    }, [id] )
    
    
    return { ingredients, setIngredients }
}
