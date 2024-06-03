import React, { useState, useEffect, useRef } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import "../css/cardStyle.css";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { app } from '../firebaseInit';
import { createWorker } from 'tesseract.js';

import mammoth from 'mammoth/mammoth.browser';
import {
  Container, TextField, FormControl, InputLabel, Select, Button,
  Typography, MenuItem, Box, IconButton, InputAdornment, Grid
} from '@mui/material';
import ServiceCard from './ServiceCard';

function EnquiryForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const priceSectionRef = useRef(null);
  const [enquiryData, setEnquiryData] = useState(() => {
    const savedData = localStorage.getItem('enquiryData');
    return savedData ? JSON.parse(savedData) : {
     firstName: '',
     lastName: '',
     email: '',
     phone: '',
     translateFrom: '',
     translateTo: '',
     additionalComments: '',
     files: [],
     wordcount: '',
     ...state,
    };
  });

  useEffect(() => {
    const data = localStorage.getItem('enquiryData');
    if (data) {
      setEnquiryData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('enquiryData', JSON.stringify(enquiryData));
  }, [enquiryData]);

  const db = getFirestore(app);
  const [showPrice, setShowPrice] = useState(false);
  const [prices, setPrices] = useState({ premium: 0, professional: 0, economy: 0 });
  const [deliveryOption, setDeliveryOption] = useState('normal');
  const [isProcessing, setIsProcessing] = useState(false);
  const [file, setFile] = useState(null);

  const calculatePrices = (wordcount, deliveryOption) => {
    const ratePremium = 0.14;
    const rateProfessional = 0.10;
    const rateEconomy = 0.06;
    const deliveryCharges = {
      '24h': 0.05,
      '48h': 0.03,
      'normal': 0,
    };
    const newRatePremium = ratePremium + deliveryCharges[deliveryOption];
    const newRateProfessional = rateProfessional + deliveryCharges[deliveryOption];
    const newRateEconomy = rateEconomy + deliveryCharges[deliveryOption];

    const premiumPrice = wordcount * newRatePremium;
    const professionalPrice = wordcount * newRateProfessional;
    const economyPrice = wordcount * newRateEconomy;

    setPrices({ premium: premiumPrice, professional: professionalPrice, economy: economyPrice });
  };

  const handleShowPrice = async () => {
    calculatePrices(enquiryData.wordcount, deliveryOption);
    const requiredFieldsFilled = enquiryData.firstName && enquiryData.lastName && enquiryData.email && enquiryData.phone &&
      enquiryData.translateFrom && enquiryData.translateTo;
    if (!requiredFieldsFilled) {
      alert("Please fill all fields and agree to the Privacy Policy.");
      return;
    }
    setShowPrice(true);
    setTimeout(() => {
      if (priceSectionRef.current) {
        priceSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    
    try {
      const documentData = {
        firstName: enquiryData.firstName,
        lastName: enquiryData.lastName,
        email: enquiryData.email,
        phone: enquiryData.phone,
        translateFrom: enquiryData.translateFrom,
        translateTo: enquiryData.translateTo,
        additionalComments: enquiryData.additionalComments,
        wordcount: enquiryData.wordcount,
        price: prices.premium, // or prices.professional or prices.economy based on the selected service
      };

      // If there's a file, upload it and add the URL to the document data
      if (enquiryData.files.length > 0) {
        const documentFile = enquiryData.files[0];
        const storage = getStorage(app);
        const storageRef = ref(storage, `documents/${documentFile.name}`);
        console.log('Attempting to upload file', documentFile.name);

        const uploadResult = await uploadBytes(storageRef, documentFile);
        console.log('File uploaded successfully', uploadResult);

        const downloadURL = await getDownloadURL(uploadResult.ref);
        console.log('Download URL:', downloadURL);

        documentData.fileURL = downloadURL;
      }

      const docRef = await addDoc(collection(db, "documents"), documentData);
      console.log('Document saved with ID: ', docRef.id);
      
    } catch (error) {
      console.error("Error uploading document: ", error);
      alert(`Error uploading document: ${error.message}`);
    }

    setShowPrice(true);
   
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEnquiryData((prev) => ({ ...prev, [name]: name === 'wordcount' ? Number(value) : value }));
  };

  const getWordCountFromDocx = async (file) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    const text = await new Promise((resolve, reject) => {
      reader.onload = async (e) => {
        const arrayBuffer = e.target.result;
        const result = await mammoth.extractRawText({ arrayBuffer });
        resolve(result.value);
      };
      reader.onerror = error => reject(error);
    });
    return text.split(/\s+/).length;
  };

  const worker = createWorker({
    logger: m => console.log(m),
  });

  const getWordCountFromImage = async (file) => {
    try {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      const { data: { text } } = await worker.recognize(file);
      await worker.terminate();
      return text.split(/\s+/).length;
    } catch (error) {
      console.error('Error during OCR processing:', error);
      throw error;
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setIsProcessing(true);
      let wordCount = 0;
      try {
        if (file.type ==='application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
          wordCount = await getWordCountFromDocx(file);
        } else if (file.type.startsWith('image/')) {
          wordCount = await getWordCountFromImage(file);
        }
        setEnquiryData((prev) => ({ ...prev, wordcount: wordCount, files: [file] }));
      } catch (error) {
        console.error('Error processing file:', error);
        alert('Failed to process file: ' + error.message);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const clearFile = () => {
    setFile(null);
    setEnquiryData((prev) => ({ ...prev, wordcount: '', files: [] }));
  };

  const handleOrder = (serviceType) => {
    console.log(`Order for ${serviceType} service placed.`);
    // Handle the order logic here
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Enquiry Info
      </Typography>

      <form>
        <TextField
          label="First Name *"
          variant="outlined"
          fullWidth
          margin="normal"
          name="firstName"
          value={enquiryData.firstName}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Last Name *"
          variant="outlined"
          fullWidth
          margin="normal"
          name="lastName"
          value={enquiryData.lastName}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Email Address *"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={enquiryData.email}
          onChange={handleInputChange}
          type="email"
          required
        />
        <TextField
          label="Phone Number *"
          variant="outlined"
          fullWidth
          margin="normal"
          name="phone"
          value={enquiryData.phone}
          onChange={handleInputChange}
          required
        />
        <Box sx={{ display: 'flex', gap: 2, mt: 2, mb: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Translate from</InputLabel>
            <Select
              name="translateFrom"
              value={enquiryData.translateFrom}
              label="Translate from"
              onChange={handleInputChange}
              required
            >
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="persian">Persian</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Translate to</InputLabel>
            <Select
              name="translateTo"
              value={enquiryData.translateTo}
              label="Translate to"
              onChange={handleInputChange}
              required
            >
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="persian">Persian</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Box>
        <TextField
          label="Word count *"
          variant="outlined"
          fullWidth
          margin="normal"
          name="wordcount"
          value={isProcessing ? 'Counting...' : enquiryData.wordcount.toString()}
          onChange={handleInputChange}
          type="text"
          required
          InputProps={{
            endAdornment: file ? (
              <InputAdornment position="end">
                <IconButton onClick={clearFile} edge="end">
                  <ClearIcon />
                </IconButton>
                | {file.name} <Button component="label" size="small" startIcon={<EditIcon />}>
                  Edit
                  <input
                    type="file"
                    hidden
                    onChange={handleFileChange}
                  />
                </Button>
              </InputAdornment>
            ) : (
              <Button component="label" startIcon={<EditIcon />}>
                Upload File
                <input
                  type="file"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>
            )
          }}
        />
        <TextField
          label="Additional Comments"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          name="additionalComments"
          value={enquiryData.additionalComments}
          onChange={handleInputChange}
        />
        <Button variant="contained" onClick={handleShowPrice} sx={{ mt: 2, ml: 1, bgcolor: '#FFC729', color: 'black', fontWeight: 'bold' }}>
          Show Price
        </Button>
        {showPrice && (
          <Grid container spacing={2} sx={{ mt: 4 }} ref={priceSectionRef}>
            <Grid item xs={12} sm={4}>
              <ServiceCard
                title="Premium"
                price={prices.premium}
                pricePerWord={0.13}
                features={[{ text: 'Specialized Native Translator', detail: 'High-quality translations for publication purposes. The perfect option for business content, including websites, legal and medical documents.' }, { text: 'Specialized Reviser' }, { text: 'Quality Control Expert' }]}
                deliveryTime="3 days"
                onOrder={() => handleOrder('Premium')}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ServiceCard
                title="Professional"
                price={prices.professional}
                pricePerWord={0.10}
                features={[{ text: 'Specialized Native Translator', detail: 'Translations for standard projects, preferred for knowledge acquisition content: handbooks, instructions, certificates or internal communication.' }, { text: 'Quality Control Expert' }]}
                deliveryTime="2 days"
                onOrder={() => handleOrder('Professional')}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ServiceCard
                title="Economy"
                price={prices.economy}
                pricePerWord={0.07}
                features={[{ text: 'Automatic translation', detail: 'Light edit of a machine generated translation by a native professional translator to remove the most serious errors only. Not available for scanned PDFs and images. Valuable translation for understanding or personal use.' }, { text: 'Light revision' }]}
                deliveryTime="1 day"
                onOrder={() => handleOrder('Economy')}
              />
            </Grid>
          </Grid>
        )}
      </form>
    </Container>
  );
}

export default EnquiryForm;
