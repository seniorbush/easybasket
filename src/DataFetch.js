import { useEffect, useState} from 'react'
import axios from 'axios'

function DataFetch() {
    const [recipes, setRecipes] = useState([])


    useEffect(() => {
        axios
        .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${"spaghetti"}cuisine="italian"&excludeIngredients="peanuts"&instructionsRequired&number=3`)
        .then(res => {
            setRecipes(res.data.results)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    

    return (
        <div>
            {/* <input type="text"/> */}
            <ul>
                {
                recipes.map
                ((recipe) => (<li key={recipe.id}>{recipe.title}</li>))
                }
            </ul>
        </div>
        
    )
}

export default DataFetch