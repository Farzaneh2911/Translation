import React, { useState } from 'react';
import { Box, Container, Typography, Grid, IconButton, Divider } from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const topics = [
  {
    title: 'An unparalleled network of native linguists',
    description: 'We can translate large projects in hours and smaller ones in minutes thanks to a vast network of 300,000+ vetted, native-speaking translators. We coach linguists and work with top copywriters worldwide to deliver consistent quality and grasp the client’s tone of voice quickly.'
  },
  {
    title: 'An innovative hybrid vendor model that optimizes costs',
    description: 'For the most challenging projects, our industry-leading in-house team works with a pool of thousands of freelancers worldwide to optimize costs and let clients add as many locales as they want.'
  },
  {
    title: 'An ever-expanding offering covering 40+ domains',
    description: 'Our professional translators are skilled in over 40 areas of expertise, including advertising, websites, software localization, video captioning, subtitling, dubbing, multilingual DTP, chatbots, and official translations. Don’t hesitate to ask if you don’t find what you need: we can build any custom service and welcome the challenge.'
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
           Rapidly scalable services for every requirement
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
              backgroundImage: 'url("/images/feature3.webp")',
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
