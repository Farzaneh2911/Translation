import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import AvailableEquipmentsCard from "./components/AvailableEquipmentsCard";
import "./App.css";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.backgroundColor = '#ffff';
      document.body.style.backgroundImage = '';
      document.body.classList.add("bg-cover", "h-screen", "bg-no-repeat");
    }
  }, [location.pathname]); // Add location.pathname as a dependency to ensure the effect runs when the pathname changes

  return (
    <>
      <CssBaseline />
      <Box sx={{ bgcolor: 'white' }}>
        <div className="flex-1">
          <AvailableEquipmentsCard />
        </div>
      </Box>
    </>
  );
}

export default Home;
