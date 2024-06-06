import React, { useState, useEffect } from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography, Menu, MenuItem, Grid, Divider, Avatar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../firebaseInit'; // Ensure Firebase is initialized
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

const pages = ['Services', 'Company', 'Contact'];
const serviceCategories = {
  Translation: ["Document Translation", "Day Translations", "NAATI Certified Translations"],
  Interpretation: ["Video Remote Interpretation (VRI)", "Remote Simultaneous Interpretation", "Meeting Interpretation", "In-Person Interpretation", "Medical Interpretation", "Legal Interpretation", "Conference Interpretation"],
  Localization: ["Website Localization", "Software Localization", "Technical Localization", "Marketing Localization"],
  Audio: ["Voice Overs", "Transcription"]
};

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false); // Add state for mobile services menu
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth(app);
  const db = getFirestore(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDoc = await getDoc(doc(db, "users", user.uid));
        setFirstName(userDoc.data()?.firstName || '');
      } else {
        setUser(null);
        setFirstName('');
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  const handleClose = () => setAnchorEl(null);
  const handleOpen = (event) => setAnchorEl(event.currentTarget);

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/');
  };

  const handleNavigate = (page) => {
    switch (page) {
      case 'Company':
        navigate('/company');
        break;
      case 'Contact':
        navigate('/contactus');
        break;
      default:
        break;
    }
    setMobileOpen(false);
  };

  const handleServiceClick = (category, item) => {
    handleClose();
    if (category === "Translation") {
      navigate('/book-equipment');
    }
    if (category === "Interpretation") {
      navigate('/Interpretation');
    }
    if (category === "Localization") {
      navigate('/localization-service');
    }
    if (category === "Audio") {
      navigate('/Voice-service');
    }
    setMobileOpen(false);
  };

  const handleQuoteClick = () => {
    navigate('/quotation-request');
    setMobileOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/available-equipments-card');
    setMobileOpen(false); 
  };

  const handleAccountClick = () => {
    if (user) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const toggleServiceMenu = (e) => {
    e.stopPropagation();
    setServiceMenuOpen(!serviceMenuOpen);
  };

  const drawer = (
    <Box  sx={{ textAlign: 'center' }}>
      <img src="./images/logo.svg" alt="Company Logo" style={{ width: 120, height: 91, marginRight: '10px', cursor: 'pointer' }} onClick={handleLogoClick} />
      <Divider />
      <List>
        <ListItem button onClick={toggleServiceMenu}>
          <ListItemText primary="Services" />
        </ListItem>
        {serviceMenuOpen && (
          <Box sx={{ pl: 2 }}>
            {Object.entries(serviceCategories).map(([category, items]) => (
              <Box key={category}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: 18 }}>
                  {category}
                </Typography>
                <Divider sx={{ bgcolor: '#FFC729' }} />
                {items.map((item) => (
                  <MenuItem key={item} onClick={() => handleServiceClick(category, item)}>
                    {item}
                  </MenuItem>
                ))}
              </Box>
            ))}
          </Box>
        )}
        {pages.filter(page => page !== 'Services').map((page) => (
          <ListItem button key={page} onClick={() => handleNavigate(page)}>
            <ListItemText primary={page} />
          </ListItem>
        ))}
        <ListItem button onClick={handleQuoteClick}>
          <ListItemText primary="Get a Free Quote" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" sx={{ color: 'black', backgroundColor: 'white', fontWeight: 'bold' }}>
      <Container maxWidth="large">
        <Toolbar disableGutters>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <img src="./images/logo.svg" alt="Company Logo" style={{ width: 120, height: 91, marginRight: '10px', cursor: 'pointer' }} onClick={handleLogoClick} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: '#606060',
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  position: 'relative',
                  '&:hover': {
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '6px',
                      backgroundColor: '#FFC729',
                    }
                  }
                }}
                onMouseOver={page === 'Services' ? handleOpen : null}
                onClick={() => handleNavigate(page)}
              >
                {page}
              </Button>
            ))}
            <Menu
              id="menu-services"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              sx={{
                '& .MuiMenu-paper': {
                  display: 'flex',
                  backgroundColor: 'white',
                  color: 'black',
                  fontSize: '20px'
                }
              }}
            >
              <Grid container spacing={2}>
                {Object.entries(serviceCategories).map(([category, items]) => (
                  <Grid item xs key={category}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: 18 }}>
                      {category}
                    </Typography>
                    <Divider sx={{ bgcolor: '#FFC729' }} />
                    {items.map((item) => (
                      <MenuItem key={item} onClick={() => handleServiceClick(category, item)}>
                        {item}
                      </MenuItem>
                    ))}
                  </Grid>
                ))}
              </Grid>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'flex' } }}>
            <Button variant="contained" color="warning" sx={{
              textTransform: 'none',
              backgroundColor: '#FFC729',
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
              '&:hover': { backgroundColor: '#d6a20d' }
            }} onClick={handleQuoteClick}>
              Get a Free Quote
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0, ml: 2 }}>
            {user ? (
              <div>
                <IconButton onClick={handleUserMenuOpen}>
                  <Avatar sx={{ bgcolor: '#FFC729', color: 'black' }}>
                    {firstName ? firstName[0].toUpperCase() : user.email[0].toUpperCase()}
                  </Avatar>
                </IconButton>
                <Menu
                  id="menu-user"
                  anchorEl={userMenuAnchorEl}
                  open={Boolean(userMenuAnchorEl)}
                  onClose={handleUserMenuClose}
                >
                  <MenuItem onClick={() => { handleUserMenuClose(); navigate('/profile'); }}>Account</MenuItem>
                  <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                </Menu>
              </div>
            ) : (
              <IconButton onClick={handleAccountClick} sx={{ color: 'black' }}><AccountCircle sx={{ fontSize: 50 }} /></IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
