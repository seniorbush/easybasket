import { Card, TextField, Autocomplete, Button, FormControl, FormLabel, Input, Typography } from '@mui/material'
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
            <FormControl>
                <FormLabel>Search recipes</FormLabel>
                <Input
                    name="searchInput"
                    type="text"
                    placeholder="e.g spaghetti"
                />
            </FormControl>
            <Input size="md" placeholder="Medium" variant="outlined"/>
            <Autocomplete
            
            disablePortal
            id="combo-box-demo"
            name="intolerances"
            options={intolerances}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Intolerance" />}
            />

            <Autocomplete
            disablePortal
            id="combo-box-demo"
            name="cuisine"
            options={cuisine}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Cuisine" />}
            />

            <Button variant='contained' size="small">Search</Button>

       
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