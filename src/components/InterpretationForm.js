import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import {
    TextField, Button, Typography, Box, Container, Grid, Paper, Dialog,
    DialogTitle, DialogContent, DialogContentText, DialogActions,CardMedia
} from '@mui/material';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firebaseInit'; // Ensure Firebase is initialized
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { width } from '@mui/system';

const db = getFirestore(app);

const InterpretationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        guests: '',
        comments: '',
        phone: ''
    });
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    const location = useLocation();
    const { date, time } = location.state || { date: new Date(), time: '' };
    const formattedDate = moment(date).format('YYYY-MM-DD');
    const formattedTime = moment(time,"HH:mm").format('HH:mm');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const appointmentData = {
                ...formData,
                date: formattedDate,
                time: formattedTime
            };
            const docRef = await addDoc(collection(db, "appointments"), appointmentData);
            console.log("Appointment saved with ID: ", docRef.id);
            setDialogMessage('');
            setOpenDialog(true);
        } catch (error) {
            console.error("Error saving appointment: ", error);
            setDialogMessage('Failed to schedule your appointment. Please try again.');
            setOpenDialog(true);
        }
    };
        const handleCloseDialog = () => {
            setOpenDialog(false);
    };
   
    return (
        <Container maxWidth="lg" sx={{ mt: 4, display: 'flex', flexDirection: 'row' }}>
            <Grid container spacing={2} alignItems="stretch">
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h4" gutterBottom sx={{fontWeight:'bold'}}>Talk to our EXPERT</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <EditCalendarIcon sx={{ mr: 1,color:'blue' }} color="action" />
                            <Typography variant="body2" sx={{fontWeight:'bold', fontSize:18}}>Appointment Date: {formattedDate}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <AccessTimeIcon sx={{ mr: 1,color:'blue' }} color="action" />
                            <Typography variant="body2" sx={{fontWeight:'bold', fontSize:18}}>Appointment Time: {formattedTime}</Typography>
                        </Box>
                        
                    </Paper>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="phone"
                            label="Phone Number"
                            name="phone"
                            autoComplete="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            multiline
                            rows={4}
                            id="comments"
                            label="Please share anything that will help prepare for our meeting."
                            name="comments"
                            autoComplete="comments"
                            value={formData.comments}
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Schedule Event
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, height: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="/images/Scheduler.webp" alt="Descriptive Alt Text" style={{ width: '100%', height: 'auto' }} />
                    </Paper>
                </Grid>
            </Grid>
            <Dialog open={openDialog} onClose={handleCloseDialog} >
                <DialogTitle sx={{fontSize:24, fontWeight:'bold'}}>{"We will be in touch with you soon."}</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{fontSize:20}}>{dialogMessage}</DialogContentText>
                    <CardMedia
                        component="img"
                        height="50"
                        image="/images/confirm.gif"  // Use the path to your GIF file
                        alt="Confirmation Image"
                    />
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary" autoFocus>
                        Okay
                    </Button>
                </DialogActions>
            </Dialog>
              
        </Container>
    );
};

export default InterpretationForm;
