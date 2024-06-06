import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Button, Container, IconButton } from '@mui/material';
import { Translate as TranslateIcon, DateRange as DateRangeIcon, CurrencyPound as CurrencyPoundIcon, Edit as EditIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../firebaseInit'; // Ensure Firebase is initialized

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const OrderSummary = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [price, setPrice] = useState(0);
  const [pricePerWord, setPricePerWord] = useState(0);
  const [title, setTitle] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const auth = getAuth(app);
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const titleParam = query.get('title');
  const priceParam = parseFloat(query.get('price'));
  const pricePerWordParam = parseFloat(query.get('pricePerWord'));
  const deliveryDays = parseInt(query.get('deliveryTime'));

  useEffect(() => {
    setTitle(titleParam || 'Unknown Title');
    setPrice(priceParam || 0);
    setPricePerWord(pricePerWordParam || 0);

    if (deliveryDays) {
      const now = new Date();
      now.setDate(now.getDate() + deliveryDays);
      const formattedDeliveryDate = now.toLocaleDateString("en-GB");
      setDeliveryDate(formattedDeliveryDate);
      localStorage.setItem('deliveryDate', formattedDeliveryDate); // Store delivery date in local storage
    } else {
      setDeliveryDate('No delivery date set');
    }

    const email = localStorage.getItem('email');
    if (email) {
      checkEmailRegistered(email).then(setIsRegistered);
    }
  }, [titleParam, priceParam, pricePerWordParam, deliveryDays]);

  const checkEmailRegistered = async (email) => {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      return signInMethods.length > 0;
    } catch (error) {
      console.error("Error checking email registration: ", error);
      return false;
    }
  };

  const handleEdit = () => {
    navigate('/Translation-price', {
      state: {
        title: titleParam,
        price: priceParam,
        pricePerWord: pricePerWordParam,
        deliveryDays,
      },
    });
    
  };

  const handleContinue = () => {
    navigate(`/confirm-order?isRegistered=${isRegistered}`);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 5 }}>
      <Grid container spacing={0} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Grid item xs={12} md={6}>
          <Card raised sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h5" component="h2" gutterBottom>
                  Order Summary for {title}
                </Typography>
                <IconButton color="primary" onClick={handleEdit} sx={{ ml: 2 }}>
                  <EditIcon />
                  <Typography>Edit</Typography>
                </IconButton>
              </Box>
              <List>
                <StyledListItem>
                  <ListItemIcon>
                    <TranslateIcon sx={{ color: 'deepSkyBlue' }} />
                  </ListItemIcon>
                  <ListItemText primary="Service" secondary={title} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <CurrencyPoundIcon sx={{ color: 'gold' }} />
                  </ListItemIcon>
                  <ListItemText primary="Price" secondary={`£${price.toFixed(2)} (about £${pricePerWord.toFixed(2)}/ word)`} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <DateRangeIcon sx={{ color: 'tomato' }} />
                  </ListItemIcon>
                  <ListItemText primary="Delivery date" secondary={deliveryDate} />
                </StyledListItem>
              </List>
              <Box sx={{ mt: 2, mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Order Total: £{price.toFixed(2)}
                </Typography>
                <Typography sx={{ color: 'GrayText' }}>
                  The price does not include value added tax (VAT). VAT shall apply to private customers residing in the European Union, to EU-based companies which do not have a VAT number, as well as to Italian private customers and companies.
                </Typography>
              </Box>
              <Button variant="contained" color="primary" fullWidth onClick={handleContinue} sx={{ width: 150, borderRadius: 20, bgcolor: '#FFC729', color: 'black', fontWeight: 'bold' }}>
                Continue
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src="/images/service.webp" alt="Descriptive Alt Text" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OrderSummary;
