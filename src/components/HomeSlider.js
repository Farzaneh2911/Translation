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
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: theme.breakpoints.values.xs,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Box sx={{
      width: '100%',
      padding: '20px 0',
      backgroundColor: 'white',
      overflowX: 'hidden',
      backgroundImage: 'url("/images/quality1.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: { xs: 400, sm: 450, md: 650, lg: 650 }, // Adjust the height as needed for your design
      position: 'relative', // Use relative for layout stability
      mt: 10,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex', // Flex container to center content
      flexDirection: 'column' // Column layout for centering
    }}>
      <Typography variant="h4" sx={{ mt: { xs: 2, sm: 3, md: 4, lg: 5 }, textAlign: 'center', fontWeight: 'bold', color: 'black', fontFamily: 'sans-serif' }}>
        QUALITY IS OUR PRIORITY
      </Typography>
      <Typography variant="h5" sx={{ mt: 2, textAlign: 'center', color: 'black', fontFamily: 'sans-serif', px: { xs: 2, sm: 3, md: 4 } }}>
        At Human Translation, we are on a mission to provide the highest quality service possible.<br />We are at the forefront of effective communication and quality of translation in the industry and are committed to the continuous advancement of all aspects of our business operations.
      </Typography>
      <Box sx={{ width: '100%', mt: 4 }}> {/* Ensure slider width is 100% */}
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <Box key={index} sx={{ padding: '2px', textAlign: 'center' }}>
              <img src={logo.src} alt={logo.alt} style={{ width: '60%', height: 'auto', margin: '0 auto' }} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default LogoSlider;
