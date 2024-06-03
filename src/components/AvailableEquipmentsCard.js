import React, { useState, useEffect, useRef  }  from 'react';
import { Box, Typography, Button } from '@mui/material';
import HomeLogoslider from './HomeLogoslider';
import HomeServiceCard from './HomeServiceCard';
import HomeWhyChoose from './HomeWhyChoose';
import HomeSlider from './HomeSlider';
import HomeWhoWeAre from './HomeWhoWeAre';
import HomeContact from './HomeContact';
import StudentPromotion from './StudentPromotion';
import { useLocation, useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  const HomeServiceCardRef = useRef(null);
  
  const scrollToHomeServiceCard = () => {
    if (HomeServiceCardRef.current) {
      HomeServiceCardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const HomeContactRef = useRef(null);
  const scrollToHomeContact = () => {
    // Scroll to the VoiceCalltoAction component
    if (HomeContactRef.current) {
      HomeContactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
  <>
    <Box >
      <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', mt:5, fontFamily:'Segoe UI' }}>
        While You Focus On Going Global,<br/>We Take Care of The Local
      </Typography>
      <Typography variant="h5" sx={{ textAlign: 'center', mt:5 }}>
        High-quality translation, localisation, Voice, and interpretation services provided by experts.
      </Typography>
      <Box sx={{
        mt: 7,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        p: 4,
        backgroundImage: 'url("/images/Home.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 400,
        color: 'white',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        <Button
          variant="contained"
          onClick= {scrollToHomeServiceCard}
          sx={{
            ml: 20,
            fontWeight:'bold',
            backgroundColor: 'white',
            border:3,
            borderColor:'#e6b800',
            color: 'black',
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
            fontWeight:'bold',
            border:3,
            borderColor:'#e6b800',
            mr: 20,
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
    <HomeLogoslider/>
    <HomeServiceCard ref={HomeServiceCardRef}/>
    <HomeWhyChoose/>
    <HomeSlider/>
    <StudentPromotion />
    <HomeWhoWeAre/>
    <HomeContact ref={HomeContactRef}/>
  </>
  );
};

export default Banner;
