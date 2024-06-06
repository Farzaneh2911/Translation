import React, { useRef } from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import HomeLogoslider from './HomeLogoslider';
import HomeServiceCard from './HomeServiceCard';
import HomeWhyChoose from './HomeWhyChoose';
import HomeSlider from './HomeSlider';
import HomeWhoWeAre from './HomeWhoWeAre';
import HomeContact from './HomeContact';
import StudentPromotion from './StudentPromotion';

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const HomeServiceCardRef = useRef(null);
  const HomeContactRef = useRef(null);

  const scrollToHomeServiceCard = () => {
    if (HomeServiceCardRef.current) {
      HomeServiceCardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHomeContact = () => {
    if (HomeContactRef.current) {
      HomeContactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Box>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 'bold', 
            textAlign: 'center', 
            mt: isMobile ? 2 : 5, 
            fontFamily: 'Segoe UI',
            fontSize: isMobile ? '1.5rem' : '2.5rem' // Adjust font size for mobile
          }}
        >
          While You Focus On Going Global,<br />We Take Care of The Local 
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            textAlign: 'center', 
            mt: isMobile ? 2 : 5,
            fontSize: isMobile ? '1rem' : '1.5rem' // Adjust font size for mobile
          }}
        >
          High-quality translation, localisation, Voice, and interpretation services provided by experts.
        </Typography>
        <Box sx={{
          mt: 7,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row', // Stack buttons vertically on mobile
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          p: 4,
          backgroundImage: 'url("/images/Home.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: isMobile ? 300 : 400, // Adjust height for mobile
          color: 'white',
          borderRadius: '12px',
          overflow: 'hidden'
        }}>
          <Button
            variant="contained"
            onClick={scrollToHomeServiceCard}
            sx={{
              fontWeight: 'bold',
              backgroundColor: 'white',
              border: 3,
              borderColor: '#e6b800',
              color: 'black',
              mb: isMobile ? 2 : 0, // Add margin bottom on mobile
              '&:hover': {
                backgroundColor: '#e6b800',
                '&::after': { // Adding the arrow on hover
                  content: '" →"',
                  display: 'inline',
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                },
                width: 'auto', // Ensures the button width can expand
                padding: '6px 32px 6px 16px', // Increase right padding on hover
              }
            }}
          >
            Get A Free Quote
          </Button>

          <Button
            onClick={scrollToHomeContact}
            variant="contained"
            sx={{
              fontWeight: 'bold',
              border: 3,
              borderColor: '#e6b800',
              backgroundColor: 'white',
              color: 'black',
              '&:hover': {
                backgroundColor: '#e6b800',
                '&::after': {
                  content: '" →"',
                  display: 'inline',
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                },
                width: 'auto',
                padding: '6px 32px 6px 16px'
              }
            }}
          >
            Talk To Our Expert
          </Button>
        </Box>
      </Box>
      <HomeLogoslider />
      <HomeServiceCard ref={HomeServiceCardRef} />
      <HomeWhyChoose />
      <HomeSlider />
      <br></br>
      <br></br>
      <StudentPromotion />
      <HomeWhoWeAre />
      <HomeContact ref={HomeContactRef} />
    </>
  );
};

export default Banner;
