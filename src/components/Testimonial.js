import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Container} from '@mui/system';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const testimonies = [
  {
    quote: "The Translated team has always been professional and helpful. They are quick to respond to requests for assistance and they respect the agreed deadlines.",
    name: "Micah Nisley",
    position: "Franchise Owner",
     // Put the correct path to your image
    companyLogo: "/images/th (1).jpeg", // Put the correct path to the company logo
  },
  {
    quote: "The Translated team is efficient from both a sales and on operations perspective. They are especially diligent when it comes to delivery deadlines, and they quickly take action where necessary to resolve any issues after delivery.",
    name: "David Scalvi ",
    position: "Docebo",
     // Put the correct path to your image
    companyLogo: "/images/th (2).jpeg", // Put the correct path to the company logo
  },
  {
    quote: "Over the last few years, I've used Translation for translations from Persian to english. Their service is normally quick and efficient, with a transparent pricing structure. ",
    name: "Ahmadreza Amini ",
    position: "PMC",
     // Put the correct path to your image
    companyLogo: "/images/th (3).jpeg", // Put the correct path to the company logo
  },
  // ...add more testimonial objects
];

export default function TestimonialStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = testimonies.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const sideImagePath = "/images/clients.jpeg";
  return (
    <Container maxWidth="xl" component="section" sx={{ py: 8,backgroundImage: 'url("/images/why.png")',width: '100vw',
    backgroundSize: { xs: 'cover', lg: '100% 100%' } }}>
       <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        What our clients have to say
      </Typography> 
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {/* Add your image here */}
          <Box
            component="img"
            src={sideImagePath}
            sx={{ width: '100%', height: '100%' }}
            alt="Side Image"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
                bgcolor: 'background.default',
              }}
            >
              <Typography>{testimonies[activeStep].name}, {testimonies[activeStep].position}</Typography>
            </Paper>
            <Box sx={{ p: 2, textAlign: 'center', flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontStyle: 'italic' }}>
                “{testimonies[activeStep].quote}”
              </Typography>
              <Avatar src={testimonies[activeStep].companyLogo} sx={{ height: 100, width: 100, mt: 1, ml: 'auto', mr: 'auto' }} />
            </Box>
            <MobileStepper
              variant="dots"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              sx={{ justifyContent: 'center' }}
              nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </Button>
              }
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};