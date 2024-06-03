import React,{ useState,forwardRef } from 'react';
import { Grid, Card, CardContent, Typography, Button, CardMedia, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Sample data for the services
const services = [
  {
    title: "Translation Services",
    description: "Translation of documents, and more for all popular industries.",
    icon: "/images/s1.svg",
    path: "/book-equipment" 
  },
  {
    title: "Interpretation Services",
    description: "Video remote interpretation services available 24/7 for a variety of platforms like Zoom, MS Teams, Web-ex and more.",
    icon: "/images/s2.svg",
    path: "/Interpretation"
  },
  {
    title: "Localization Services",
    description: "Localization of apps, websites, games, and more for all popular industries.",
    icon: "/images/s6.png",
    path: "/localization-service"
  },
  {
    title: "Voice Over Services",
    description: "Customized voice over services for a range of video productions by hand-picked voice talent for every project.",
    icon: "/images/s3.svg",
    path:"/Voice-service"
  },
  {
    title: "Transcription Services",
    description: "Transcription services to turn any audio or video file into written text for popular industries in all global languages.",
    icon: "/images/s4.svg",
    path: "/book-equipment" 

  },
  {
    title: "MultiLingual DTP Services",
    description: "Our Multilingual Desktop Publishing services ensure localised design layouts, colour schemes and spacing.",
    icon: "/images/s5.svg",
    path: "/localization-service"
  },

  
];

const ServiceCards=forwardRef((props, ref) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // This ensures that the page will scroll to the top on navigation
  };
  return (
   <>
    <Box
    ref={ref}>
    
    <Typography variant="h4" component="h2" gutterBottom sx={{fontWeight:'bold', textAlign:'center', mt:10}}>
    Explore All Our Language Services
    </Typography>
    <Typography
    Typography variant="h6" component="h2" gutterBottom sx={{ textAlign:'center', mt:2, fontFamily:'sans-serif'}}>
    Explore our wide range of tailored language services for diverse global industries,<br></br>ensuring top-notch content delivery. Find your perfect fit today.
    </Typography>
    </Box>
    <Grid container spacing={2} sx={{ p: 2 }}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} lg={4} key={index}> {/* Adjusted for better control over width */}
          <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',  // Ensures that all cards are the same height
            maxWidth: 445,   // Controls the width of the card
            m: 'auto',
            textAlign: 'center',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            p: 2
          }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <img src={service.icon} alt={`${service.title} icon`} style={{ height: 80, marginBottom: 1, marginLeft:100}} />
                
              
              
              <Typography variant="h5" component="h2" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2">
                {service.description}
              </Typography>
            </CardContent>
            <Button type="submit" variant="text" color="primary"  onClick={() => handleNavigate(service.path)}  sx={{ mb: 2 }}>
              View more details &gt;
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  );
});
export default ServiceCards;