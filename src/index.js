import React from "react";
import ReactDOM from "react-dom/client";

import ScrollToTop from './components/ScrollToTop';
import "./index.css";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import AvailableEquipments from "./components/AvailableEquipments";
import BookEquipment from "./components/BookEquipment";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AvailableEquipmentsCard from "./components/AvailableEquipmentsCard";
import Profile from "./components/profile/Profile";



import Footer from "./components/Footer";
import OrderSummary from "./components/OrderSummary";
import ConfirmationPage from "./components/ConfirmationPage";
import Payment from "./components/Payment";
import LocalizationServicePage from "./components/LocalizationServicePage";
import Interpretation from "./components/Interpretation";
import Scheduler from "./components/Scheduler";
import AdminPanel from "./components/AdminPanel";
import InterpretationForm from "./components/InterpretationForm";

import VoiceOver from "./components/VoiceOver";
import VoiceCalltoAction from "./components/VoiceCalltoAction";
import Company from "./components/Company";
import ContactUs from "./components/ContactUs";
import QuotationRequest from "./components/QuotationRequest";
import FormComponent from "./components/FormComponent";
function createRoutes() {
 return createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/available-equipments",
        element: <AvailableEquipments />,
      },
      {
        path: "/order-summary",
        element: <OrderSummary/>,
      },
      {
        path:"/confirm-order",
        element:<ConfirmationPage/>
      },
      {
        path:"/Payment",
        element:<Payment />
      },
      {
        path:"/localization-service",
        element:<LocalizationServicePage/>
      },
      {
        path:"/Interpretation",
        element:<Interpretation/>
      },
      {
        path:"/Scheduler",
        element:<Scheduler/>
      },
      {
        path:"/Interpretation-Form",
        element:<InterpretationForm/>
      },
      {
        path:"/admin",
        element:<AdminPanel/>
      },
      {
        path:"/Voice-service",
        element:<VoiceOver/>
      },
      {
        path:"/Voice-call",
        element:<VoiceCalltoAction/>
      },
      {
        path: "/available-equipments-card",
        element: <AvailableEquipmentsCard />,
      },
      {
        path: "/book-equipment",
        element: <BookEquipment />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/quotation-request",
        element: <QuotationRequest />,
      },
      {
        path: "/Translation-price",
        element: <FormComponent />,
      },
      
    
  
  ],
},
 ]);
}
const router = createRoutes();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router}>
      <ScrollToTop />
      <Footer/>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
