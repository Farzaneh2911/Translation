import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

// Define the feature data
const features = [
  {
    icon: "/images/expert.svg",
    text: "Native Industry Experts"
  },
  {
    icon: "/images/pricing.svg",
    text: "Competitive Pricing Model"
  },
  {
    icon: "/images/security.svg",
    text: "Data Safety and Security"
  },
  {
    icon: "/images/advantage.svg",
    text: "Advantage of Translation Memories and Glossaries"
  },
  {
    icon: "/images/proven.svg",
    text: "Proven Success Stories"
  },
  {
    icon: "/images/project-manager.svg",
    text: "Personal Project Manager in your timezone"
  },


];

const FeaturesList = () => {
  return (
    <Box sx={{
        width: '100%',
        ml:{lg:10},
        padding: '20px 0',
        backgroundColor: 'white',
        backgroundImage: 'url("/images/why.png")',
        backgroundSize: { xs: 'cover', lg: '100% 100%' },
        mt: 10
      }}>
        <Typography
           variant="h4" component="h2" gutterBottom sx={{fontWeight:'bold', textAlign:'center', mt:5, fontFamily:'Capriola fonts'}}>
               Choose Us As Your Translation Service Provider<br></br>- Here's Why!
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: 960, mx: 'auto', mt:5 , mb:5}}>  
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'start', px: 1 }}>
                <img src={feature.icon} alt={feature.text} style={{ width: 60, height: 60, marginRight: 20 }} />
                <Typography variant="subtitle1" sx={{ color: 'black' }}>
                  {feature.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
};
  
  
export default FeaturesList;
