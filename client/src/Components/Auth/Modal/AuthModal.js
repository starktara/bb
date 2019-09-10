import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const AuthModal = (props) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    function handleClickOpen() {
        console.log('qwerty');
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
    <div className={props.buttonClass}>
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title">
            <button  onClick={handleClickOpen}>Sign In</button>
            <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <button onClick={handleClose}>
                Disagree
            </button>
            <button onClick={handleClose}>
                Agree
            </button>
            </DialogActions>
        </Dialog>
    </div>
  );
}

export default AuthModal;
