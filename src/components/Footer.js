import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';

const serviceCategories = {
  Translation: [],
  Interpretation: [],
  Localization: [],
  Audio: []
};

// Mapping category to its corresponding link
const categoryLinks = {
  Translation: '/book-equipment',
  Interpretation: '/Interpretation',
  Localization: '/localization-service',
  Audio: '/Voice-service'
};

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} md={3}>
            <img src="/images/logo.svg" alt="Company Logo" style={{ width: 120, height: 91, marginBottom: 16 }} />
            <Typography variant="body2" color="textPrimary">
              The language service provider that's making the world talk!
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap' }}>
              <img src="/images/iso.svg" alt="ISO" style={{ width: 50, height: 50, marginRight: 8, marginBottom: 8 }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" color="textPrimary" gutterBottom sx={{ fontWeight: 'bold' }}>Services</Typography>
                {Object.entries(serviceCategories).map(([category, items]) => (
                  <Box key={category} sx={{ mb: 2 }}>
                    <Link href={categoryLinks[category]} variant="subtitle1" sx={{  display: 'block', marginBottom: 1, color: 'black', textDecoration: 'none','&:hover': { color: '#FFC729'  }}}>
                      {category}
                    </Link>
                    {items.map((item) => (
                      <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} variant="body2" sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: '#FFC729' } }} display="block" key={item}>
                        {item}
                      </Link>
                    ))}
                  </Box>
                ))}
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" color="textPrimary" gutterBottom sx={{ fontWeight: 'bold' }}>Resources</Typography>
                <Link href="/" variant="body2" sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: '#FFC729' } }} display="block">Translation Agency</Link>
                <Link href="/" variant="body2" sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: '#FFC729' } }} display="block">Supported Files</Link>
                <Link href="/" variant="body2" sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: '#FFC729' } }} display="block">Supported Languages</Link>
                <Link href="/" variant="body2" sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: '#FFC729' } }} display="block">Translation Pricing</Link>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" color="textPrimary" gutterBottom sx={{ fontWeight: 'bold' }}>Support</Typography>
                <Link href="/contactus" variant="body2" sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: '#FFC729' } }} display="block">Help Centre</Link>
                <Link href="/contactus" variant="body2" sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: '#FFC729' } }} display="block">Contact Us</Link>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" color="textPrimary" gutterBottom sx={{ fontWeight: 'bold' }}>Company</Typography>
                <Link href="/company" variant="body2" sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: '#FFC729' } }} display="block">About Us</Link>
                <Link href="/company" variant="body2" sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: '#FFC729' } }} display="block">Our Company</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom sx={{ fontWeight: 'bold' }}>Social Media</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener" sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: '#FFC729' } }}>
                <img src="/images/linkedin.png" alt="LinkedIn" style={{ width: 30, height: 30 }} />
              </Link>
              <Link href="https://www.twitter.com" target="_blank" rel="noopener" sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: '#FFC729' } }}>
                <img src="/images/Twitter.jpeg" alt="Twitter" style={{ width: 30, height: 30 }} />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" rel="noopener" sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: '#FFC729' } }}>
                <img src="/images/Instagram.png" alt="Instagram" style={{ width: 30, height: 30 }} />
              </Link>
              <Link href="https://www.youtube.com" target="_blank" rel="noopener" sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: '#FFC729' } }}>
                <img src="/images/youtube.png" alt="YouTube" style={{ width: 30, height: 30 }} />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="body2" color="textPrimary">Translate By Humans ©</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="/" variant="body2" sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: '#FFC729' } }}>Terms of Use</Link>
            <Link href="/" variant="body2" sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: '#FFC729' } }}>Privacy Policy</Link>
            <Link href="/" variant="body2" sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: '#FFC729' } }}>Cookies</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
