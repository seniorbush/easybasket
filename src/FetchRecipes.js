import { Container, Divider, TableCell, TableRow } from '@mui/material'
import { useRef, useState } from 'react';
import { useFetch } from './Hooks/useFetch';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import RecipeCard from './RecipeCard';

import { useRecipe } from './Hooks/useRecipe';
import ShoppingList from './ShoppingList';




function FetchRecipes() {
    
    const searchRef = useRef(); 
    const [search, setSearch] = useState("");
    const [url, setUrl] = useState(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&instructionsRequired="true"&number=1`)
    const [items, setItems] = useState();
   
    const { data } = useFetch(url)
    const { ingredients } = useRecipe(items);



    const handleRecipe = (id) => {
      setItems(id)
    }

  console.log(ingredients)


  return (
    <div>
    <Container sx={{mb:2, boxShadow: 3, display:"flex", justifyContent:"center", alignItems: "center", padding:2, mt:1, borderRadius:1, background:'linear-gradient(to bottom, #2196f3, #90caf9)'}}>
     

     {/* Search recipes, API call */}
      <Paper
        component="form"
        sx={{ boxShadow: 3, p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,borderRadius:6,}}
      >
        <IconButton sx={{ p: '10px' }} aria-label="search container">
        </IconButton>
        <InputBase
          ref={searchRef}
          sx={{ flex: 1 }}
          placeholder="Enter ingredient(s), get recipes.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          inputProps={{ 'aria-label': 'search recipes' }}
        />
        
        <Divider orientation="vertical" variant="middle" flexItem></Divider>

        <IconButton 
        type="button" 
        sx={{ p: '10px' }} 
        aria-label="search"
        onClick={(e) => setUrl(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&instructionsRequired="true"&query=${search}&number=1`)}
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      </Container>


        {/* Search results */}

        <Splide
            options={ {
            focus  : 'center',
            perPage:3,
            perMove:1,
            autoScroll: {
              speed: 1,
            },
            gap:"1rem",
            arrows: false,
            pagination: false,
            height: "370px"
            }}>
                {data && data.map(recipe => (
                    <SplideSlide divider="true" key={recipe.id+recipe.title}  >
                        <RecipeCard 
                        key={recipe.id} 
                        image={recipe.image} 
                        title={recipe.title}
                        handleRecipe={() => handleRecipe(recipe.id)}
                        />
                    </SplideSlide>
                    
                ))}
        </Splide>    

        <ShoppingList
        body={
          ingredients && ingredients.map(item => (
            <TableRow key={item.id}>
              <TableCell key={item.name}>{item.nameClean.toUpperCase()}</TableCell>
              <TableCell key={item.aisle} align="right">{item.amount}</TableCell>
              <TableCell key={item.originalName} align="right">{item.unit}</TableCell>
            </TableRow>    
        ))}/>


    </div>
  )
}


export default FetchRecipes