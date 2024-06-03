import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    // Here you would handle submission, e.g., sending data to a server
  };

  return (
    <Container maxWidth="md" style={{ padding: '50px 0' }}>
      <Box 
        sx={{
          backgroundImage: 'url("/images/contact.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0px 0px 20px #ccc',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Centers the content
          justifyContent: 'center' // Centers the form vertically
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
          <Button color="primary" variant="contained" type="submit" sx={{ mt: 2, width: '50%',ml:'80px' }}>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ContactForm;
