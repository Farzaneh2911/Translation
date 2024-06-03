import React from 'react';
import Slider from 'react-slick';
import { Box,Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
 
};

const images = [
  { src: '/images/Frame.png', alt: 'Description for Frame' },
  { src: '/images/Frame1.png', alt: 'Description for Frame1' },
  { src: '/images/Frame2.png', alt: 'Description for Frame2' },
  // Add more images as needed
];

const ImageSlider = () => {
  return (
    <Box sx={{ maxWidth: '70%', flexGrow: 1,marginLeft:40 ,overflow:'visible'}}>
      <Typography variant="h3" gutterBottom component="div" sx={{mt:5,fontWeight:'bold'}}>
          Meet Our Expert Interpreters
        </Typography>
        <Typography variant="h5" gutterBottom component="div" sx={{mt:2}}>
        Real-time interpretation is the real deal, and our professional interpreters have gained
        </Typography>
        <Typography variant="h5" gutterBottom component="div">expertise in relevant industries.</Typography>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
