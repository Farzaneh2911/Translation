import React from 'react';
import { Container, Grid, Typography, Paper, Box, useTheme } from '@mui/material';
import TrophyIcon from '@mui/icons-material/EmojiEvents';
import TimeIcon from '@mui/icons-material/AccessTime';
import PaymentIcon from '@mui/icons-material/Payment';
import { styled } from '@mui/material/styles';

const FeaturePaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  borderRadius: theme.shape.borderRadius * 4, // More pronounced rounded corners
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10]
  }
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  border: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(2),
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  }
}));

const WhyChooseUsSection = () => {
  const theme = useTheme();
  const features = [
    {
      icon: <TrophyIcon style={{ color: theme.palette.success.main }} />,
      title: 'Guaranteed Quality',
      description: 'We support the world’s best translators with advanced quality assurance processes. And that’s not all: we provide a free comprehensive translation review if you happen to be unsatisfied or any doubt. ',
    },
    {
      icon: <TimeIcon style={{ color: theme.palette.info.main }} />,
      title: 'On-Time Delivery',
      description: 'We offer the best performance levels in the industry, with an optimized workflow that guarantees over 95% of deliveries on time. Plus, in the unlikely event we miss a deadline, we will refund the translation up to its full cost.',
    },
    {
      icon: <PaymentIcon style={{ color: theme.palette.warning.main }} />,
      title: 'Pay After Delivery',
      description: 'We genuinely trust our clients, which is why we have created the Pay After Delivery model. With Pay After Delivery, you can pay within five days of the translation’s delivery via credit card, bank transfer or Paypal.',
    },
  ];

  return (
    <Container maxWidth="xl" component="section" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }} >
        Why Choose Us
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <FeaturePaper elevation={0}>
              <FeatureIcon sx={{ bgcolor: feature.icon.props.style.color + '10' }}> {/* Lighter background color */}
                {feature.icon}
              </FeatureIcon>
              <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                {feature.title}
              </Typography>
              <Typography variant="body1" align="center">
                {feature.description}
              </Typography>
            </FeaturePaper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyChooseUsSection;
