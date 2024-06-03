import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // Import arrow icon

const FreeOfferBanner = () => {
  return (
    <Container maxWidth="lg" sx={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      p: 2, 
      marginTop: '40px',
      backgroundColor: '#fedf82', 
      borderRadius: '30px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.12)',
      overflow: 'hidden',
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src="images/quote1.webp" alt="Happy User" style={{ width: 300, marginRight: 24, borderRadius: '50%' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography variant="h3" sx={{ color: '#333', fontWeight: 'bold', marginBottom: 1 }}>
            Get an instant quote
          </Typography>
          <Typography variant="h6" sx={{ color: '#333' }}>
            The easy way to get your documents translated fast. Buy online in a few clicks.
          </Typography>
        </Box>
      </Box>
      <Link to="/available-equipments-card" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: 'white',
            color: 'black',
            fontFamily: 'sans-serif',
            borderRadius: '40px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.24)',
            position: 'relative',
            '&:hover': {
              backgroundColor: 'white', 
              boxShadow: '0 3px 6px rgba(0,0,0,0.16)',
              '& .MuiSvgIcon-root': { // Targeting the MuiSvgIcon-root class directly for hover
                transform: 'translateX(10px)', // Moving the icon to the right
              }
            }
          }}
          endIcon={<ArrowForwardIosIcon sx={{ 
            transition: 'transform 0.2s ease-in-out' // Ensuring the transition applies to the transform
          }} />}
        >
          Instant quote
        </Button>
      </Link>
    </Container>
  );
};

export default FreeOfferBanner;
