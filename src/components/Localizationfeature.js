import React, { useState } from 'react';
import { Box, Container, Typography, Grid, IconButton, Divider } from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const topics = [
  {
    title: 'Adaptive MT, Superior translations',
    description: 'All of our products utilize ModernMT, our award-winning, patented context-adaptive MT technology. It learns from previous translations and post-editing to recognize language context in real-time, providing better suggestions to linguists so they can focus on the most sophisticated translations.'
  },
  {
    title: 'Powerful text, audio, and video translation software',
    description: 'We provide all of our translators with AI-powered tools such as Matecat, Matesub, and Matedub, which eliminate redundant tasks and allow the linguist to focus on the creative aspects of their localization task. All of these tools are augmented by ModernMT, our leading, adaptive machine translation technology.'
  },
  {
    title: 'An unbiased ranking tool to scout first-rate talent',
    description: 'We identify the best linguists for every project thanks to T-Rank, a customizable, AI-driven, proprietary software with 20+ years of training. It ranks translators and copywriters on over 30 factors, including their resume, performance, and expertise in relevant subjects.'
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
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontFamily: 'ARS Maquette Pro, Helvetica Neue, Arial, sans-serif', fontWeight: 'bold' }}>
            A comprehensive localization suite, fully powered by AI
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

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              height: '500px',
              backgroundImage: 'url("/images/local9.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mt: '40px',
              mr: 0
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LocalizationFeature;
