import React from 'react';
import { Container, Grid, Typography, Box, Avatar, Link as MuiLink } from '@mui/material';
import WebIcon from '@mui/icons-material/Web'; // Example icons for each service
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import TranslateIcon from '@mui/icons-material/Translate';
import ComputerIcon from '@mui/icons-material/Computer';
import GavelIcon from '@mui/icons-material/Gavel';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import { Link } from 'react-router-dom';

const services = [
  { title: 'Voice Translation', description: 'Speech translation is the process by which conversational spoken phrases are instantly translated and spoken aloud in a second language.', icon: <KeyboardVoiceIcon />, color: 'skyblue', link: '/voice-translation' },
  { title: 'Document Translation', description: 'Use our online quote to experience the fast and easy way to translate your documents in 201 languages, since 1999.', icon: <TranslateIcon />, color: 'green', link: '/document-translation' },
  { title: 'Interpretation', description: 'Expert interpretation services to bridge communication gaps for conferences, legal proceedings, medical consultations, and business meetings.', icon: <InterpreterModeIcon />, color: 'orange', link: '/interpretation' },
  { title: 'Software Localization', description: 'We localize the original files of your mobile app or desktop software and test them afterwards, sparing you the trouble of copying and pasting.', icon: <ComputerIcon />, color: 'red', link: '/software-localization' },
  { title: 'Custom Localization Solution', description: 'From the high-touch training of translators to match your preferred style, to APIs and custom workflow design.', icon: <GavelIcon />, color: 'purple', link: '/custom-localization' },
  { title: 'Official translations', description: 'Our professional translation services can be certified or sworn in Court, depending on the country where you must present your document.', icon: <WebIcon />, color: 'teal', link: '/official-translations' }
];

const ProfessionalServices = () => {
  return (
    <Container maxWidth="xl" sx={{mt:10}}>
      <Typography variant="h4" gutterBottom sx={{fontWeight:'bold'}}>
        Our Professional Services
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Link to={service.link} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: service.color, marginRight: 2 }}>
                    {service.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{service.title}</Typography>
                    <Typography variant="body2">{service.description}</Typography>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/images/Component 2.png"
            alt="Descriptive Alt Text"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfessionalServices;
