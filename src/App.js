import { Grid, Container } from "@mui/material";
import "./App.css";
import FetchRecipes from "./FetchRecipes";
import Footer from "./Footer";

// import ShoppingList from './ShoppingList';

//

// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import RecipeCard from "./RecipeCard";
// import { FireTruckRounded } from "@mui/icons-material";

import Navbar from "./Navbar";

//

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
      </Container>

      <Container>
        <FetchRecipes />
        {/*Navbar and Search Results*/}
        {/* 
        <Splide
          options={{
            autoplay: true,
            rewind: true,
            focus: "center",
            perPage: 3,
            perMove: 1,
            gap: "1rem",
            arrows: false,
            pagination: false,
            height: "370px",
          }}
        >
          <SplideSlide divider>
            <RecipeCard title="Cheat’s homemade pappardelle with quick tomato sauce" />
          </SplideSlide>
          <SplideSlide divider>
            <RecipeCard title="One-cup pancakes with blueberries" />
          </SplideSlide>
          <SplideSlide divider>
            <RecipeCard title="Pork, spring green & black bean stir-fry" />
          </SplideSlide>
          <SplideSlide divider>
            <RecipeCard title="Halloumi with griddled vegetables" />
          </SplideSlide>
          <SplideSlide divider>
            <RecipeCard title="Kerryann’s dippy eggs & asparagus soldiers" />
          </SplideSlide>
          <SplideSlide divider>
            <RecipeCard title="Almond, banana & passion fruit smoothie" />
          </SplideSlide>
          <SplideSlide divider>
            <RecipeCard title="Simple green salad with lemon dressing" />
          </SplideSlide>
        </Splide> */}

        <Grid container alignItems="center" sx={{ mt: 1 }}>
          <Grid item xs={12}></Grid>
        </Grid>

        <Footer />
      </Container>
    </div>
  );
}

export default App;
