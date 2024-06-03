import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

// Define the feature data
const features = [
  {
    icon: "/images/rec.png",
    title: "Who",
    description: "We are project experts, innovative designers, creative writers, and smart developers with a passion for languages. Add to this, our elite network of professional and certified translators, experienced interpreters, localisation specialists and native linguists – and we have the perfect team to keep the world talking!"
  },
  {
    icon: "/images/rec.png",
    title: "What",
    description: "We are a Language Service Provider (LSP) championing the cause of ‘human translations.’ We help customers across industries to communicate globally in 180+ languages with our Translation, Localisation, Interpretation, Subtitling, Voiceover, Transcription, Multilingual Desktop Publishing (DTP), and Language Quality Assurance (LQA) services."
  },
  {
    icon: "/images/rec.png",
    title: "Why",
    description: "We aim to mobilise startups, small businesses and big brands to expand to new, international territories – minus the communication gap. We strive to achieve this by our impeccable ‘human touch’ that helps customers and clients feel at home, in their native languages."
  },
  
  
];

const FeaturesList = () => {
  return (
    <Box sx={{
        width: '120%',
        padding: '20px 0',
        backgroundColor: 'white',
        backgroundImage: 'url("/images/why.png")',
        backgroundSize: { xs: 'cover', lg: '100% 100%' },
        mt: 10
      }}>
        <Typography
           variant="h4" component="h2" gutterBottom sx={{fontWeight:'bold', textAlign:'center', mt:5, fontFamily:'Capriola fonts'}}>
               We are making You<br/>Talk...
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: 960, mx: 'auto', mt:5, mb:5 }}>  
          {features.map((feature, index) => (
            <Grid item xs={12} sm={8} lg={4} key={index}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', px: 1 }}>
                <img src={feature.icon} alt={feature.title} style={{ width: 60, height: 60, marginRight: 20 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black', fontSize:30 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'black',fontSize:20 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
};
  
export default FeaturesList;
