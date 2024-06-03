import React from 'react';
import { Container, Box, Typography, Button, Grid, Paper, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ComplexNeedsSection = () => {
  return (
    <Paper maxWidth="xl" elevation={0} sx={{ backgroundColor: '#f5f5f5', padding: '3rem 0', mt:10 }}>
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={9}>
            <Box display="flex" alignItems="center">
              <Box marginRight={2}>
                {/* This image tag is a placeholder; replace the src with your image's path */}
                <img src="/images/lady.png" alt="Barbara - Senior Account Manager" style={{ borderRadius: '50%', width:'15rem'  }} />
              </Box>
              <div>
                <Typography variant="h5" component="h3" gutterBottom>
                  More complex needs?
                </Typography>
                <Typography variant="body1">
                  We will help you get a quote for complex documents, PDFs, websites, software, and more.
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Barbara - Senior Account Manager
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <PhoneIcon />
              <Link href="tel:+443308080544" underline="none" variant="body1" marginLeft={1}>
                (+44) 3308080544
              </Link>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" marginTop={2}>
              <EmailIcon />
              <Button variant="text" href="mailto:contact@example.com" startIcon={<EmailIcon />}>
                Contact us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
    
  );
};

export default ComplexNeedsSection;
