import "@assets/styles/main.css";

import React, {lazy, Suspense, useState} from 'react';
import {Route, Routes} from "react-router-dom";

import Header from "@components/sections/header";
import Home from "@pages/home";
import About from "@pages/about";

const Modal =
   lazy(() =>import(/* webpackPrefetch: true */ "@components/sections/modal"));

function App() {
   const
      [showModal, setShowModal] = useState(false);

   function clickOpenModal() {
      setShowModal(true);
      console.log('buttonClick');
   }

   return (
      <div className="app">
         {showModal &&
             <Suspense fallback={<div>Loading...</div>}>
                 <Modal/>
             </Suspense>
         }
         <Header openModal={clickOpenModal}/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
         </Routes>
      </div>
   );
}

// {showModal &&
// <Suspense fallback={<div>Loading...</div>}>
//     <Modal/>
// </Suspense>
// }

export default App;
