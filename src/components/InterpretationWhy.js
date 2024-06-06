import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

// Define the feature data
const features = [
  {
    icon: "/images/Technical.svg",
    title: "Technical Assistance",
    description: "We are committed to supporting our clients from the moment they make their initial inquiry, all the way through to event feedback. We are pleased to offer technical assistance to our clients at no additional charge."
  },
  {
    icon: "/images/Hour.svg",
    title: "No Minimum Hours",
    description: "At Translate By Humans, we do not impose a minimum hourly requirement on our clients. We provide support for all types of meetings, whether it's a brief hourly staff meeting or a full-day webinar."
  },
  {
    icon: "/images/Languages.svg",
    title: "Languages barrier",
    description: "Connect with anyone, anytime, anywhere. We support 180+ languages and work with native industry experts for our interpretation events, ensuring accuracy and professionalism."
  },
  {
    icon: "/images/expert (1).svg",
    title: "Quality Vendors",
    description: "Our interpreters have received academic training, possess extensive experience, and operate at the highest international standards, both in academic and business contexts."
  },
  {
    icon: "/images/CustomerSupport.svg",
    title: "Customer Support",
    description: "We firmly believe that delivering the best customer experience is a crucial element of any successful project. Our ultimate goal for any interpretation project is to ensure a successful event and the best possible customer experience."
  },
  {
    icon: "/images/check.svg",
    title: "Pre-event Checks",
    description: "Customers can rest assured that they are in good hands. We will be present at the event to conduct all necessary pre-event checks, ensuring a worry-free experience for our customers."
  }
];

const FeaturesList = () => {
  return (
    <Box sx={{
        width: '100%',
        padding: '20px 0',
        backgroundColor: 'white',
        backgroundImage: 'url("/images/why.png")',
        backgroundSize: { xs: 'cover', lg: '100% 100%' },
        mt: 10
      }}>
        <Typography
           variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mt: 5, fontFamily: 'Capriola fonts' }}>
               Why Is Our Interpretation Process<br />Smooth & Seamless?
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: 960, mx: 'auto', mt: 5, mb: 5 }}>  
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', px: 1 }}>
                <img src={feature.icon} alt={feature.title} style={{ width: 60, height: 60, marginRight: 20 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'black' }}>
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
