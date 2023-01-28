import { Grid, Container } from '@mui/material';
import './App.css';
import FetchCard from './FetchCard';
import Navbar from './Navbar';
import RecipeCard from './RecipeCard';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

function App() {
  return (
  
    <div className="App">

      <Navbar/>
    
      <Container>

      

        <Grid container 
        spacing={2}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '90vh' }}>
          
          <Grid item xs={12}>
          <Splide
        options={ {
          height: "60vh",
          autoplay: true,
          perPage:3,
          perMove:1,
          focus  : 'center',
          gap:"1rem",
          pagination: false,
          arrows: false
        } }
      >

          <SplideSlide>
            <RecipeCard/>
          </SplideSlide>
          <SplideSlide>
            <RecipeCard/>
          </SplideSlide>
          <SplideSlide>
            <RecipeCard/>
          </SplideSlide>
          <SplideSlide>
            <RecipeCard/>
          </SplideSlide>
          <SplideSlide>
            <RecipeCard/>
          </SplideSlide>

        </Splide>
          </Grid>


          <Grid item xs={12}>
          </Grid>
          
          
        
        </Grid>

      </Container>
    
      
    </div>

  );
}

export default App;
