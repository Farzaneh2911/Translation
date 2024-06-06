import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: '/images/Frame.png', alt: 'Description for Frame' },
  { src: '/images/Frame1.png', alt: 'Description for Frame1' },
  { src: '/images/Frame2.png', alt: 'Description for Frame2' },
  // Add more images as needed
];
const ImageSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

const styles = {
    container: {
      maxWidth: isMobile ? '90%' : isTablet ? '80%' : '70%',
      flexGrow: 1,
      margin: 'auto',
      overflow: 'visible',
      padding: isMobile ? '0 10px' : isTablet ? '0 20px' : '0 40px',
      textAlign: 'center',
    },
    title: {
      mt: 5,
      fontWeight: 'bold',
      fontSize: isMobile ? '1.5rem' : '2rem',
    },
    subtitle: {
      mt: 2,
      fontSize: isMobile ? '1rem' : '1.25rem',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h3" component="div" sx={styles.title}>
        Meet Our Expert Interpreters
      </Typography>
      <Typography variant="h5" component="div" sx={styles.subtitle}>
        Real-time interpretation is the real deal, and our professional interpreters have gained
      </Typography>
      <Typography variant="h5" component="div" sx={styles.subtitle}>
        expertise in relevant industries.
      </Typography>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} style={styles.image} />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
