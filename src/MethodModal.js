import { Box, Modal, Fade, Button, Typography, Backdrop } from '@mui/material'
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -45%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 343,
  height: 525,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 5,
};


function MethodModal(props) {

  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  
  // const handleToggle = () => setOpen(props.handleModal);
  

  return (
    
    <Backdrop open={props.handleModal}>
      <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={props.handleModal}
          onClose={handleClose}
          closeAfterTransition
        >
        <Fade in={props.handleModal}>
          <Box sx={style}>
            
            <Button onClick={handleClose}>open/close</Button>
            <Typography>TEST</Typography>
          
          </Box>
        </Fade>
      </Modal>
    </Backdrop> 
  )
}

export default MethodModal