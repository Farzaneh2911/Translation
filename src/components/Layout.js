import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({isHome}) {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}