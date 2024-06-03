import React, { useState } from 'react';
import { Box, Grid, Paper, TextField, Typography, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firebaseInit'; // Ensure Firebase is initialized
const db = getFirestore(app);

function ServiceForm() {
  const [formData, setFormData] = useState({
    service: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    requirements: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await addDoc(collection(db, "Quotation"), formData);
        alert("Message sent successfully!");
        setFormData({
          service: '',
          firstName: '',
          lastName: '',
          email: '',
          phone:'',
          company:'',
          requirements:''
        });
      } catch (error) {
        console.error("Error sending message: ", error);
        alert("Error sending message: " + error.message);
      }
    };
  

  return (
   <>
    <Box sx={{mt:5,mb:5}}>
      <Typography variant="h4" gutterBottom sx={{textAlign:'center', fontWeight:'bold' }}>
      Get a Free, No-Obligation Price Quote
      </Typography>
      <Typography variant="h6" gutterBottom sx={{textAlign:'center' }}>
      Select the language service you need, fill out the details, and our team will reach out to you shortly!
      </Typography>
    </Box>

    <Box sx={{ flexGrow: 1, m: 4 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 3, bgcolor: '#F4F3FB', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Select Your Service</Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Select Your Service</InputLabel>
              <Select
                name="service"
                value={formData.service}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="translation">Translation</MenuItem>
                <MenuItem value="interpretation">Interpretation</MenuItem>
                <MenuItem value="localization">Localization</MenuItem>
                <MenuItem value="voiceover">VoiceOver</MenuItem>
              </Select>
            </FormControl>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </Grid>
            </Grid>
            <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} required sx={{ my: 2 }} />
            <TextField fullWidth label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
            <TextField fullWidth label="Company" name="company" value={formData.company} onChange={handleChange} sx={{ my: 2 }} />
            <TextField fullWidth label="Describe your requirements" name="requirements" value={formData.requirements} onChange={handleChange} required multiline rows={4} />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
             <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2, width:80, bgcolor:'#FFC729', color:'black',fontWeight:'bold' }}>Send</Button>
           </Box>
          </Paper>
        
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {[
              { src: "/images/s.png", text: "We adhere to the most stringent security protocols such as data encryption. So, all the information you provide us is 100% safe and secure." },
              { src: "/images/gdpr.svg", text: "We are GDPR compliant and meet the industry standards for quality processes and information safety." },
              { src: "/images/g.svg", text: "Hate spam? We do, too – which is why we will never spam your inbox." }
            ].map((info, index) => (
              <Paper key={index} elevation={3} sx={{ p: 2, flex: 1, mb: 2, bgcolor: '#F4F3FB', display: 'flex', alignItems: 'center' }}>
                <img src={info.src} alt="Icon" style={{ width: 60, height: 60, marginRight: 8 }} />
                <Typography sx={{ fontWeight: 'bold' }}>{info.text}</Typography>
              </Paper>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  </>
  );
}

export default ServiceForm;
