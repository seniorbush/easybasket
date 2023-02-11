import { Box, Modal, Fade, Button, Typography, Backdrop } from '@mui/material'
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -47%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 343,
  height: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 5,
};


function MethodModal(props) {

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <Backdrop>
      <Button onClick={handleOpen}>Open modal</Button>

      <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography>TEST</Typography>
            </Box>
          </Fade>
        </Modal>
    </Backdrop>


    
  )
}

export default MethodModal