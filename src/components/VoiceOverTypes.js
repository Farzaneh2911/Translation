import React from 'react';
import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';

const VoiceOverTypes = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" sx={{ mb: 5, textAlign: 'center', fontWeight:'bold',mt:5 }}>
        Multilingual Voice Overs For All Kinds of Videos
      </Typography>
      <Grid container spacing={matches ? 2 : 1}> {/* Reduced spacing for better column proximity */}
        {[
          { src: "/images/entertainment.svg", alt: "Entertainment", title: "Entertainment", desc: "Help your foreign audience understand the characters and plot of your films with multilingual voice-overs for animated videos, social media videos, feature films, etc." },
          { src: "/images/Training.svg", alt: "Training & Development", title: "Training & Development", desc: "Localise your demos and safety guidelines videos with multilingual voice-overs and make them more authentic for international audience." },
          { src: "/images/media.svg", alt: "Media", title: "Media", desc: "Maximise the reach of your marketing messages with multilingual voice-overs for your target audience overseas for advertisements and news broadcasts." },
          { src: "/images/elearning.svg", alt: "eLearning", title: "eLearning", desc: "Share knowledge with learners all around the world with voice-overs in multiple languages for eLearning videos." },
          { src: "/images/Gaming.svg", alt: "Gaming", title: "Gaming", desc: "Add to the gaming experience with voice-overs that speak to gamers in a language they understand video, computer, and app-based games." }
        ].map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: 2 }}>
              <img src={item.src} alt={item.alt} style={{ width: 60, height: 60 }} />
              <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight:'bold', fontFamily:' Capriola' }}>{item.title}</Typography>
              <Typography variant="body1" sx={{fontSize:18}}>{item.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VoiceOverTypes;
