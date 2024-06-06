import React, { useState, useEffect, useRef  }  from 'react';
import { Box, Typography, Button, Stack, useTheme, useMediaQuery } from '@mui/material';
import VoiceClientLogo from "./VoiceClientLogo";
import VoiceOverTypes from './VoiceOverTypes';
import VoiceOverReviews from './VoiceOverReviews';
import VoiceLatestPost from './VoiceLatestPost';
import VoiceCalltoAction from './VoiceCalltoAction';
import { useLocation, useNavigate } from 'react-router-dom';
import ComplexNeedsSection from './NeedsSection';
import Translationquality from './Translationquality';
import WhyChooseUsSection from './Whychooseus';
import TestimonialsSection  from './Testimonial';
import IndustrySection from './Industrysection';
import Getquotenow from './Getquotenow';
import TranslationMajor from "./TranslationMajor";
import { Link } from 'react-router-dom';
import HomeLogoslider from './HomeLogoslider';
import VanillaTilt from 'vanilla-tilt';
import "../css/cardStyle.css";
const Translation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const callToActionRef = useRef(null);
  const tiltRef = useRef(null);
  const scrollToCallToAction = () => {
    if (callToActionRef.current) {
    // Scroll to the VoiceCalltoAction component
      callToActionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }  
  };
  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 10,
      speed: 100,
      transition: true,
      easing: "ease-out",
    });
  }, []);

  return (
   <>
    <Box sx={{
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center', 
      height: '100%', // Adjust height to be dynamic based on content
      py: 1
    }}>
      <Box sx={{ flex: 1, p: 3 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{
            fontWeight: 'bold',
             // Margin left only on md and up
            textAlign: { xs: 'center', md: 'center', mt:5 } // Center text on small devices
          }}
        >
          Best Document<br></br>Translations Don't Seem<br></br>Translated At All.
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            mb: 3, 
            
            textAlign: 'center'
          }}
        >
          Quality document translation services for businesses looking to<br></br>expand globally.
        </Typography>
        <Stack 
          direction="row" 
          spacing={2} 
          sx={{ 
            ml: { md: 30 }, 
            justifyContent: { xs: 'center', md: 'flex-start' } // Center buttons on small devices
          }}
        >
          <Link to="/Translation-price" style={{ textDecoration: 'none' }}>
           <Button 
             variant="contained" 
            
             sx={{ 
              backgroundColor: '#FFC729', 
              color: 'black', 
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#e6b800' // Darken button on hover
              }
             }}
           >
             Get A Free Quote
           </Button>
          </Link>
        </Stack>
      </Box>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', mt:3 }}>
        <img  ref={tiltRef} src="/images/translation.svg" alt="Voice Over Translation" style={{ maxWidth: isMobile ? '80%' : '50%', height: 'auto', transition: 'transform 0.15s ease-out' }} className="img-style" />
        
      </Box>
    </Box>
    
    
    <Translationquality/>
    <TranslationMajor/>
    <HomeLogoslider/>
    <WhyChooseUsSection />
    <TestimonialsSection />
    <IndustrySection />
    <Getquotenow />
  </>

  );
};

export default Translation;