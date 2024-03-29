import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import MethodModal from "./MethodModal";
import { useInstructions } from "./Hooks/useInstructions";

function RecipeCard(props) {
  const [open, setOpen] = useState(false);

  const { instructions } = useInstructions(props.recipeId);

  return (
    <Card
      sx={{
        borderRadius: 6,
        maxWidth: 380,
        minHeight: 365,
        background: "#FAFAFA",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CardMedia
        component="img"
        alt="Food Image"
        height="200"
        image={props.image}
        sx={{ objectFit: "cover" }}
      />

      <CardContent sx={{ height: 70 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: 500, color: "#A2A2A2" }}
        >
          {props.title}
        </Typography>
      </CardContent>

      <CardActions
        disableSpacing
        sx={{
          height: 48,
          justifyContent: "space-evenly",
          backgroundColor: "#D3D3D3",
        }}
      >
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => setOpen(true)}
        >
          Method
        </Button>

        <IconButton
          aria-label="add to list"
          onClick={() => props.handleRecipe(props.id)}
        >
          <AddIcon />
        </IconButton>
      </CardActions>

      <MethodModal
        title={props.title}
        instructions={instructions}
        open={open}
        setOpen={setOpen}
      />
    </Card>
  );
}

export default RecipeCard;
