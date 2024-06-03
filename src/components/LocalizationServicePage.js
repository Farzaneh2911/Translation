import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, TextField } from '@mui/material';
import LogoSlider from './Logoslider';
import LocalizationFeature from './Localizationfeature';
import LocalizationFeature2 from './Localizationfeature2';
import LocalizationFeature3 from './Localizationfeature3';
import ContactForm from './Contactform';

const styles = {

    localizeButton: {
        mt: 2, // margin top
        borderRadius: '20px',
        fontWeight: 'bold',
        fontSize: '1.0rem',
        height:'50px',
        color:'black',
        backgroundColor: '#FFC729', // primary color
        '&:hover': {
          backgroundColor: '#115293', // a darker shade of the primary color
          transform: 'scale(1.1)', // scale the button to 110% on hover
          transition: 'transform 300ms ease-in-out, background-color 300ms ease-in-out', // smooth transition for transform and background color
        },
        '&:active': {
          transform: 'scale(0.95)', // scale down to 95% on click
        }
      },
    
    heroContainer: {
      padding: '50px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroTextContainer: {
      flex: 1, // Takes half of the space
      
    },
    heroImageContainer: {
      flex: 1, // Takes the other half of the space
      backgroundImage: 'url("/images/local3.webp")', // Replace with your path to a suitable banner image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '500px', // Adjust based on your preference
    },
    sectionPadding: {
      padding: '40px 0',
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent: {
      flexGrow: 1,
    },
  };
  
  const styles1 = {

    
    heroContainer1: {
      padding: '50px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroTextContainer1: {
      flex: 1,
      
       // Takes half of the space
      
    },
    heroImageContainer1: {
      flex: 1, // Takes the other half of the space
      backgroundImage: 'url("/images/local8.gif")', // Replace with your path to a suitable banner image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '500px', // Adjust based on your preference
    },
    sectionPadding: {
      padding: '40px 0',
    },
    card1: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent1: {
      flexGrow: 1,
    },
  };
  
const LocalizationServicePage = () => {
  return (
    <Box>
      <Box style={styles.heroContainer}>
        <Container maxWidth="xl" style={{ display: 'flex' }}>
         <Box style={styles.heroTextContainer} sx={{mt:15}}>
          <Typography variant="h4" component="h1" gutterBottom sx={{fontWeight:600}}>
           We turn challenging projects into performances
          </Typography>
          <Typography variant="h5" >
           Translated brings top-performing linguists and AI-powered localization tools together to help companies gain a superior understanding of their customers worldwide and achieve a remarkable return on investment.
          </Typography>
          <Button variant="contained" color="primary" sx={styles.localizeButton}>
            Localize with us 
          </Button>
         </Box>
         <Box style={styles.heroImageContainer}>
            {/* Image is set as a background */}
          </Box>
        </Container>
      </Box>
      <LogoSlider />
      
      <Box style={styles1.heroContainer1}>
        <Container maxWidth="xl" style={{ display: 'flex' }}>
         <Box style={styles1.heroImageContainer1}></Box>
         <Box style={styles1.heroTextContainer1} sx={{ml:20}}>
          <Typography variant="h4" component="h1" gutterBottom sx={{fontWeight:600,fontFamily: 'ARS Maquette Pro, Helvetica Neue, Arial, sans-serif',}}>
          Pioneering the perfect symbiosis between linguists and machine translation since 1999
          </Typography>
          <Typography variant="h5" sx={{fontFamily: 'ARS Maquette Pro, Helvetica Neue, Arial, sans-serif'}}>
          Translated uses an effective AI ranking tool to identify the best linguists for any project from a network of 300,000+ vetted, native-speaking professionals. Once we identify the best translator for the job, we provide them with AI-powered localization software that utilizes our award-winning, patented, context-adaptive machine translation (MT).

Our intelligent tools free linguists from redundant tasks so they can focus on language nuances that lead to higher-quality translations. Through this synergy, linguists get better suggestions while MT keeps learning, helping them become more efficient, adaptable, and cost-effective every day.
          </Typography>
          
         </Box>
         
            {/* Image is set as a background */}
         
        </Container>
      </Box>
      <br></br>
      <LocalizationFeature/>
      <br></br>
      <LocalizationFeature2/>
      <br></br>
      <LocalizationFeature3/>
      <br></br>
      <ContactForm/>

      

      
    </Box>
  );
};

export default LocalizationServicePage;
