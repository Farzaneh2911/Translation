import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Button, Divider } from '@mui/material';
import { Translate as TranslateIcon, DateRange as DateRangeIcon, CurrencyPound as CurrencyPoundIcon, AccessTime as AccessTimeIcon, AccountCircle as AccountCircleIcon, Email as EmailIcon, Phone as PhoneIcon, Comment as CommentIcon } from '@mui/icons-material';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { styled } from '@mui/material/styles';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs, getDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebaseInit';
import moment from 'moment';
import "../../css/cardStyle.css";

const db = getFirestore(app);
const auth = getAuth(app);

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const ProfileContainer = styled(Container)({
  paddingTop: '150px',
  paddingBottom: '120px',
  minHeight: '100vh',
  backgroundColor: '#f6f5f5',
});

const ProfileBox = styled(Card)({
  padding: '20px',
  marginBottom: '20px',
  backgroundColor: '#ffffff',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
  borderRadius: '10px',
});

const Profile = () => {
  const [userOrders, setUserOrders] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [firstName, setFirstName] = useState('');
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        setFirstName(userDoc.data()?.name || '');
        
        const ordersQuery = query(collection(db, 'Orders'), where('email', '==', user.email));
        const ordersSnapshot = await getDocs(ordersQuery);
        const orders = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUserOrders(orders);

        const appointmentsQuery = query(collection(db, 'appointments'), where('email', '==', user.email));
        const appointmentsSnapshot = await getDocs(appointmentsQuery);
        const fetchedAppointments = appointmentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAppointments(fetchedAppointments);
      }
    };
    
    fetchUserData();
  }, [user]);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/');
  };

  if (!user) {
    return <Typography>Please sign in to view your profile.</Typography>;
  }

  return (
    <ProfileContainer maxWidth="md">
      <ProfileBox>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Welcome, {firstName || user.email}
          </Typography>
          <Button 
            variant="contained" 
            onClick={handleSignOut} 
            sx={{
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              backgroundColor: 'red', 
              color: 'white', 
              padding: '8px', 
              borderRadius: '5px', 
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'darkred',
              }
            }}
          >
            Sign Out
          </Button>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Your Orders
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <List>
            {userOrders.length === 0 ? (
              <Typography>You have no orders.</Typography>
            ) : (
              userOrders.map(order => (
                <Card key={order.id} raised sx={{ mb: 2 }}>
                  <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="h6" component="h2" gutterBottom>
                        Order ID: {order.orderId}
                      </Typography>
                    </Box>
                    <List>
                      <StyledListItem>
                        <ListItemIcon>
                          <TranslateIcon sx={{ color: 'deepSkyBlue' }} />
                        </ListItemIcon>
                        <ListItemText primary="Service" secondary={order.title} />
                      </StyledListItem>
                      <StyledListItem>
                        <ListItemIcon>
                          <CurrencyPoundIcon sx={{ color: 'gold' }} />
                        </ListItemIcon>
                        <ListItemText primary="Price" secondary={`£${order.price.toFixed(2)}`} />
                      </StyledListItem>
                      <StyledListItem>
                        <ListItemIcon>
                          <DateRangeIcon sx={{ color: 'tomato' }} />
                        </ListItemIcon>
                        <ListItemText primary="Delivery date" secondary={order.deliveryDate} />
                      </StyledListItem>
                      <StyledListItem>
                        <ListItemIcon>
                          <CurrencyPoundIcon sx={{ color: 'green' }} />
                        </ListItemIcon>
                        <ListItemText primary="Payment Status" secondary={order.paymentStatus} />
                      </StyledListItem>
                    </List>
                  </CardContent>
                </Card>
              ))
            )}
          </List>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Your Appointments
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <List>
            {appointments.length === 0 ? (
              <Typography>You have no appointments.</Typography>
            ) : (
              appointments.map(appointment => (
                <Card key={appointment.id} raised sx={{ mb: 2 }}>
                  <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="h6" component="h2" gutterBottom>
                        Appointment ID: {appointment.id}
                      </Typography>
                    </Box>
                    <List>
                      <StyledListItem>
                        <ListItemIcon>
                          <EditCalendarIcon sx={{ color: 'blue' }} />
                        </ListItemIcon>
                        <ListItemText primary="Date" secondary={moment(appointment.date).format('YYYY-MM-DD')} />
                      </StyledListItem>
                      <StyledListItem>
                        <ListItemIcon>
                          <AccessTimeIcon sx={{ color: 'blue' }} />
                        </ListItemIcon>
                        <ListItemText primary="Time" secondary={moment(appointment.time, "HH:mm").format('HH:mm')} />
                      </StyledListItem>
                      <StyledListItem>
                        <ListItemIcon>
                          <AccountCircleIcon sx={{ color: 'green' }} />
                        </ListItemIcon>
                        <ListItemText primary="Name" secondary={appointment.name} />
                      </StyledListItem>
                      <StyledListItem>
                        <ListItemIcon>
                          <EmailIcon sx={{ color: 'green' }} />
                        </ListItemIcon>
                        <ListItemText primary="Email" secondary={appointment.email} />
                      </StyledListItem>
                      <StyledListItem>
                        <ListItemIcon>
                          <PhoneIcon sx={{ color: 'green' }} />
                        </ListItemIcon>
                        <ListItemText primary="Phone" secondary={appointment.phone} />
                      </StyledListItem>
                      <StyledListItem>
                        <ListItemIcon>
                          <CommentIcon sx={{ color: 'green' }} />
                        </ListItemIcon>
                        <ListItemText primary="Comments" secondary={appointment.comments} />
                      </StyledListItem>
                    </List>
                  </CardContent>
                </Card>
              ))
            )}
          </List>
        </CardContent>
      </ProfileBox>
    </ProfileContainer>
  );
};

export default Profile;
