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
  padding: 2,
  overflowX: 'scroll'
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
            <Typography variant='h6' sx={{textAlign: 'center'}}>{props.title}</Typography>
            {props.instructions && props.instructions.map(steps => (<Typography variant='p' key={steps.id}>{steps.step}</Typography>))}
          </Box>
      </Modal>
    
  )
}

export default MethodModal