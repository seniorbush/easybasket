import { Card, Container, Table, TableCell, TableHead, TableBody, TableRow, Typography } from "@mui/material"


function ShoppingList() {
  return (
    <Container sx={{ boxShadow: 3, display:"flex", justifyContent:"center", alignItems: "center", padding:1, borderRadius:1, width:"100%", background:'linear-gradient(to top, #2196f3, #90caf9)'}}>
        <Card
            sx={{
            minHeight: "40vh",
            
            display: "flex",
            flexDirection: "column",
            alignItems: 'top',
            padding:2,
            gap: 2, 
            boxShadow: 3 
            }}>

                <Typography variant="h5" >
                    Shopping List
                </Typography>

                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ingredient</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Measurement</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
          
                    </TableBody>
                </Table>


            </Card>
        </Container>
  )
}

export default ShoppingList