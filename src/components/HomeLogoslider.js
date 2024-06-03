import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, useTheme } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { src: '/images/logo1.png', alt: 'Logo 1' },
  { src: '/images/logo2.svg', alt: 'Logo 2' },
  { src: '/images/logo3.svg', alt: 'Logo 3' },
  { src: '/images/logo4.svg', alt: 'Logo 4' },
  { src: '/images/logo5.png', alt: 'Logo 5' },
  { src: '/images/logo6.png', alt: 'Logo 6' }
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
    <Box sx={{ width: '100vw', padding: '20px 0', backgroundColor: 'white', overflowX: 'hidden', backgroundImage:'url("/images/Homeslider.png")', backgroundSize: { xs: 'cover', lg: '100% 100%' }, mt:10 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' , fontWeight:'bold',color:'lightgray'}}>
       We're Trusted By Top Businesses Worldwide
      </Typography>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <Box key={index} sx={{ padding: '10px', textAlign: 'center' }}>
            <img src={logo.src} alt={logo.alt} style={{ width: '50%', height: '20%' }} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default LogoSlider;
