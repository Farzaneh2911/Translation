import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Box } from '@mui/material';
//import CreditCardIcon from '@mui/icons-material/CreditCard';
//import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
//import PaymentsIcon from '@mui/icons-material/Payments'; // Assuming this icon is used for PayPal.
import CreditCardModal from './CreditcardModal';



  
const styles = {
  pageContainer: {
    padding: '40px',
  },
  buttonHover: {
    "&:hover": {
      transform: "scale(1.05)",
      transition: "transform 0.5s",
    }
  },
  invoiceText: {
    color: 'black',
    fontSize: '2.2rem', // Increase font size
  },
  invoiceContainer: {
    background: '#f5f5f5', // Background color of the invoice box
    padding: '10px', // Increase padding
    border: '1px solid #ddd', // Add border
    borderRadius: '10px', // Add border radius
    width:'600px',
    
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
};
const styles1 = {
    paymentMethodContainer: {
      margin: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // Ensures the button aligns to the bottom
      height: '100%', // Ensures it fills the container height
    },
    paymentHeader: {
      paddingBottom: '10px',
      borderBottom: '1px solid #ccc',
      marginBottom: '20px',
      fontSize: '18px',
      fontWeight: 'bold',
    },
    paymentDetails: {
      fontSize: '16px',
      lineHeight: '1.5',
      marginBottom: 'auto', // Pushes everything else down
    },
    buttonStyle: {
      width: '100%',
      padding: '12px 0',
      fontSize: '16px',
      marginTop: '20px', // Ensures margin on top if the content above is shorter
      transition: 'background-color 0.3s, transform 0.3s', // Smooth transition for visual feedback
      "&:hover": {
        backgroundColor: '#1976d2', // Darken button on hover for better effect
        transform: 'scale(1.03)' // Slightly larger on hover
      },
      "&:active": {
        transform: 'scale(0.98)', // Button press effect
      }
    }
  };
  
  
  // Adjusting Grid container style
  /*const gridContainerStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch', // Ensures all children stretch to fill the container
  };*/
  
  

 const PaymentPage = () => {
    const [orderDetails, setOrderDetails] = useState({
        title: '',
        totalBeforeVAT: 0,
        price: 0,
        pricePerWord: 0,
        deliveryDate: '',
        translateFrom:'',
        translateTo:'',
        vat:0,
      });
    const redirectToPayPal = () => {
        const query = new URLSearchParams({
            cmd: "_xclick",
            business: "farhaghighatbin@gmail.com", // Your PayPal merchant email or ID
            item_name: `Payment for ${orderDetails.title || "services"}`,
            amount: orderDetails.price.toFixed(2),
            currency_code: "EUR", // Change currency as needed
            return: `${window.location.origin}/payment-success`, // URL to which PayPal returns the buyer after the buyer completes the payment
            cancel_return: `${window.location.origin}/payment-cancel`, // URL to which PayPal returns the buyer if the buyer does not complete the payment
        });
        
        window.location.href = `https://www.paypal.com/cgi-bin/webscr?${query.toString()}`;
    };

    useEffect(() => {
        //const storedDetails = localStorage.getItem('orderDetails');
        const title = localStorage.getItem("title") || "Translation Service";
        //const details = JSON.parse(storedDetails);
        const translateFrom=localStorage.getItem("translateFrom")
        const translateTo=localStorage.getItem("translateTo")
        const totalBeforeVAT = parseFloat(localStorage.getItem("price")) || 0;
        const vat = totalBeforeVAT * 0.20;
        const price = totalBeforeVAT + vat;
        const deliveryDate = localStorage.getItem("deliveryDate") || "Translation Service";

        setOrderDetails({ title, price, totalBeforeVAT, vat , translateFrom,translateTo,deliveryDate});
    }, []);
        const [open, setOpen] = useState(false);

        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
    return (
        <Box style={styles.pageContainer}>
            <Container maxWidth="lg">
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6}>
                        <Box style={styles.invoiceContainer}>
                            <Typography variant="h5" gutterBottom style={styles.invoiceText}>
                                Payment Invoice - Project #{orderDetails.title}
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={{fontWeight:'bold',fontSize:18}}>Translate From</TableCell>
                                            <TableCell align="right"sx={{fontSize:18}}>{orderDetails.translateFrom}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{fontWeight:'bold',fontSize:18}}>Translate To</TableCell>
                                            <TableCell align="right" sx={{fontSize:18}}>{orderDetails.translateTo}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{fontWeight:'bold',fontSize:18}}>Total before VAT</TableCell>
                                            <TableCell align="right" sx={{fontSize:18}}>€{orderDetails.totalBeforeVAT.toFixed(2)}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{fontWeight:'bold',fontSize:18}}>VAT 20%</TableCell>
                                            <TableCell align="right" sx={{fontSize:18}}>€{orderDetails.vat.toFixed(2)}</TableCell>
                                             
                                        </TableRow>
                                        <TableRow >
                                            
                                            <TableCell sx={{fontWeight:'bold',fontSize:22,backgroundColor:'lightgray',display: 'flex', alignItems: 'center'}}>
                                            <img src="/images/money.gif" alt="Payment Method Icon" style={{ width: '60px', height: '60px', marginRight: '10px' }}className="gray-filter"  />Total
                                            </TableCell>
                                              
                                            <TableCell align="right" sx={{fontSize:22,backgroundColor:'lightgrey',fontWeight:'bold'}}>€{orderDetails.price.toFixed(2)}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box style={styles.imageContainer}>
                            {/* Image component or image tag */}
                            <img src="/images/Payments.gif" alt="Payment" style={styles.image} />
                        </Box>
                    </Grid>
                    <Box style={styles.pageContainer}>
                      <Container maxWidth="lg">
                       <Typography variant="h6" style={{marginBottom: 20,display: 'flex', alignItems: 'center', fontWeight:'bold'}}>
                         
                          Choose Payment Method
                       </Typography>
                       <Grid container spacing={2}>
                          <Grid item xs={12} sm={4}>
                            <Paper style={styles1.paymentMethodContainer}>
                             <div>
                              <div style={styles1.paymentHeader}>Credit Card</div>
                              <div style={styles1.paymentDetails}>
                                Pay using Credit Card
                                <br />
                                <img src="/images/paymentlogos.png" alt="Credit Cards" style={{marginTop: '10px'}} />
                              </div>
                             </div>

                             <Button variant="contained" style={styles1.buttonStyle} onClick={handleOpen}>Next</Button>
                           </Paper>
                         </Grid>
                       <Grid item xs={12} sm={4}>
                        <Paper style={styles1.paymentMethodContainer}>
                         <div>
                            <div style={styles1.paymentHeader}>Bank Wire Transfer</div>
                            <div style={styles1.paymentDetails}>
                                Account Number: 000123456789
                                <br />SWIFT: ABCD1234XYZ
                                <br />Bank: Your Bank Name
                                <br />IBAN: Your IBAN
                                <br />Reference: Your Reference
                            </div>
                         </div>
                            
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper style={styles1.paymentMethodContainer}>
                         <div>
                            <div style={styles1.paymentHeader}>PayPal</div>
                            <div style={styles1.paymentDetails}>
                                Use your PayPal account
                                <br />
                                <img src="/images/paypal.png" alt="PayPal" style={{marginTop: '10px'}} />
                            </div>
                         </div>
                            <Button variant="contained" style={styles1.buttonStyle} onClick={redirectToPayPal}>Next</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <CreditCardModal open={open} handleClose={handleClose} price={orderDetails.price}/>
        </Box>
        </Grid>
        </Container>
        </Box>
    );
};


export default PaymentPage;
