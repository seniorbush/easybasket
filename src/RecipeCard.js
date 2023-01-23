import { Card, CardMedia, CardContent, CardActions, Typography, Button} from '@mui/material'
import React from 'react'

function RecipeCard() {
  return (
    
    <Card
    sx={{height: "40vh"}}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={require('./Assets/wedges.jpg')}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Air fryer potato wedges
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Use your air fryer to create absolutely knockout potato wedges and roasties that are fluffy inside and super-crisp on the outside. These mini ones are lightly spiced, just begging to be dipped into mayo or ketchup. Great for a party.
        </Typography>
      </CardContent>
      <CardActions sx={{
        display: "flex",
        justifyContent: "space-evenly"}}>
        <Button size="small">Method</Button>
        <Button size="small">Add Recipe</Button>
      </CardActions>
    </Card>


  )
}

export default RecipeCard