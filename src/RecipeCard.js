import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material'
import { useState} from 'react'
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RecipeCard(props) {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    
    <Card sx={{ maxWidth: 375 }}>
        <CardMedia
        component="img"
        alt="green iguana"
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


      <CardActions disableSpacing>

        <IconButton aria-label="add to list">
          <AddIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>

      </CardActions>
     
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
         
          <Typography paragraph>
            
          </Typography>
          
        </CardContent>
      </Collapse>

    </Card>


  )
}

export default RecipeCard