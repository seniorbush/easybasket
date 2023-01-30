import { Button, Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

function RecipeCard(props) {


  return (
    
    <Card sx={{ maxWidth: 380, minHeight: 360 }}>

        <CardMedia
        component="img"
        alt="Food Image"
        height="200"
        image={props.image}
      />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
            {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>


      <CardActions disableSpacing sx={{justifyContent:"space-evenly"}} >
        <Button variant="contained" size="small">Method</Button>
        
        <IconButton aria-label="add to list" onClick={() => props.handleRecipe(props.id)}>
          <AddIcon />
        </IconButton>

      </CardActions>
     
      
      

      </Card>


  )
}

export default RecipeCard