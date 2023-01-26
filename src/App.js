import { Grid, Container } from '@mui/material';
import './App.css';
import FetchCard from './FetchCard';
import Navbar from './Navbar';
import RecipeCard from './RecipeCard';

function App() {
  return (
  
    <div className="App">
      <Navbar/>

      <Container>
        <Grid container 
        spacing={2}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}>
          
          <Grid item xs={8}>
             <FetchCard/>
          </Grid>


          <Grid item xs={4}>
            <RecipeCard />
          </Grid>
          
          
        
        </Grid>
      </Container>
      


     
        {/* <Box sx={{
          display: "flex", 
          flexDirection: "row",
          justifyContent: "space-evenly",

          }}>
          
          
        </Box> */}
        
            
      
    </div>

  );
}

export default App;
