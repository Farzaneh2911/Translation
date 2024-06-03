import React, { useState,forwardRef } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { db } from '../firebaseInit';
import { addDoc, collection } from 'firebase/firestore';

const ContactForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "voicesubmissions"), formData);
      alert('Your request has been submitted!');
      setFormData({ fullName: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (

    <Box
      ref={ref}
      sx={{
        py: 8,
        px: 3,
        backgroundImage: 'url("/images/contactus.png")',
        backgroundSize: { xs: 'cover', lg: '100% 100%' }, // Adjust based on screen size
        width: '100vw',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: '#ffffff',
        textAlign: 'center'
      }}
    >
     <Typography variant="h4" gutterBottom component="div" sx={{ marginBottom: 3 }}>
          Send Us Your Request
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            fullWidth
            name="fullName"
            label="Full Name *"
            value={formData.fullName}
            onChange={handleChange}
            margin="normal"
            variant="filled"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '8px',
              width: '50%', // Smaller width than full container width
              ml:'80px'
            }}
          />
          <TextField
            fullWidth
            name="email"
            label="Email *"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="filled"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '8px',
              width: '50%',
              ml:'80px'
            }}
          />
          <TextField
            fullWidth
            name="message"
            label="Message *"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            variant="filled"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '8px',
              width: '50%',
              ml:'80px'
            }}
          />
          <Box  sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
           <Button color="primary" variant="contained" type="submit" sx={{ mt: 2, width: 100,ml:'80px',backgroundColor:'#FFC729', color:'black', fontWeight:'bold' }}>
             Send
           </Button>
          </Box>
        </form>
      </Box>
  );
});

export default ContactForm;
