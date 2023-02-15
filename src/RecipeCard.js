import { Button, Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import MethodModal from './MethodModal'

function RecipeCard(props) {

const [open, setOpen] = useState(false);

  return (
    
    <Card sx={{ borderRadius:5, maxWidth: 380, minHeight: 360, backgroundColor: "#F9F5E7", display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

        <CardMedia
        component="img"
        alt="Food Image"
        height="200"
        image={props.image}
        sx={{objectFit: 'cover'}}
      />

      <CardContent sx={{height: 70}}>
        <Typography gutterBottom variant='h6' component="div" sx={{fontWeight: 500, color: "#A7727D"}}>
            {props.title}
        </Typography>
      </CardContent>


      <CardActions disableSpacing sx={{justifyContent:"space-evenly", backgroundColor: "#F8EAD8"}} >
        <Button 
        variant="contained" 
        size="small"
        onClick={() => setOpen(true)}>Method</Button>
        
        <IconButton aria-label="add to list" onClick={() => props.handleRecipe(props.id)}>
          <AddIcon />
        </IconButton>

      </CardActions>
     
      
      <MethodModal 

      title={props.title}
      open={open} 
      setOpen={setOpen}/>


      </Card>


  )
}

export default RecipeCard