import "@assets/styles/main.css";

import React from 'react';
import {Route, Routes} from "react-router-dom";

import Header from "@components/sections/header";
import Home from "@pages/home";
import About from "@pages/about";
import Modal from "@components/sections/modal";

function App() {
   return (
      <div className="app">
         <Modal/>
         <Header></Header>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
         </Routes>
      </div>
   );
}

export default App;
