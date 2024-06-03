import React, { useState } from 'react';
import { Box, Grid, Paper, TextField, Typography, Button, IconButton } from '@mui/material';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firebaseInit'; // Ensure Firebase is initialized

const db = getFirestore(app);
const ContactFormWithInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
        await addDoc(collection(db, "contacts"), formData);
        alert("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        alert("Error sending message: ", error);
      }
    };// Add form submission logic here
    

  return (
   <>
    <Box sx={{mt:5,mb:5}}>
      <Typography variant="h4" gutterBottom sx={{textAlign:'center', fontWeight:'bold' }}>
       How Can We Help You Today?
      </Typography>
      <Typography variant="h6" gutterBottom sx={{textAlign:'center' }}>
       We’d love to hear from you! Whether you have a question about our services or wish to collaborate with <br></br>us, just drop us a note here.
      </Typography>
    </Box>
    <Box sx={{ flexGrow: 1, m: 4 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="stretch" text>
        <Grid item xs={12} md={7} >
          <Paper elevation={3} sx={{ p: 3 ,bgcolor: '#F4F3FB',height: '100%'}}>
            <Typography variant="h5" gutterBottom>
              Fill out this form and we'll get in touch with you soon.
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required sx={{ mb: 2, bgcolor:'white' }} />
              <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} required sx={{ mb: 2, bgcolor:'white' }} />
              <TextField fullWidth label="Subject" name="subject" value={formData.subject} onChange={handleChange} required sx={{ mb: 2, bgcolor:'white' }} />
              <TextField fullWidth label="Message" name="message" value={formData.message} onChange={handleChange} multiline rows={4} sx={{ mb: 2, bgcolor:'white' }} />
              <Button type="submit" variant="contained" color="primary" sx={{bgcolor:'#FFC729', color:'black', fontWeight:'bold'}}>
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
         <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Paper elevation={3} sx={{ p: 3, mb: 2, bgcolor: '#F4F3FB' }}>
            <img src="/images/Help.svg" alt="Help" style={{ width: 40, height: 40, marginRight: 8 }} /> 
            <div>
             <Typography variant="h6" sx={{fontWeight:'bold'}}>Help & Support</Typography>
             <Typography>Email us at support@translatebyhumans.com</Typography>
            </div>
          </Paper>
          <Paper elevation={3} sx={{ p: 3, mb: 2, bgcolor: '#F4F3FB' }}>
           <img src="/images/IP-icon.svg" alt="Translators" style={{ width: 40, height: 40, marginRight: 8 }} /> 
           <div>
            <Typography variant="h6" sx={{fontWeight:'bold'}}>For Translators & Linguists</Typography>
            <Typography>Email us at linguists@translatebyhumans.com</Typography>
           </div>
          </Paper>
          <Paper elevation={3} sx={{ p: 3, bgcolor: '#F4F3FB' }}>
           <img src="/images/live.svg" alt="Chat" style={{ width: 40, height: 40, marginRight: 8 }} />
           <div>
            <Typography variant="h6" sx={{fontWeight:'bold'}}>Prefer Live Chat?</Typography>
            <Typography>Click the live chat icon to talk to our team in real-time.</Typography>
          </div>
          </Paper>
         </Box>
        </Grid>
      </Grid>
    </Box>
   </>
  );
};

export default ContactFormWithInfo;
