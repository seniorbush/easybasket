import { useState, useEffect } from "react";
import axios from "axios";
 
export const useRecipe = (id) => {
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&visualizeRecipe&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        const newIngredients = res.data.extendedIngredients.filter(ingredient => {
          return !ingredients.some(i => i.id === ingredient.id)
        })
        setIngredients(ingredients => [...ingredients, ...newIngredients])
      })
      .catch(err => {console.log("useRecipe:\n" + err.message)})
  }, [id, ingredients])

  return { ingredients, setIngredients }
}
