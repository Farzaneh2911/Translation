import React from 'react';
import { Box, Typography, Button, Container, Grid, Link, IconButton, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const [language, setLanguage] = React.useState('en');
  const [currency, setCurrency] = React.useState('GBP');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box component="footer" sx={{ bgcolor: '#f6f5f5', color: 'black', p: 3, mt: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select value={language} label="Language" onChange={handleLanguageChange}>
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="es">Español</MenuItem>
                <MenuItem value="fr">Français</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Currency</InputLabel>
              <Select value={currency} label="Currency" onChange={handleCurrencyChange}>
                <MenuItem value="GBP">Pound Sterling (GBP)</MenuItem>
                <MenuItem value="USD">US Dollar (USD)</MenuItem>
                <MenuItem value="EUR">Euro (EUR)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <Box display="flex" alignItems="center">
              <PhoneIcon />
              <Link href="tel:+443308080544" color="inherit" underline="hover" sx={{ ml: 1 }}>
                (+44) 3308080544
              </Link>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <EmailIcon />
              <Link href="mailto:info@translated.com" color="inherit" underline="hover" sx={{ ml: 1 }}>
                info@translated.com
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <IconButton aria-label="facebook" component="a" href="https://facebook.com">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="twitter" component="a" href="https://twitter.com">
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="linkedin" component="a" href="https://linkedin.com">
              <LinkedInIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="caption" sx={{ display: 'block', textAlign: 'center' }}>
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
