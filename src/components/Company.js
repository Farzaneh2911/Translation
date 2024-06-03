import React, { useRef } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import InterpretationContent from './InterpretationContent';
import InterpretationServices from './InterpretationServices';
import AssistanceCard from './AssistanceCard';
import InterpretationPlatform from './InterpretationPlatform';
import InterpretationWhy from './InterpretationWhy';
import { useLocation, useNavigate } from 'react-router-dom';
import CompanyWho from './CompanyWho';
import CompanyStory from './CompanyStory';
import CompanyBelieve from './CompanyBelieve';
import CompanyTeam from './CompanyTeam';

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url('/images/Iran.webp')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '500px',
  width: '110%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  marginTop: '64px',
  marginLeft: '90px',
  
  
  [theme.breakpoints.down('sm')]: {
    height: '300px',
    marginTop: '48px',
    marginLeft: '0px'
    
  },
  [theme.breakpoints.up('sm')]: {
    height: '300px',
    marginTop: '48px',
    marginLeft: '0px'
    
  },
}));

const Overlay = styled(Box)({
  backgroundColor: 'rgba(0,0,0,0.5)',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const Interpretation = () => {
  return (
    <>
      <HeroContainer>
        <Overlay>
          <Container>
            {/* Add any content you want here */}
          </Container>
        </Overlay>
      </HeroContainer>
      <Container>
        <CompanyWho />
        <CompanyStory />
        <CompanyBelieve />
        <CompanyTeam />
      </Container>
    </>
  );
};

export default Interpretation;
