import React from 'react';
import { Box, Container, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';

const LocalizationServicePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
        Our Story
      </Typography>
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Grid container spacing={2} direction={isMobile ? 'column' : 'row'} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 200 }}>
                When I landed in London in autumn 2007, it took me a while to adjust to the sudden cultural and linguistic shift the new land brought for me. While I belong to the privileged group of people who can speak English, I found myself empathising with international students, employees, tourists and friends who communicated with great difficulty. This was not just about language but also involved differences around cultures, local dialects and lingual nuances. And, this realisation helped me conceive the idea of Translate By Humans!
              </Typography>
              <Typography variant="h6">
                While the world was getting introduced to the wonders of artificial intelligence and machine learning, my partner Alpi and I decided to put faith in ‘humans’. I am really glad to see that what started as a basic translation order portal on my home desk in August 2013, has now transformed into a bold and dynamic Language Service Provider website! What’s more exciting is that we are now a multifunctional and multilingual team based out of UK and India – not to forget our extended teams based across the globe.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundImage: 'url("/images/people copy.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: isMobile ? '300px' : '500px',
                height: isMobile ? 'auto' : '100%', // Adjust height for mobile screens
                width: '100%',
                p: 2,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LocalizationServicePage;
