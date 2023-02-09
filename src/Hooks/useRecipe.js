import { useState, useEffect } from "react";
import axios from "axios";
 
export const useRecipe = (id) => {
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res => {setIngredients(ingredients => [...ingredients, ...res.data.extendedIngredients.filter((event) => {
            return ingredients.id !== event.ingredients.id
          })])})
        .catch(err => {console.log("useRecipe:\n" + err.message)})
    }, [id] )

    
    return { ingredients, setIngredients }
}

// return id to use as key to remove values