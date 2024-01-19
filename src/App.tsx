import "@assets/styles/main.css";

import React from 'react';
import Button from "@components/button";
import Navbar from "@components/navbar";
import {Route, Routes} from "react-router-dom";
import Home from "@pages/home";
import About from "@pages/about";

function App() {
   return (
      <div className="app">
         <h1>This is App</h1>
         <Navbar/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
         </Routes>
      </div>
   );
}

export default App;