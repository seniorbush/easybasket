import { Button, TextField, Container, TableCell, TableRow, Box } from '@mui/material'
import { useState } from 'react';
import { useFetch } from './Hooks/useFetch';


import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import RecipeCard from './RecipeCard';

import { useRecipe } from './Hooks/useRecipe';
import ShoppingList from './ShoppingList';




function FetchRecipes() {
    
    const [search, setSearch] = useState("");

    const [url, setUrl] = useState(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&instructionsRequired='true'&number=3`)
    const { data } = useFetch(url)
   
    const [items, setItems] = useState();
    const { ingredients, setIngredients } = useRecipe(items);
 
    const [handleModal, setHandleModal] = useState(false);
    


    const showModal = () => {
        setHandleModal(true)
      }
    

    const handleRecipe = (id) => {
      setItems(id)      
    }

 

    const handleDelete = (id) => {
      setIngredients( ingredients.filter((event) => {
        return id !== event.id
      }))
    }

    
    const handleKeyPress = (e) => {
      const key = e.key;
        if(key === "Enter") {
          setUrl(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&instructionsRequired="true"&query=${search}&number=3`)
        }
      }
    
    
     
  return (
    <div>

    

    <Container sx={{mb:2, boxShadow: 3, display:"flex", justifyContent:"center", alignItems: "center", padding:2, mt:1, borderRadius:1, background:'linear-gradient(to bottom, #EDDBC7, #F8EAD8)'}}>
     
    

     {/* Search recipes, API call */}
     <Box sx={{
        width: 400,
        maxWidth: '100%',
      
      }}>
      <TextField 
          size='small'
          id="outlined-basic" 
          label="Enter ingredient(s), get recipes.." 
          variant="outlined" 
          name='search'
          value={search}
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)}
          inputProps={{ 'aria-label': 'search recipes' }}
          sx={{display: 'flex', alignItems: 'center'}}      
      />

        <Button 
        variant="contained"
        name="submit"
        type="submit" 
        sx={{ mt:1 }} 
        aria-label="search"
        onClick={() => setUrl(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&instructionsRequired="true"&query=${search}&number=3`)}
        ><SearchIcon /></Button>
        
     </Box>

      </Container>


        {/* Search results */}

        <Splide
            options={ {
            autoplay: true,
            rewind:true,
            focus  : 'center',
            perPage:3,
            breakpoints: {
              640: {
                perPage: 1,
              },
            },
            flickPower: 500,
            perMove:1,
            autoScroll: {
              speed: 1,
            },
            gap:"1rem",
            arrows: false,
            pagination: true,
            height: "395px"
            }}>
                {data && data.map(recipe => (
                    <SplideSlide divider="true" key={recipe.id+recipe.title}  >
                        <RecipeCard 
                        key={recipe.id}
                        recipeId={recipe.id} 
                        image={recipe.image} 
                        title={recipe.title}
                        handleModal={handleModal}
                        showModal={() => showModal}
                        handleRecipe={() => handleRecipe(recipe.id)}
                        />
                    </SplideSlide>
                    
                ))}
        </Splide>    

        <ShoppingList
        
        body={
          
          ingredients && ingredients.map(item => (
            
            <TableRow key={item.id}>

              <TableCell key={item.id+" "+item.nameClean} sx={{textTransform: "capitalize"}}>{item.nameClean}</TableCell>
              <TableCell key={item.id+" "+item.measures.metric.amount} align="right">{Math.ceil(item.measures.metric.amount)}</TableCell>
              <TableCell key={item.id+" "+item.measures.metric.unitShort} align="right" sx={{textTransform: "lowercase"}}>{item.measures.metric.unitShort}</TableCell>
              <TableCell key={item.id+"x"} >
                <IconButton aria-label='remove from list'
                sx={{color:"#A7727D"}}
                onClick={()=> handleDelete(item.id)}align="left">
                  <DeleteIcon/>
                </IconButton>             
              </TableCell>
            </TableRow>   

        ))}/>




    </div>
  )
}


export default FetchRecipes