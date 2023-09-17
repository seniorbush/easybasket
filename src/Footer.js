import { Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Container
      sx={{
        mb: 2,
        boxShadow: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 1,
        mt: 1,
        borderRadius: 1,
        bgcolor: "#4267B2",
      }}
    >
      <div>
        <Typography sx={{ color: "#f3f2f7" }} variant="h7">
          Make shopping great again!
        </Typography>
      </div>
    </Container>
  );
}

export default Footer;
