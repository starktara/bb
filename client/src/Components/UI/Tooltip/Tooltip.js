import React from "react";
import { Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import { green } from '@material-ui/core/colors';

const variantIcon = {
    success: CheckCircleIcon,
    error: ErrorIcon,
};  

const useStyles = makeStyles(theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    icon: {
        fontSize: 20,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    }
}));

const MySnackbarContentWrapper = (props)  =>  {
    const classes = useStyles();
    const Icon = variantIcon[props.variant];
  
    return (
      <SnackbarContent
        className={classes[props.variant]}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {props.message}
          </span>
        }
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={props.onClose}>
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
      />
    );
}

const Tooltip = (props) => {

return (
        <Snackbar
        anchorOrigin={{ 
        vertical: 'top', 
        horizontal: 'right' }}
        open={props.open}
        onClose={props.handleClose}
        autoHideDuration={3000}
        >
            <MySnackbarContentWrapper
                onClose={props.handleClose}
                variant={props.variant}
                message={props.message}
            />
        </Snackbar>
    )
}

export default Tooltip;