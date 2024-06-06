import React from 'react';
import { Box, Container, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import LogoSlider from './Logoslider';
import LocalizationFeature from './Localizationfeature';
import LocalizationFeature2 from './Localizationfeature2';
import LocalizationFeature3 from './Localizationfeature3';
import ContactForm from './Contactform';

const styles = (theme, isMobile) => ({
  localizeButton: {
    mt: 2, // margin top
    borderRadius: '20px',
    fontWeight: 'bold',
    fontSize: '1.0rem',
    height: '50px',
    color: 'black',
    backgroundColor: '#FFC729', // primary color
    '&:hover': {
      backgroundColor: '#115293', // a darker shade of the primary color
      transform: 'scale(1.1)', // scale the button to 110% on hover
      transition: 'transform 300ms ease-in-out, background-color 300ms ease-in-out', // smooth transition for transform and background color
    },
    '&:active': {
      transform: 'scale(0.95)', // scale down to 95% on click
    },
  },
  heroContainer: {
    padding: '50px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: isMobile ? 'column' : 'row',
  },
  heroTextContainer: {
    flex: 1, // Takes half of the space
    textAlign: isMobile ? 'center' : 'left',
    mt: isMobile ? 5 : 15,
  },
  heroImageContainer: {
    flex: 1, // Takes the other half of the space
    backgroundImage: 'url("/images/local3.webp")', // Replace with your path to a suitable banner image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: isMobile ? '300px' : '500px', // Adjust based on your preference
  },
  sectionPadding: {
    padding: '40px 0',
  },
});

const styles1 = (isMobile) => ({
  heroContainer1: {
    padding: '50px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: isMobile ? 'column' : 'row',
  },
  heroTextContainer1: {
    flex: 1, // Takes half of the space
    textAlign: isMobile ? 'center' : 'left',
    ml: isMobile ? 0 : 20,
    mt: isMobile ? 5 : 0,
  },
  heroImageContainer1: {
    flex: 1, // Takes the other half of the space
    backgroundImage: 'url("/images/local8.gif")', // Replace with your path to a suitable banner image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: isMobile ? '300px' : '500px', // Adjust based on your preference
  },
  sectionPadding: {
    padding: '40px 0',
  },
});

const LocalizationServicePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const appliedStyles = styles(theme, isMobile);
  const appliedStyles1 = styles1(isMobile);

  return (
    <Box>
      <Box style={appliedStyles.heroContainer}>
        <Container maxWidth="xl" style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
          <Box style={appliedStyles.heroTextContainer}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
              We turn challenging projects into performances
            </Typography>
            <Typography variant="h5">
              Translated brings top-performing linguists and AI-powered localization tools together to help companies gain a superior understanding of their customers worldwide and achieve a remarkable return on investment.
            </Typography>
            <Button variant="contained" color="primary" sx={appliedStyles.localizeButton}>
              Localize with us 
            </Button>
          </Box>
          <Box style={appliedStyles.heroImageContainer}>
            {/* Image is set as a background */}
          </Box>
        </Container>
      </Box>
      <LogoSlider />
      
      <Box style={appliedStyles1.heroContainer1}>
        <Container maxWidth="xl" style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
          <Box style={appliedStyles1.heroImageContainer1}></Box>
          <Box style={appliedStyles1.heroTextContainer1}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, fontFamily: 'ARS Maquette Pro, Helvetica Neue, Arial, sans-serif' }}>
              Pioneering the perfect symbiosis between linguists and machine translation since 1999
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: 'ARS Maquette Pro, Helvetica Neue, Arial, sans-serif' }}>
              Translated uses an effective AI ranking tool to identify the best linguists for any project from a network of 300,000+ vetted, native-speaking professionals. Once we identify the best translator for the job, we provide them with AI-powered localization software that utilizes our award-winning, patented, context-adaptive machine translation (MT).
              Our intelligent tools free linguists from redundant tasks so they can focus on language nuances that lead to higher-quality translations. Through this synergy, linguists get better suggestions while MT keeps learning, helping them become more efficient, adaptable, and cost-effective every day.
            </Typography>
          </Box>
        </Container>
      </Box>
      <br />
      <LocalizationFeature />
      <br />
      <LocalizationFeature2 />
      <br />
      <LocalizationFeature3 />
      <br />
      <ContactForm />
    </Box>
  );
};

export default LocalizationServicePage;
