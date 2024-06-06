import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Paper, useTheme } from '@mui/material';

const reviews = [
  {
    score: 4.5,
    text: "I find them to be very to the point - get the job done quickly, at reasonable costs and schedules, very good quality, extremely good communications.",
    author: "Content & Localization Manager, Gambling Company",
  },
  {
    score: 5.0,
    text: "We enjoy working with them.",
    author: "Head of Success Management, Content Marketing & SEO Agency",
  },
  {
    score: 5.0,
    text: "The company is prominent in their exceptional attitude to translation quality.",
    author: "Former Head of Content, Financial Services Company",
  },
  {
    score: 5.0,
    text: "Pangea Localization Services works proactively to ramp up our processes and deliver our...",
    author: "Retarus GmbH",
  }
];

const ReviewSlider = () => {
  const theme = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2, slidesToScroll: 2 }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  // Determine the minimum height dynamically or set a fixed one
  const reviewBoxHeight = "200px"; // Adjust based on your content or dynamically calculate

  return (
    <Box sx={{
      backgroundColor: 'white',
      textAlign: 'center',
      alignContent:'center',
      mt: 5,
      
      width: '100vw',
      padding: '20px 0',
      overflowX: 'hidden',
      backgroundImage: 'url("/images/why.png")',
      backgroundSize: { xs: 'cover', lg: '80% 100%' }
    }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mt: 5 }}>
        Our Satisfied Clients Speak to Our Success
      </Typography>
      
      <Box sx={{ padding: 1, backgroundColor: 'white', marginLeft: { xs: 0, sm: 2,md:0,lg:0 } }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 3, mb: 3, ml: { xs: 0, sm: 10 } }}>
          Voice Over Services Reviews   4.9 ★★★★★ 7 Reviews
        </Typography>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <Box key={index} sx={{ padding: 2, backgroundColor: 'whitesmoke' }}>
              <Paper elevation={3} sx={{ padding: 2, minHeight: reviewBoxHeight }}>
                <Typography variant="h6" color="primary">{review.score} ★★★★★</Typography>
                <Typography variant="body2" sx={{ margin: '10px 0' }}>{review.text}</Typography>
                <Typography variant="caption">{review.author}</Typography>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ReviewSlider;
