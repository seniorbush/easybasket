import { Grid, Container } from '@mui/material';
import './App.css';
import FetchRecipes from './FetchRecipes';

import ShoppingList from './ShoppingList';



function App() {
  return (
  
    <div className="App">



      <Container>

        <FetchRecipes/>{/*Navbar and Search Results*/}

        <Grid container spacing={1} alignItems="center" sx={{mt:1}} >

          <Grid item xs={12}>
            <ShoppingList />
          </Grid>

        </Grid>


      </Container>
    
      
    </div>

  );
}

export default App;
