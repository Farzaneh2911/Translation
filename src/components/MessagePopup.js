import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button } from '@mui/material';

const MessagePopup = ({ open, handleClose, message }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
                '& .MuiDialog-container': {
                    alignItems: 'center', // Center the dialog vertically
                    justifyContent: 'center' // Center the dialog horizontally
                }
            }}
        >
            <DialogTitle id="alert-dialog-title">{"Notification"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {message}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default MessagePopup;
