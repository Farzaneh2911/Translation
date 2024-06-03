import React, {  useRef  }  from 'react';
import { Box, Typography, Button, Stack, useTheme, useMediaQuery } from '@mui/material';
import VoiceClientLogo from "./VoiceClientLogo";
import VoiceOverTypes from './VoiceOverTypes';
import VoiceOverReviews from './VoiceOverReviews';
import VoiceLatestPost from './VoiceLatestPost';
import VoiceCalltoAction from './VoiceCalltoAction';
//import {  useNavigate } from 'react-router-dom';
const VoiceOver = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  //const navigate = useNavigate();
  const callToActionRef = useRef(null);
  const scrollToCallToAction = () => {
    // Scroll to the VoiceCalltoAction component
    if (callToActionRef.current) {
      callToActionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
            ml: { md: 30 }, // Margin left only on md and up
            textAlign: { xs: 'center', md: 'left' } // Center text on small devices
          }}
        >
          Multilingual Voice Overs For Your Global Audience
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            mb: 3, 
            ml: { md: 30 }, 
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          Localised scripts and recordings, sound effects, multilingual dubbing, and audio and video sync that help your videos speak to a varied audience.
        </Typography>
        <Stack 
          direction="row" 
          spacing={2} 
          sx={{ 
            ml: { md: 30 }, 
            justifyContent: { xs: 'center', md: 'flex-start' } // Center buttons on small devices
          }}
        >
          <Button 
            variant="contained"  onClick={scrollToCallToAction} 
            
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
        </Stack>
      </Box>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img src="/images/VoiceOver.svg" alt="Voice Over Translation" style={{ maxWidth: isMobile ? '80%' : '50%', height: 'auto' }} />
      </Box>
    </Box>
    <VoiceClientLogo/>
    <VoiceOverTypes/>
    <VoiceOverReviews/>
    <VoiceLatestPost/>
    <VoiceCalltoAction ref={callToActionRef}  />
 </>

  );
};

export default VoiceOver;
