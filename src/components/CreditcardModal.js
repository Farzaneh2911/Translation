import React, { useState, useEffect, useRef } from 'react';
import { Modal, Box, Typography, TextField, Button, CircularProgress } from '@mui/material';
import chip from "../imgs/chip.png";
import visa from "../imgs/visa.png";
import master from "../imgs/master.png";
import american from "../imgs/american.png";
import VanillaTilt from "vanilla-tilt";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firebaseInit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const db = getFirestore(app);
const auth = getAuth(app);

const CreditCardModal = ({ open,  price }) => {
    const [loading, setLoading] = useState(false);
    const [transactionSuccess, setTransactionSuccess] = useState(false);
    const [orderDetails, setOrderDetails] = useState({ orderId: '' });
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardCVV, setCardCVV] = useState("");
    const [cardEXP, setCardEXP] = useState("");
    const [cardType, setCardType] = useState("");
    const tiltRef = useRef(null);
    const deliveryDate = localStorage.getItem("deliveryDate") || "No delivery date set";
    const email = localStorage.getItem('email');
    const navigate = useNavigate();
    const processPayment = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const newOrderId = Math.floor(Math.random() * 1000000); // Generate a random order ID
            
            // Save order to Firestore
            const orderData = {
                email: email,
                title: "Translation Order",
                price: price,
                deliveryDate: deliveryDate,
                orderId: newOrderId,
                paymentStatus: 'completed',
                timestamp: new Date(),
            };

            console.log("Saving order to Firestore:", orderData);

            await addDoc(collection(db, 'Orders'), orderData);
            console.log('Order saved successfully:', orderData);

            // Adding a slight delay to ensure the order is saved
            await new Promise((resolve) => setTimeout(resolve, 3000));

            // Call the Cloud Function to send the email
            try {
                const response = await axios.get('https://us-central1-translation-e34ce.cloudfunctions.net/helloWorld', {
                    params: {
                        Email: email,
                        
                    }
                });

                console.log('Email sent successfully:', response.data);
            } catch (error) {
                console.error('Error sending email:', error.response ? error.response.data : error.message);
            }

            setOrderDetails({ orderId: newOrderId });
            setTransactionSuccess(true); // Indicate that transaction was successful
        } catch (error) {
            console.error("Error saving order: ", error);
            setTransactionSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    const detectCreditCardType = (cardNumber) => {
        // Visa
        if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber)) {
            setCardType("Visa");
        }
        // Mastercard
        else if (/^5[1-5][0-9]{14}$/.test(cardNumber)) {
            setCardType("Mastercard");
        }
        // American Express
        else if (/^3[47][0-9]{13}$/.test(cardNumber)) {
            setCardType("American");
        } else {
            // Unknown card type
            setCardType("");
        }
    };

    useEffect(() => {
        detectCreditCardType(cardNumber && cardNumber.slice(0, 16));
    }, [cardNumber]);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 25,
                speed: 400,
                
                transition: true,
                easing: "ease-out",
            
            });
        }
        
    }, []);
  
    const handleClose =()=>{
        navigate('/')
    }
    return (
        <Modal
            open={open}
            onClose={() => {
                
                setTransactionSuccess(false);
                setLoading(false);
                setOrderDetails({ orderId: '' });
                // Reset card details on close
                setCardNumber("");
                setCardName("");
                setCardCVV("");
                setCardEXP("");
                navigate('/available-equipments-card');
            }}
            aria-labelledby="credit-card-modal-title"
            aria-describedby="credit-card-modal-description"
        >
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, bgcolor: 'background.paper', boxShadow: 24, p: 4, outline: 'none' }}>
                <Typography id="credit-card-modal-title" variant="h6" component="h2">
                    Pay using Credit Card
                </Typography>
                {loading ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                        <CircularProgress />
                        <Typography sx={{ mt: 2 }}>Processing payment...</Typography>
                    </Box>
                ) : transactionSuccess ? (
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ mb: 2 }}>Thank you! Order confirmed.</Typography>
                        <Typography>Your order {orderDetails.orderId} has been confirmed and is now in progress.</Typography>
                        <Typography>You will receive the translation by {deliveryDate}.</Typography>
                        <Button variant="contained" sx={{ mt: 2 }} onClick={handleClose}>Close</Button>
                    </Box>
                ) : (
                    <Box component="form" onSubmit={processPayment} noValidate sx={{ mt: 2 }}>
                        <div ref={tiltRef} className="credit-body" style={{ marginBottom: '20px' }}>
                            <div className="first-layer">
                                <img src={chip} className="credit-chip" alt="chip" />
                                {cardType && (
                                    <img
                                        src={
                                            cardType === "Visa"
                                                ? visa
                                                : cardType === "Mastercard"
                                                    ? master
                                                    : cardType === "American"
                                                        ? american
                                                        : ""
                                        }
                                        className="card-company animation"
                                        alt="card company"
                                    />
                                )}
                            </div>
                            <div className="middle-layer">
                                <p className="account-number">
                                    {cardNumber &&
                                        cardNumber.slice(0, 4) +
                                        " " +
                                        cardNumber.slice(4, 8) +
                                        " " +
                                        cardNumber.slice(8, 12) +
                                        " " +
                                        cardNumber.slice(12, 16)}
                                </p>
                            </div>
                            <div className="last-layer">
                                <p className="holder-name">
                                    {cardName.toUpperCase().slice(0, 25)}
                                </p>
                                <p className="cvv-number">
                                    {cardCVV && cardCVV.slice(0, 3) + ""}
                                </p>
                                <p className="exp-date">
                                    {cardEXP &&
                                        cardEXP.slice(0, 2) + "/" + cardEXP.slice(2, 4)}
                                </p>
                            </div>
                        </div>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="cardNumber"
                            label="Card Number"
                            type="text"
                            autoComplete="cc-number"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="cardName"
                            label="Card Holder Name"
                            type="text"
                            autoComplete="cc-name"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="expiryDate"
                            label="MM/YY"
                            type="text"
                            autoComplete="cc-exp"
                            value={cardEXP}
                            onChange={(e) => setCardEXP(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="cvc"
                            label="CVC"
                            type="text"
                            autoComplete="cc-csc"
                            value={cardCVV}
                            onChange={(e) => setCardCVV(e.target.value)}
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Pay €{price.toFixed(2)}
                        </Button>
                    </Box>
                )}
            </Box>
        </Modal>
    );
};

export default CreditCardModal;
