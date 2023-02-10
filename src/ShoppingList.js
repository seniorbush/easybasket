import { Card, Container, Table, TableCell, TableHead, TableBody, TableRow, Typography } from "@mui/material"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

function ShoppingList(props) {
  return (
    <Container sx={{ boxShadow: 3, display:"flex", justifyContent:"center", alignItems: "center", padding:2, borderRadius:1, width:"100%", background:'linear-gradient(to top, #EDDBC7, #F8EAD8)'}}>
        <Card
            sx={{
            minHeight: "40vh",
            width: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: 'top',
            padding:2,
            gap: 2, 
            boxShadow: 3 
            }}>

                <Typography variant="h5" sx={{
                    padding: 1,
                    color: "#fff", 
                    letterSpacing: 1, 
                    backgroundColor:"#A7727D",
                    boxShadow: 3,
                    borderRadius: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"}} >
                    
                    <LocalGroceryStoreIcon />
                    
                </Typography>

                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell align="right">Qty</TableCell>
                            <TableCell align="right">Unit</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.body}    
                    </TableBody>
                </Table>


            </Card>
        </Container>
  )
}

export default ShoppingList