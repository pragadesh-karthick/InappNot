import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import './App.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

         function InappNot(options) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      var color = document.getElementsByClassName('ml-2');
      color.color = "primary";
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
         In-app Notification-4
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={{width : "30%",left:"35%",right:"50%",bottom:"60%"}}
      >
           
            <DialogContent  style={{width : "100%",right:"50%",top:"10%",display: "flex",justifyContent:"space-around" }}>

                <DialogContentText style = {{width:"30%",borderRadius:"10px",borderColor:"burlywood"}}>
                    
                    <img src="https://www.woualabs.com/assets/logo/_woua_logo_icon.png" alt="Avatar" style={{width : "100%",height : "100%",borderWidth:"thin",borderStyle:"solid",borderRadius:"10px"}} ></img>
                   
                </DialogContentText>
                
                <DialogContentText id="alert-dialog-slide-description" style={{width : "50%"}}>
                   <p><h2><b>Level Up !</b></h2>{options.Title}</p><p>{options.Body}</p>
                </DialogContentText>
                
                </DialogContent>

      </Dialog>
      
    </div>
  );
}

module.exports.InappNot = InappNot;