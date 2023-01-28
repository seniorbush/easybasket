import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Container, Divider } from '@mui/material';

export default function CustomizedInputBase() {
  return (
    <Container sx={{display:"flex", justifyContent:"center", alignItems: "center", pt:1}}>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter ingredients, get recipe.."
          inputProps={{ 'aria-label': 'search recipes' }}
        />
        
        <Divider orientation="vertical" variant="middle" flexItem></Divider>

        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
}
