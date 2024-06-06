import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const AboutSection = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      mt: 4,
      left: {xs:20, lg:10},
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url("/images/company.png")',
      backgroundSize: isDesktop ? '80% 100%' : 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      height: 'auto',  // Adjusting height to be auto for flexibility
      minHeight: '1100px',  // Minimum height to ensure visibility of content
      width: '100%',  // Full width to utilize space better
      padding: theme.spacing(6),
      color: 'black',
      textAlign: 'center',
      overflow: 'hidden'
    }}>
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(2),
      }}>
        <Typography variant={isDesktop ? "h3" : isTablet ? "h4" : "h5"} sx={{
          fontWeight: 'bold',
          mb: 4,
          fontFamily: 'sans-serif',
          mt: {xs:2, lg:10},  // Adjusted for less vertical space on smaller screens
        }}>
          A TRANSLATION COMPANY FOR<br/>YOUR SUCCESS
        </Typography>
        {[
          'We are PMC Translation, and we cover everything from translation, localization to multilingual copywriting with a keen eye for cultural finesse.',
          'Since its debut in the language service industry, our translation company’s primary focus has been to create a unique language for businesses and marketers across all industries to help them thrive in an ever-challenging marketplace.',
          'As an international, worldwide-reaching translation company, Pangea Global employs 900 (and counting) professional linguists and native speakers of over 240 language pairs, including local dialects. This secures our translation agency a market-leading position in the field of translation and localization, allowing us to cover the whole spectrum of language services, with proofreading, editing, and linguistic QA topping the list.',
          'Our translation company is also one of the few out there to hold two ISO certifications – ISO 17100 and ISO 9001. So, quality is our middle name.'
        ].map((text, index) => (
          <Typography key={index} variant="subtitle1" sx={{
            mb: 2,
            fontFamily: 'sans-serif',
            maxWidth: '700px',
            textAlign: 'center',
            fontSize: { xs: '0.9rem', sm: '1.0rem', md: '1.2rem' }, // Adjusted font sizes for better readability on all screens
          }}>
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default AboutSection;
