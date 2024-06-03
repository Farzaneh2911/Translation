import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

// Import logos

// Add other imports for logos here

const ClientLogos = () => {
  return (
    <Box sx={{backgroundColor: 'white', textAlign: 'center',mt:5, width: '100vw',padding: '20px 0',overflowX: 'hidden',backgroundImage: 'url("/images/why.png")',backgroundSize: { xs: 'cover', lg: '100% 100%' }}} // Ensure no padding is affecting the width
      >
      <Typography variant="h4" sx={{ mb: 3, fontWeight:'bold', fontFamily:' Capriola fonts',mt:5 }}>
        From Startups to Fortune 500s: 
      </Typography>
      <Typography variant="h4" sx={{ mb: 3,fontWeight:'bold', fontFamily: ' Capriola fonts' }}>Our Translation Services Drive Business Success</Typography>
      <Grid container justifyContent="center" spacing={4} sx={{height:'30%', mt:5}}>
        <Grid item xs={6} sm={4} md={2}>
          <img src="/images/C1.svg" alt="Microsoft" style={{ maxWidth: '50%', height: 'auto' }} />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <img src="/images/C2.svg" alt="Booking.com" style={{ maxWidth: '50%', height: 'auto' }} />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <img src="/images/C3.svg" alt="Pepsi" style={{ maxWidth: '50%', height: 'auto' }} />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <img src="/images/C4.png" alt="Nike" style={{ maxWidth: '50%', height: 'auto' }} />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <img src= "/images/C5.svg" alt="UNICEF" style={{ maxWidth: '50%', height: 'auto' }} />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <img src= "/images/C6.png" alt="UNICEF" style={{ maxWidth: '50%', height: 'auto' }} />
        </Grid>
        {/* Add more Grid items for other logos */}
      </Grid>
    </Box>
  );
};

export default ClientLogos;
