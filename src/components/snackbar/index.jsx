import React from "react";
import { Snackbar } from "material-ui";


export const Snack = ({ message, open, handleClose }) => (
    < Snackbar
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        SnackbarContentProps={{
            'aria-describedby': 'message-id',
        }}
        message={message}
    />
)