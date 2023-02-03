import {  Container } from "@mui/material"
import logo from "./Assets/eBlogo3.jpg"

function Navbar() {
  return (
    <Container sx={{
        mb:2, 
        boxShadow: 3, 
        display:"flex", 
        justifyContent:"center", 
        alignItems: "center", 
        pt:1, 
        mt:1, 
        borderRadius:1, 
        bgcolor: '#CD113B'
        
        }}>


           <div sx={{height:"1rem"}}>
            <img src={logo} alt="easyBasket" loading="lazy" height={70}/>
           </div>
            

    </Container>
  )
}

export default Navbar