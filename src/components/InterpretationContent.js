import React from 'react';
import { Container, Typography, Box, Divider, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const InterpretationContent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl" sx={{ my: 4, backgroundImage: 'url("/images/why.png")', backgroundSize: { xs: 'cover', lg: '100% 100%' }, width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box sx={{ width: { xs: '100%', md: '48%' }, mb: { xs: 3, md: 0 } }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', mt: 5 }}>
            Interpretation
          </Typography>
          <Typography variant="body1" paragraph>
            PMCTranslations offers several types of interpreting services, both on location and remotely. Our interpreting services are tailored to your specific requirements. We will advise you on which type of interpreter will suit you best.
          </Typography>
        </Box>
        {!isMobile && <Divider orientation="vertical" flexItem />}
        <Box sx={{ width: { xs: '100%', md: '48%' } }}>
          <Typography variant="body1" paragraph sx={{ mt: { xs: 0, md: 5 } }}>
            Though similar in some ways, interpreting and translation are not at all the same service. Interpreting is an incredibly complex profession. Taking the spoken word and rendering it in another language instantaneously is a taxing affair, putting enormous pressure on interpreters to match a speaker’s tonal and emotional register, without resorting to dictionaries and glossaries.
          </Typography>
          <Typography variant="body1" paragraph>
            Event organisers of all kinds have long struggled over the question of how best to make conversations work across languages. Is it best to give an interpreter the chance to repeat each statement as they go, or should they be asked to interpret simultaneously as the respective parties speak? The answer, of course, is that different types of interpreting suit different problems. The interpreting needs of the European Parliament are a long way removed from those of an automotive industry conference.
          </Typography>
          <Typography variant="body1" paragraph>
            At PMC Translations, we provide interpretation services from linguistic experts with the specific background knowledge in your sector, guaranteeing a perfect interpretation every time.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default InterpretationContent;
