import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';

const TeamMemberHighlight = () => {
  return (
    <Paper elevation={3} sx={{ maxWidth: '90%', mx: 'auto', my: 5, p: 2 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item md={6} xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/images/Company.gif" alt="Team Member" style={{ width: '100%', maxWidth: '500px', borderRadius: '10%' }} />
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="h3" sx={{ mb: 2, textAlign: 'center' , fontWeight:'bold'}}>
            Our Humans Behind The Desks
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'justify' }}>
            The Translate By Humans team is a group of people from different cultures and we all speak different languages! Yet, there is one thread that ties us all together – our 'immense' love for multilingual communication!
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TeamMemberHighlight;
