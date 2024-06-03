import React, { useRef } from 'react';
import { Box, Typography, Button, Stack, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import InterpretationContent from './InterpretationContent';
import InterpretationServices from './InterpretationServices';
import AssistanceCard from './AssistanceCard';
import InterpretationPlatform from './InterpretationPlatform';
import InterpretationWhy from './InterpretationWhy';
import { useLocation, useNavigate } from 'react-router-dom';

const styles = {
  heroContainer: {
    backgroundImage: `url('/images/interpretation.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginTop: '64px'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const JumpButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden', // Keeps pseudo-elements within the button bounds
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    backgroundColor: theme.palette.primary.main,
    zIndex: 0,
    transition: 'transform .3s',
    transform: 'translateY(100%)',
  },
  '& span': {
    position: 'relative',
    zIndex: 1,
  },
  '&:hover::after': {
    transform: 'translateY(0)',
    animation: '$jump .3s ease-in-out'
  },
  '@keyframes jump': {
    '0%, 100%': {
      transform: 'translateY(0)'
    },
    '50%': {
      transform: 'translateY(-10px)' // Control the height of the jump
    }
  }
}));

const Interpretation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const callToActionRef = useRef(null);
  const scrollToCallToAction = () => {
    if (callToActionRef.current) {
      // Scroll to the VoiceCalltoAction component
      callToActionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteClick = () => {
    navigate('/quotation-request');
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
              textAlign: { xs: 'center', md: 'left', mt: 5 } // Center text on small devices
            }}
          >
            Communicate Beyond<br />Boundaries With Our<br />Interpretation Services.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              mb: 3,
              ml: { md: 30 },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            Overcome the language divide with our Video Remote<br />Interpretation services. Our professional interpreters help take your<br />multilingual communication to the next level with accurate real-time interpretation.
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
              variant="contained"
              sx={{
                backgroundColor: '#FFC729',
                color: 'black',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#e6b800' // Darken button on hover
                }
              }}
              onClick={handleQuoteClick}>

              Get A Free Quote
            </Button>

          </Stack>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img src="/images/Inter.svg" alt="Voice Over Translation" style={{ maxWidth: isMobile ? '80%' : '50%', height: 'auto' }} />
        </Box>
      </Box>
      <InterpretationContent />
      <InterpretationServices />
      <InterpretationPlatform />
      <InterpretationWhy />
      <AssistanceCard />
    </>
  );
};

export default Interpretation;
