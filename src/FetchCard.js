import { Grid, Card, TextField, Autocomplete, Button, FormControl, FormLabel, Input, Typography, Box, List, ListItemText, ListItemButton } from '@mui/material'
import { useRef, useState } from 'react';
import { useFetch } from './useFetch';


function FetchCard() {
    
    const searchRef = useRef(); 
    const intoleranceRef = useRef();   
    const cuisineRef = useRef();  
    
    const [url, setUrl] = useState(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=8`)
    const { data } = useFetch(url)

  return (
    <Card
        sx={{
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        gap: 2,  
        }}>
            <Grid container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            >

                <Grid item xs={6}>

                    <FormControl sx={{width: "80%", pb:4}}>
                        <FormLabel>Show me recipes with:</FormLabel>
                            <Input
                            ref={searchRef}
                            name="searchInput"
                            type="text"
                            placeholder="Enter ingredient(s), get recipe.."
                            />
                    </FormControl>

                    <Typography sx={{pb:2}}>
                        Advanced Options
                    </Typography>

                    <Box
                        sx={{display:"flex", gap:1, justifyContent:"center"}}>
                        <Autocomplete
                        ref={intoleranceRef}
                        disablePortal
                        id="combo-box-demo"
                        name="intolerances"
                        options={intolerances}
                        sx={{ minWidth:150 }}
                        renderInput={(params) => <TextField {...params} label="Intolerance" />}
                        />

                        <Autocomplete
                        ref={cuisineRef}
                        disablePortal
                        id="combo-box-demo"
                        name="cuisine"
                        options={cuisine}
                        sx={{ width: 150, pb:4 }}
                        renderInput={(params) => <TextField {...params} label="Cuisine" />}
                        />
                    </Box>
                    

                    <Button 
                    variant='contained' 
                    size="large"
                    // onClick={() => setUrl(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchRef.current.value}&number=8`)}
                    onClick={()=>console.log(searchRef.current.value)}
                    >Search
                    </Button>

                </Grid>

                <Grid item xs={6}>
                    <h3>Results</h3>
                    <List>
                        {data && data.map(recipe => (
                            <ListItemButton divider key={recipe.id+recipe.title}  >
                                <ListItemText key={recipe.id} sx={{fontSize:8}} primary={recipe.title} />
                            </ListItemButton>
                        ))}  
                    </List>
                </Grid>

            </Grid>

    </Card>
  )
}

const intolerances = [
    "Dairy",
    "Egg",
    "Gluten",
    "Grain",
    "Peanut",
    "Seafood",
    "Sesame",
    "Shellfish",
    "Soy",
    "Sulfite",
    "Tree Nut",
    "Wheat",
];

const cuisine = [
    "African",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
];

export default FetchCard