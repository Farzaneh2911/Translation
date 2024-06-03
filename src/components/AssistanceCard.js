import React from 'react';
import { Box, Button, Typography, Avatar, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const AssistanceCard = () => {
    const theme = useTheme(); // Using theme to access breakpoints

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            alignContent:'center',
            justifyContent: 'space-between',
            p: 2,
            bgcolor: 'background.paper',
            borderRadius: '16px',
            boxShadow: 1,
            width: '100%', // Make width flexible
            height: { xs: 150, sm: 133 }, // Adjust height based on the screen size
            maxWidth: 1200, // Max width to control sizing on larger screens
            margin: 'auto',
            mt: 2,
            ml: { sm: 3 ,lg:40}, // Adjust left margin for larger screens
            px: { xs: 1, sm: 2 }, // Padding responsive
        }}>
            <Avatar src="/images/user-original.jpg" alt="Krupa Rachchh" sx={{ width: 56, height: 56, ml: { xs: 1, sm: 0 } }} />
            <Box sx={{ flexGrow: 1, ml: 2 }}>
                <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.125rem' } }}>Need Assistance?</Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                    We're here for you. Talk to our Interpretation Guru, Krupa Rachchh.
                </Typography>
            </Box>
            <Link to="/Scheduler" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="warning" sx={{
                    textTransform: 'none',
                    px: { xs: 1, sm: 2 }, // Padding responsive
                    py: { xs: 0.5, sm: 1 } // Smaller on small screens
                }}>Book A Meeting</Button>
            </Link>
        </Box>
    );
};

export default AssistanceCard;
