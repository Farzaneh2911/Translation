import React, { useState } from 'react';
import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';

const Companybelieve = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <Box sx={{
      flexGrow: 1,
      p: 0,
      backgroundImage: 'url("/images/why.png")',
      backgroundSize: { xs: 'cover', lg: '100% 100%' },
      width:{sm:'100%',lg:'110%'} , // Set width to 100% for better responsiveness
      padding: '20px 0',
      mx: 'auto' // Centers the box
    }}>
      <Typography variant="h3" sx={{ mb: 5, textAlign: 'center', fontWeight: 'bold', mt: 5 }}>
        We Practice What We Believe
      </Typography>
      <Typography variant="h6" sx={{ mb: 5, textAlign: 'center', mt: 5 }}>
        Our core values not only support the company’s vision, but also shape our culture, direct our processes and help build happy teams! 
      </Typography>
      <Grid container spacing={2} justifyContent="center"> {/* Adjusted spacing and justification */}
        {[
          { src: "/images/1.png", hoverSrc: "/images/7.png", alt: "Entertainment", title: "Integrity", desc: "We believe in honesty and doing the right thing. And that is a fundamental value we hold on to." },
          { src: "/images/2.png", hoverSrc: "/images/8.png", alt: "Training & Development", title: "Perseverance", desc: "We never give up. If a problem’s too challenging, our response is to try harder and try differently." },
          { src: "/images/3.png", hoverSrc: "/images/9.png", alt: "Media", title: "Passion", desc: "We love what we do and hence, we possess a selfless drive to put our best foot forward – everyday." },
          { src: "/images/4.png", hoverSrc: "/images/10.png", alt: "eLearning", title: "Diligence", desc: "Our clients know us for honouring our commitments and our deadlines at any cost." },
          { src: "/images/5.png", hoverSrc: "/images/11.png", alt: "Gaming", title: "Quality", desc: "We never compromise on quality. All our processes and deliverables meet your quality standards." },
          { src: "/images/6.png", hoverSrc: "/images/12.png", alt: "Gaming", title: "Precision", desc: "We take care of the smallest details and lay great importance on accuracy, always. " }
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index} onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(null)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%', m: 'auto' }}>
              <img src={hoverIndex === index ? item.hoverSrc : item.src}
                alt={item.alt}
                style={{ width: 60, height: 60 }} // Adjusted image size for better visibility
              />
              <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 'bold', fontFamily: 'Capriola' }}>{item.title}</Typography>
              <Typography variant="body1" sx={{ fontSize: 16 }}>{item.desc}</Typography> {/* Adjusted font size for consistency */}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Companybelieve;
