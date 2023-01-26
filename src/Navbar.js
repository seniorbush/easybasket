import React from 'react'
import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';
import SearchIcon  from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <SearchIcon />
            </IconButton>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              easyBasket
            </Typography>

          </Toolbar>
        </Container>
      </AppBar>
      
    </Box>
  )
}

export default Navbar