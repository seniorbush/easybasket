import { Container, Divider, Typography } from '@mui/material'
import { useRef, useState } from 'react';
import { useFetch } from './Hooks/useFetch';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import RecipeCard from './RecipeCard';




function FetchRecipes() {
    
    const searchRef = useRef(); 
    const [search, setSearch] = useState("");
    const [url, setUrl] = useState(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&instructionsRequired=true&number=6`)
   
    const { data } = useFetch(url)
    

  return (
    <Container sx={{mb:2, boxShadow: 3, display:"flex", justifyContent:"center", alignItems: "center", padding:2, mt:1, borderRadius:2, background:'linear-gradient(to bottom, #2196f3, #90caf9)'}}>
     

     {/* Search recipes, API call */}
      <Paper
        component="form"
        sx={{ boxShadow: 3, p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
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
        onClick={(e) => setUrl(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&instructionsRequired=true&query=${search}&number=6`)}
        >
          <SearchIcon />
        </IconButton>
      </Paper>




        {/* Search results */}

        <Splide
            options={ {
            height: "60vh",
            autoplay: true,
            perPage:3,
            perMove:1,
            focus  : 'center',
            gap:"1rem",
            pagination: false,
            arrows: false
            }}>
                {data && data.map(recipe => (
                    <SplideSlide divider key={recipe.id+recipe.title}  >
                        <RecipeCard key={recipe.id} image={recipe.image} title={recipe.title}/>
                    </SplideSlide>
                ))}
        </Splide>    



    </Container>
  )
}


export default FetchRecipes