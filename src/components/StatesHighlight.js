import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const StatsHighlight = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const styles = {
    statsContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#012161', // Adjust the color to match your design
      color: 'white',
      padding: isMobile ? '10px 0' : '20px 0', // Adjust padding for mobile
      margin: 0, // Remove any default margins
      width: '100vw',
      minheight: isMobile ? '25vw' : '15vw', // Adjust height for mobile
      position: 'relative',
      overflow: 'hidden',
    },
    numberTypography: {
      marginBottom: '10px', // Space between the number and the line
      paddingBottom: '5px', // Padding below the number before the line
      borderBottom: '3px solid #fa9b0e',
      display: 'inline-block',
      width: isMobile ? '100%' : '50%', // Solid line under the number
    },
    statBox: {
      flex: 1, // Ensures that each stat box takes equal width
      textAlign: 'center', // Center the text inside each box
      padding: isMobile ? '10px' : '0', // Add padding for mobile
    },
  };

  return (
    <div style={styles.statsContainer}>
      <Box sx={styles.statBox}>
        <Typography variant="h2" component="span" sx={{ color: '#fa9b0e', fontWeight: 'bold' }} style={styles.numberTypography}>5.1M</Typography>
        <Typography variant="body1">UK residents who speak a language other than English as their main language</Typography>
      </Box>
      <Box sx={styles.statBox}>
        <Typography variant="h2" component="span" sx={{ color: '#fa9b0e' }} style={styles.numberTypography}>64M+</Typography>
        <Typography variant="body1">Language support requests we handle every year</Typography>
      </Box>
      <Box sx={styles.statBox}>
        <Typography variant="h2" component="span" sx={{ color: '#fa9b0e' }} style={styles.numberTypography}>22,000</Typography>
        <Typography variant="body1">UK residents who consider British Sign Language as their main language</Typography>
      </Box>
    </div>
  );
};

export default StatsHighlight;
