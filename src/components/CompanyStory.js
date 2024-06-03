import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, TextField } from '@mui/material';
import LogoSlider from './Logoslider';
import LocalizationFeature from './Localizationfeature';
import LocalizationFeature2 from './Localizationfeature2';
import LocalizationFeature3 from './Localizationfeature3';
import ContactForm from './Contactform';

const styles = {

    
    
    heroContainer: {
      padding: '20px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroTextContainer: {
      flex: 1, // Takes half of the space
      
    },
    heroImageContainer: {
      flex: 1, // Takes the other half of the space
      backgroundImage: 'url("/images/people copy.png")', // Replace with your path to a suitable banner image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '500px',
      height:'100%',
      width:'80px' // Adjust based on your preference
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
  
  
  
  
const LocalizationServicePage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{fontWeight:600, textAlign:'center'}}>
          Our Story
      </Typography>
      <Box style={styles.heroContainer}>
        <Container maxWidth="xl" style={{ display: 'flex' }}>
         <Box style={styles.heroTextContainer} sx={{mt:2}}>
          <Typography variant="h6" component="h1" gutterBottom sx={{fontWeight:200}}>
          When I landed in London in autumn 2007, it took me a while to adjust to the sudden cultural and linguistic shift the new land brought for me. While I belong to the privileged group of people who can speak English, I found myself empathising with international students, employees, tourists and friends who communicated with great difficulty. This was not just about language but also involved differences around cultures, local dialects and lingual nuances. And, this realisation helped me conceive the idea of Translate By Humans!
          </Typography>
          <Typography variant="h6" >
          While the world was getting introduced to the wonders of artificial intelligence and machine learning, my partner Alpi and I decided to put faith in ‘humans’. I am really glad to see that what started as a basic translation order portal on my home desk in August 2013, has now transformed into a bold and dynamic Language Service Provider website! What’s more exciting is that we are now a multifunctional and multilingual team based out of UK and India – not to forget our extended teams based across the globe.
          </Typography>
          
         </Box>
         <Box style={styles.heroImageContainer}>
            {/* Image is set as a background */}
          </Box>
        </Container>
      </Box>
      
      
      
          
         
         
            {/* Image is set as a background */}
         
        
      
      

      

      
    </Box>
  );
};

export default LocalizationServicePage;
