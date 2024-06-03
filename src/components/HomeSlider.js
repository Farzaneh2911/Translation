import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, useTheme } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { src: '/images/certified.png', alt: 'Logo 1' },
  { src: '/images/certified2.png', alt: 'Logo 2' },
  { src: '/images/certified3.png', alt: 'Logo 3' },
  { src: '/images/certified4.png', alt: 'Logo 4' },
  { src: '/images/certified.png', alt: 'Logo 5' },
  { src: '/images/certified2.png', alt: 'Logo 6' }
];

const LogoSlider = () => {
  const theme = useTheme();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Box sx={{
      width: '100vw',
      padding: '20px 0',
      backgroundColor: 'white',
      overflowX: 'hidden',
      backgroundImage: 'url("/images/quality1.png")',
      backgroundSize: { xs: 'cover', lg: '100% 100%' },
      backgroundPosition: 'center',
      height: { xs: 400, sm: 450, md: 500, lg: 550 },// Adjust the height as needed for your design
      position:'relative', // Use relative for layout stability
      mt: 10,
      
     
      alignItems: 'center',
      justifyContent: 'center'
      }}>
      <Typography variant="h4" sx={{ mt: { xs: 10, sm: 20, md: 30,lg:30 }, textAlign: 'center', fontWeight: 'bold', color: 'black' ,fontFamily:'sans-serif'}}>
       QUALITY IS OUR PRIORITY
      </Typography>
      <Typography variant="h5" sx={{  textAlign: 'center', color: 'black', fontFamily:'sans-serif' ,px: { xs: 2, sm: 3, md: 4 },}}>
      At PMC Translation, we are on a mission to provide the highest quality service possible.<br></br>We are at the forefront of effective communication and quality of translation in the industry and are committed to the continuous advancement of all aspects of our business operations.
      </Typography>
      <Slider {...settings} >
        {logos.map((logo, index) => (
          <Box key={index} sx={{ padding: '2px', textAlign: 'center' }}>
            <img src={logo.src} alt={logo.alt} style={{ width: '60%', height: '30%' }} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default LogoSlider;