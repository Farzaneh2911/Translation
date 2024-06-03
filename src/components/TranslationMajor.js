import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const features = [
  {
    icon: "/images/Finance.svg",
    title: "Banking & Finance",
  },
  {
    icon: "/images/Medical.svg",
    title: "Medical & Healthcare",
  },
  {
    icon: "/images/Legal.svg",
    title: "Legal",
  },
  {
    icon: "/images/Technicall.svg",
    title: "Technical & Engineering",
  },
  {
    icon: "/images/Customer-Service.svg",
    title: "Customer Service",
  },
  {
    icon: "/images/travel.svg",
    title: "Travel",
  },
  {
    icon: "/images/Gamingg.svg",
    title: "Gaming",
  },
  {
    icon: "/images/Software.svg",
    title: "Software & Technology",
  },
];

const FeaturesList = () => {
  return (
    <Box sx={{
        width: '100%',
        padding: '20px 0',
        backgroundColor: 'white',
        mt: 10
      }}>
      <Typography
        variant="h3" component="h2" gutterBottom sx={{fontWeight: 'bold', textAlign: 'center', mt: 2, mb: 8, fontFamily: 'Capriola'}}>
          We Have Expertise In All Major Industries
      </Typography>
      <Typography
        variant="h5" component="h2" gutterBottom sx={{fontWeight: 'bold', textAlign: 'center', mt: 2, mb: 8, fontFamily: 'Capriola'}}>
         Whether it’s a medical certificate or marketing material, trust us to give you the best results that suit the context of your industry.
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 1200, mx: 'auto', mb: 5 }}>  
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index} sx={{ px: 3, py: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <img src={feature.icon} alt={feature.title} style={{ width: 180, height: 100, marginBottom: 10 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>
                {feature.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
  
export default FeaturesList;
