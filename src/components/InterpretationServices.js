import React, { useState, useEffect, useRef,forwardRef } from 'react';
import { Box, Container, Typography, Grid, Paper, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EastIcon from '@mui/icons-material/East';
import LogoSlider from './Logoslider';
import InterpretersSlider from './InterpreterSlider';
import StatsHighlight from './StatesHighlight';
import { Link } from 'react-router-dom';
const styles = {
    section: {
      padding: '40px 0',
    },
    paper: {
      padding: '20px',
      margin: 'auto',
      maxWidth: '100%',
      flexGrow: 1,
      position: 'relative',
      height:'100%',
      overflow: 'hidden',
      transition: 'transform .3s ease-in-out', // Apply transform transition to the paper
      '&:hover': {
        transform: 'scale(1.05)', // Scaling effect on hover
      },
    },
    imageBox: {
        position: 'relative',
        width: '100%',
        height: 200, // Set a fixed height or use a percentage
        '& img': {
          width: '100%',
          height: '100%', // Make sure the image covers the full height
          objectFit: 'cover', // Adjust this as needed to maintain aspect ratio
          transition: 'transform .3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        },
      },
      
    arrowButton: {
      position: 'absolute',
      bottom: 3,
      right: 20,
      color: 'black',
      opacity: 1, // Arrow is always visible
      transition: 'transform .3s ease-in-out',
       // Smooth transition for moving
    },
  };
  
  

const InterpretationServices = forwardRef((props, ref)=> {
  const [isVisible, setIsVisible] = useState([false, false]); // Assuming there are only two services
  const refs = useRef([React.createRef(), React.createRef()]);

  useEffect(() => {
    const currentRefs = refs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => {
              const newVisibles = [...prev];
              newVisibles[index] = true;
              return newVisibles;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    currentRefs.forEach((ref, index) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);
  function serviceDescriptions(service) {
    switch(service) {
      case 'Telephone & video Remote Interpreting':
        return "Remote interpretation allows participants to connect with interpreters via video or audio from anywhere in the world, reducing travel costs and setup time.";
      case 'Face-to-Face Interpreting':
        return "In-person interpretation provides the highest quality of service for meetings and events where nuanced communication is crucial.";
      case 'Conference Interpreting':
        return "Provide interpreting to your delegates and facilitate an industry-leading, multi-national event." 
      case 'Telehealth Interpreting':
        return "Provide quality care with instant access to phone and video interpreters from your existing platforms and EHR Systems";
      default:
        return "Service not specified.";
    }
  }
  

  return (
   <>
    <Container maxWidth="lg" sx={styles.section} ref={ref}>
      <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
        Interpretation Services
      </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }}>
  {['Telephone & video Remote Interpreting', 'Face-to-Face Interpreting', 'Conference Interpreting', 'Telehealth Interpreting'].map((service, index) => (
    <Grid item xs={12} sm={6} md={3} key={index}> 
      <Paper
        ref={refs.current[index]}
        sx={{
          ...styles.paper,
          '&:hover .MuiIconButton-root': {
            transform: 'translateX(20px)', // Move the arrow to the right
          },
        }}
        className={isVisible[index] ? 'visible' : ''}
      >
        <Box sx={styles.imageBox}>
          <img src={`/images/service${index + 1}.png`} alt={service} />
        </Box>
        <Typography variant="h6" component="h3" gutterBottom sx={{fontWeight:'bold',mt:5}}>
          {service}
        </Typography>
        <Typography>
          {serviceDescriptions(service)}
        </Typography>
        <Link to="/Scheduler" style={{ textDecoration: 'none' }}>
         <IconButton sx={{ ...styles.arrowButton, zIndex: 10 }}>
           <EastIcon sx={{fontSize: 40}} />
         </IconButton>
        </Link> 
      </Paper>
    </Grid>
  ))}
</Grid>

    </Container>
    <StatsHighlight />
    <InterpretersSlider/>
  </>
  );
});

export default InterpretationServices;
