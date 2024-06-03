import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const documentTypes = [
  ["Knowledge Base Articles", "Contracts", "Consent Forms"],
  ["Customer Communication", "Mortgage Papers", "Accident Reports"],
  ["Patient Forms", "Credit Reports", "Prescriptions"],
  ["Certificates", "Medical Journals", "Insurance Claim Documents"],
  ["Intellectual Property Documents", "Medical Equipment Documents", "Clinical Study Reports"],
  ["Technical Manuals", "Pharmaceutical Research Documents", "Scientific Papers"],
  ["Financial Statements", "Product Guides and Catalogs", "Patents"],
  ["Policy Handbooks", "Training and Instruction Documents"]
];

const QualityTranslations = () => {
  return (
    <Box sx={{
        width: {s:'100%',lg:'120%'},
        mt: 10,
        backgroundImage: 'url("/images/why.png")',
        backgroundSize: 'cover',
        padding: '20px 0',
        textAlign: 'center', // This centers the text globally within the Box
        alignItems: 'center'
      }}>
      <Typography variant="h4" gutterBottom sx={{
          mb: 2,
          fontWeight: 'bold',
          mt: 5,
          textAlign: 'center',
          width: '100%'
        }}>
        Quality Translations For A Variety of Documents
      </Typography>
      <Typography variant="subtitle1" sx={{
          mb: 3,
          textAlign: 'center',
          color: 'text.secondary',
          width: '100%'
        }}>
        We handle a diverse set of documents including (but not limited to) the following types.
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {documentTypes.map((group, index) => (
          <Grid item xs={12} sm={6} md={8} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            {group.map((doc, idx) => (
              <Box key={idx} sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%', // Ensure each item takes up the full width of its container
                  textAlign: 'left', // Aligns text to the left within each box
                  mb: 1 // Adds some margin below each document type for spacing
                }}>
                <Box component="span" sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'primary.main', mr: 1 }} />
                {doc}
              </Box>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QualityTranslations;
