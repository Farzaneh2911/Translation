import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, CardContent, Button, CardActions, Tooltip, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import TranslateIcon from '@mui/icons-material/Translate';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AssignmentIcon from '@mui/icons-material/AssignmentTurnedIn';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const ServiceCard = ({ title, price, pricePerWord, features, deliveryTime, onOrder }) => {
  const navigate = useNavigate();

  const handleOrder = () => {
    // Save to localStorage
    localStorage.setItem('title', title);
    localStorage.setItem('price', price.toString());
    localStorage.setItem('pricePerWord', pricePerWord.toString());
    localStorage.setItem('deliveryTime', deliveryTime);

    // Navigate to the order summary page with details as URL parameters
    navigate(`/order-summary?title=${encodeURIComponent(title)}&price=${price}&pricePerWord=${pricePerWord}&deliveryTime=${encodeURIComponent(deliveryTime)}`);
  };

  const featureIcon = (featureText) => {
    switch (featureText) {
      case 'Specialized Native Translator': return <TranslateIcon sx={{ color: 'blue' }} />;
      case 'Specialized Reviser': return <EditNoteIcon sx={{ color: 'blue' }} />;
      case 'Quality Control Expert': return <AssignmentIcon sx={{ color: 'blue' }} />;
      case 'Automatic translation': return <AutoModeIcon sx={{ color: 'blue' }} />;
      case 'Light revision': return <PermIdentityIcon sx={{ color: 'blue' }} />;
      default: return <TranslateIcon />;
    }
  };

  return (
    <Card raised sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h2">{title}</Typography>
        {features.map((feature, index) => (
          <Typography key={index} variant="body1">{featureIcon(feature.text)} {feature.text}</Typography>
        ))}
        <Typography variant="body1">Delivery guaranteed by {deliveryTime}</Typography>
        <Typography variant="h6">£{price.toFixed(2)} (about £{pricePerWord.toFixed(2)} / word)</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleOrder} variant="contained" fullWidth sx={{bgcolor:'#FFC729', color:'black', fontWeight:'bold'}}>Order</Button>
        <LightTooltip title={<Typography variant="body2">{features.map(feature => feature.detail).join(", ")}</Typography>} placement="top" arrow enterTouchDelay={0}>
          <Button variant="text" sx={{color:'black'}}>More details</Button>
        </LightTooltip>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
