import React from "react";
import { Route,Routes } from "react-router-dom";
import {Box} from '@mui/material'; // a box is a div with some shading and colors.

import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import './App.css';
const App=()=>{
    return(
        <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto"> 
        {/* m mean margin auto it is a property of material ui and sx is support responsive design in extra large devices (xl means extra large) */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    )
}

export default App