import React, { useState } from 'react';
import { Box, Container, Typography, Grid, IconButton, Divider } from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const topics = [
  {
    title: 'Intelligent KPI monitoring and direct access to linguists',
    description: 'With TranslationOS, our headless TMS platform, we connect clients directly with over 300,000+ vetted, native-speaking translators. Our platform provides real-time visibility of linguist profiles and valuable KPIs such as financial projections and performance quality.'
  },
  {
    title: 'Insightful localization analytics',
    description: 'We developed the first-ever analytics tool for localization, helping our customers keep track of every detail related to their activity. Like a Google Analytics for localization, it provides enterprises with the actionable data they’re looking for.'
  },
  {
    title: 'Tailored targeting data for destination countries',
    description: 'T-Index, a product of our in-house research center, Imminent, is an effective ranking tool that identifies the best countries to target based on their potential for online sales.'
  },
  // Additional topics can be added here
];

const LocalizationFeature = () => {
  const [openTopics, setOpenTopics] = useState({});

  const toggleDetails = (index) => {
    setOpenTopics(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={8} alignItems="center">
      <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              height: '500px',
              backgroundImage: 'url("/images/user.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mt: '40px',
              mr: 0
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontFamily: 'ARS Maquette Pro, Helvetica Neue, Arial, sans-serif', fontWeight: 'bold' }}>
            A deep understanding of clients’ needs
          </Typography>
          {topics.map((topic, index) => (
            <Box key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                <Typography variant="subtitle1" component="span" sx={{ fontSize: '18px', fontFamily: 'ARS Maquette Pro, Helvetica Neue, Arial, sans-serif' }}>
                  {topic.title}
                </Typography>
                <IconButton onClick={() => toggleDetails(index)} size="large">
                  {openTopics[index] ? <ExpandMoreIcon /> : <ArrowDropDownCircleIcon />}
                </IconButton>
              </Box>

              {openTopics[index] && (
                <Typography sx={{ mt: 2 }}>
                  {topic.description}
                </Typography>
              )}
              
              <Divider sx={{ my: 2 }} />  {/* Divider is placed outside the conditional block */}
            </Box>
          ))}
        </Grid>

        
      </Grid>
    </Container>
  );
};

export default LocalizationFeature;
