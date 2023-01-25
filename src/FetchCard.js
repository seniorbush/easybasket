import { Card, TextField, Autocomplete, Button, FormControl, FormLabel, Input, Typography, Box } from '@mui/material'
import React from 'react'

function FetchCard() {
  return (
    <Card
    sx={{
        height: "40vh", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        gap: 2
        
        }}>
            <FormControl sx={{width: "80%", pb:4}}>
                <FormLabel>Search for recipes</FormLabel>
                <Input
                    name="searchInput"
                    type="text"
                    placeholder="Enter ingredient(s), get recipe.."
                />
            </FormControl>

            <Typography>
                Advanced Options
            </Typography>

            <Box
            sx={{display:"flex", gap:1}}>
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            name="intolerances"
            options={intolerances}
            sx={{ minWidth:200 }}
            renderInput={(params) => <TextField {...params} label="Intolerance" />}
            />

            <Autocomplete
            disablePortal
            id="combo-box-demo"
            name="cuisine"
            options={cuisine}
            sx={{ width: 200, pb:4 }}
            renderInput={(params) => <TextField {...params} label="Cuisine" />}
            />
            </Box>
            

            <Button variant='contained' size="large">Search</Button>

       
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