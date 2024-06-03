import React from 'react';
import { Grid, Card, CardContent, Typography, Button, CardMedia } from '@mui/material';
import { Box } from '@mui/system';

const services = [
  {
    title: "Zoom Interpretation Services",
    description: "Zoom enables Zoom language interpretation that serves as a one-stop solution for your webinars, on-site or hybrid meetings and eLearning modules with real-time interpretation.",
    icon: "/images/zoom.png",
    link: "/zoom-services"
  },
  {
    title: "Cisco WebEx Interpretation Services",
    description: "WebEx is a remote simultaneous interpretation platform that enables language interpretation feature that provides a more inclusive real-time collaboration and communication experience for all attendees, hosts and interpreters.",
    icon: "/images/webex.png",
    link: "/webex-services"
  },
  {
    title: "Microsoft Teams Interpretation Services",
    description: "Microsoft Teams allows a live interpretation feature for all Microsoft Teams meetings. Remote simultaneous interpretation allows more inclusive meetings, where participants who may not speak the same language can fully collaborate.",
    icon: "/images/Microsoft.png",
    link: "/teams-services"
  }
];

const InterpretationPlatform = () => {
  return (
   <>
    <Box>
        <Typography gutterBottom variant="h3" component="div" sx={{textAlign:'center', fontWeight:'bold', mt:10, fontFamily:'Capriola fonts'}}>
          Platforms Through Which We Deliver<br></br>Global Interpretation Services
        </Typography>
        <Typography gutterBottom variant="h4" component="div" sx={{textAlign:'center',fontFamily:'Capriola fonts'}}>
        We deliver interpretation services with the most extensive remote interpretation platforms, which<br></br>can be used for live, virtual or hybrid events.
        </Typography>

    </Box>
    <Grid container spacing={2} sx={{ maxWidth: 1200, margin: 'auto', padding: 4 }}>
      {/* Zoom service on its own row */}
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ width: '120%', maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: 200, height: 70 }} // Reduced size
            image={services[0].icon}
            alt={services[0].title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {services[0].title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {services[0].description}
            </Typography>
          </CardContent>
         
        </Card>
      </Grid>

      {/* WebEx and Microsoft Teams side by side on the next row with no gap */}
      <Grid item xs={6} sx={{ padding: 1, width:60 }}>
        <Card sx={{ width: '80%',maxWidth: 400, height:'90%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CardMedia
            component="img"
            sx={{ width: 200, height: 100 }}
            image={services[1].icon}
            alt={services[1].title}
          />
          <CardContent sx={{width: '80%'}}>
            <Typography gutterBottom variant="h5" component="div">
              {services[1].title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {services[1].description}
            </Typography>
          </CardContent>
         
        </Card>
      </Grid>
      <Grid item xs={6} sx={{ padding: 1 }}>
        <Card sx={{ width: '80%', display: 'flex', flexDirection: 'column',height:'90%', alignItems: 'center' }}>
          <CardMedia
            component="img"
            sx={{ width: 100, height: 80 }}
            image={services[2].icon}
            alt={services[2].title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {services[2].title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {services[2].description}
            </Typography>
          </CardContent>
          
        </Card>
      </Grid>
    </Grid>
    </>
  );
};

export default InterpretationPlatform;
