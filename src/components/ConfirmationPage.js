import React, { useState, useEffect } from 'react';
import {
  Box, Grid, TextField, Typography, Button, Checkbox, FormControlLabel,
  InputAdornment, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Divider
} from '@mui/material';
import {
  CurrencyPound as CurrencyPoundIcon, DateRange as DateRangeIcon, Translate as TranslateIcon,
  AccountCircle as AccountCircleIcon, Phone as PhoneIcon, Home as HomeIcon,
  Email as EmailIcon, LocationCity as CityIcon, Place as PlaceIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useNavigate, Link } from 'react-router-dom';
import { getFirestore, collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { app } from '../firebaseInit';
import { getAuth } from 'firebase/auth';

const db = getFirestore(app);
const auth = getAuth(app);

const JumpIcon = styled(EmailIcon)(({ theme }) => ({
  color: 'blue',
  transition: 'transform 0.2s',
  '&:hover': {
    animation: 'jump 0.5s infinite',
  },
  '@keyframes jump': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },
}));

const JumpIcon1 = styled(AccountCircleIcon)(({ theme }) => ({
  color: 'blue',
  transition: 'transform 0.2s',
  '&:hover': {
    animation: 'jump 0.5s infinite',
  },
  '@keyframes jump': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },
}));

const JumpIcon2 = styled(PhoneIcon)(({ theme }) => ({
  color: 'green',
  transition: 'transform 0.2s',
  '&:hover': {
    animation: 'jump 0.5s infinite',
  },
  '@keyframes jump': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },
}));

const JumpIcon3 = styled(HomeIcon)(({ theme }) => ({
  color: 'brown',
  transition: 'transform 0.2s',
  '&:hover': {
    animation: 'jump 0.5s infinite',
  },
  '@keyframes jump': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },
}));

const JumpIcon4 = styled(CityIcon)(({ theme }) => ({
  color: 'darkgray',
  transition: 'transform 0.2s',
  '&:hover': {
    animation: 'jump 0.5s infinite',
  },
  '@keyframes jump': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },
}));

const JumpIcon5 = styled(PlaceIcon)(({ theme }) => ({
  color: 'red',
  transition: 'transform 0.2s',
  '&:hover': {
    animation: 'jump 0.5s infinite',
  },
  '@keyframes jump': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },
}));
const JumpIcon6 = styled(PlaceIcon)(({ theme }) => ({
  color: 'red',
  transition: 'transform 0.2s',
  '&:hover': {
    animation: 'jump 0.5s infinite',
  },
  '@keyframes jump': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  padding: theme.spacing(2),
  boxShadow: theme.shadows[3],
  height: '90%',
  fontSize: '2.2rem',
}));

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    fontWeight: 'bold',
  },
  '& label': {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  '& input': {
    fontSize: '1.1rem',
  },
});

const ImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '350px',
  backgroundImage: 'url("/images/Confirmation.webp")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '4px',
}));
const SignInLink = styled(Link)(({ theme }) => ({
  color: 'blue',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  transition: 'color 0.3s, transform 0.3s',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'scale(1.05)',
  },
}));

