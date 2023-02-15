import { Box, Modal, Button, Typography } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -45%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 1,
  width: 343,
  height: 525,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 5,
};


function MethodModal(props) {



  return (
      <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={props.open}
          closeAfterTransition
        >
          <Box sx={style}>
            
            <Button onClick={() => props.setOpen(false)}>| CLOSE |</Button>
            <Typography sx={{textAlign: 'center'}}>{props.title}</Typography>
          
          </Box>
      </Modal>
    
  )
}

export default MethodModal