const ConfirmationPage = () => {
  const [formData, setFormData] = useState({
    email: localStorage.getItem('email') || '',
    firstName: '',
    lastName: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    zip: '',
    agreeToPrivacy: false,
  });

  const [orderDetails, setOrderDetails] = useState({
    title: '',
    price: 0,
    pricePerWord: 0,
    deliveryDate: '',
  });

  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountMessage, setDiscountMessage] = useState('');
  const [NameError, setNameError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const title = localStorage.getItem("title") || "Translation Service";
    const price = parseFloat(localStorage.getItem("price")) || 0;
    const pricePerWord = parseFloat(localStorage.getItem("pricePerWord")) || 0;
    const deliveryDate = localStorage.getItem("deliveryDate") || "No delivery date set";

    setOrderDetails({ title, price, pricePerWord, deliveryDate });
  }, []);

  const handleNameBlur = (event) => {
    if (event.target.value === "") {
      setNameError("Please enter your name.");
    } else {
      setNameError("");
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleApplyDiscount = () => {
    if (discountCode === 'Studentdiscount20' && formData.email.includes('.ac.uk')) {
      setDiscountApplied(true);
      const discountedPrice = orderDetails.price * 0.8;
      setOrderDetails({ ...orderDetails, price: discountedPrice });
      setDiscountMessage('Studentdiscount20 has been applied!');
    } else {
      setDiscountMessage('Enter a valid promo code.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requiredFieldsFilled = formData.email && formData.firstName && formData.lastName && formData.phone &&
      formData.address1 && formData.city && formData.zip && formData.agreeToPrivacy;
    if (!requiredFieldsFilled) {
      alert("Please fill all fields and agree to the Privacy Policy.");
      return;
    }
    localStorage.setItem('firstName', formData.firstName);
    localStorage.setItem('lastName', formData.lastName);
    localStorage.setItem('email', formData.email);
    localStorage.setItem('phone', formData.phone);
    localStorage.setItem('address1', formData.address1);
    localStorage.setItem('address2', formData.address2);
    localStorage.setItem('city', formData.city);
    localStorage.setItem('zip', formData.zip);
    localStorage.setItem('agreeToPrivacy', formData.agreeToPrivacy);
    try {
      await addDoc(collection(db, "Billing"), { ...formData, orderDetails });
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        zip: '',
        agreeToPrivacy: false,
      });
      navigate('/Payment');
    } catch (error) {
      alert("Error sending message: ", error.message);
    }
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, bgcolor:'#f5f5f5', width:'50%', border:'1px',borderColor:'red' }}>
        <JumpIcon1 sx={{ mr: 1 }} />
        <Typography variant="body1" sx={{mt:1}}>
          Do you have an account? <SignInLink to="/login">Sign in</SignInLink> and save time.
        </Typography>
      </Box>
      <Grid container spacing={1} sx={{ height: '100%' }}>
        <Grid item xs={12} md={6} sx={{ mt: 4 }}>
          <Paper elevation={3} sx={{ padding: 3, height: '90%' }}>
            <form onSubmit={handleSubmit} style={{ height: '100%' }}>
              <Grid container spacing={2} sx={{ height: '100%' }}>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    label="Email address"
                    type="email"
                    name="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <JumpIcon />
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                </Grid>
                <Divider />
                <Grid item xs={12}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 5 }}>Billing Information</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    label="First Name"
                    name="firstName"
                    fullWidth
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleNameBlur}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <JumpIcon1 />
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                  {NameError && <div className="error-message">{NameError}</div>}
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    label="Last Name"
                    name="lastName"
                    fullWidth
                    value={formData.lastName}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <JumpIcon2 />
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    label="Telephone"
                    name="phone"
                    fullWidth
                    value={formData.phone}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <JumpIcon3 />
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    label="Address (line 1)"
                    name="address1"
                    fullWidth
                    value={formData.address1}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <JumpIcon4 />
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    label="City"
                    name="city"
                    fullWidth
                    value={formData.city}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <JumpIcon5 />
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    label="ZIP Code"
                    name="zip"
                    fullWidth
                    value={formData.zip}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <JumpIcon6 />
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.agreeToPrivacy}
                        onChange={handleChange}
                        name="agreeToPrivacy"
                        color="primary"
                      />
                    }
                    label="I have read and agree to the Privacy Policy and General Sales Conditions"
                    sx={{ fontSize: '1.1rem' }}
                  />
                </Grid>
                <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button type="submit" variant="contained" color="primary" fullWidth sx={{ bgcolor: '#FFC729', color: 'black', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    Submit Order
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: 4 }}>
          <StyledBox>
            <List sx={{ width: '50%' }}>
              {formData.email.includes('.ac.uk') && (
                <>
                  <ListItem sx={{ backgroundColor: '#0cd80c62' }}>
                    <ListItemText primary="Congrats! You're eligible for Student discount." sx={{}} />
                  </ListItem>
                  <ListItem sx={{ backgroundColor: '#0cd80c62', mt: 2 }}>
                    <ListItemText primary="Use code Studentdiscount20 for 20% discount." sx={{}} />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="Promocode"
                      variant="outlined"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      fullWidth
                      sx={{ mb: 2, fontSize: '1.1rem' }}
                    />
                    <Button variant="contained" color="primary" onClick={handleApplyDiscount} sx={{ ml: 2, fontSize: '1.1rem' }}>
                      Apply
                    </Button>
                  </ListItem>
                  {discountMessage && (
                    <ListItem>
                      <Typography color={discountMessage.includes('applied') ? 'green' : 'red'} sx={{ fontSize: '1.1rem' }}>
                        {discountMessage}
                      </Typography>
                    </ListItem>
                  )}
                </>
              )}
              <ListItem>
                <ListItemIcon><TranslateIcon sx={{ color: 'deepSkyBlue', fontSize: '2rem' }} /></ListItemIcon>
                <ListItemText primary="Service" secondary={orderDetails.title} sx={{}} />
              </ListItem>
              <ListItem>
                <ListItemIcon><CurrencyPoundIcon sx={{ color: 'gold', fontSize: '2rem' }} /></ListItemIcon>
                <ListItemText primary="Price" secondary={`£${orderDetails.price.toFixed(2)} (about £${orderDetails.pricePerWord.toFixed(2)}/ word)`} sx={{}} />
              </ListItem>
              <ListItem>
                <ListItemIcon><DateRangeIcon sx={{ color: 'tomato', fontSize: '2rem' }} /></ListItemIcon>
                <ListItemText primary="Delivery date" secondary={orderDetails.deliveryDate} sx={{}} />
              </ListItem>
              <Divider />
              <ListItem>
                <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>Order Total</Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>£{orderDetails.price.toFixed(2)}</Typography>
              </ListItem>
              <Typography sx={{ color: 'gray', ml: 2, fontSize: '1.1rem' }}>The price does not include value added tax (VAT). VAT shall apply to private customers residing in the European Union, to EU-based companies which do not have a VAT number, as well as to Italian private customers and companies.</Typography>
            </List>
            <ImageBox />
          </StyledBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ConfirmationPage;
