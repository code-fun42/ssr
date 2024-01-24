import React from 'react';
import Navbar from "@components/blocks/navbar";

import "@components/sections/header/index.css";

function Header() {
   return (
      <div className="header">
         <div className="container">
            <div className="header__container">
               <div className="header__logo"></div>
               <div className="header__navbar-wrap">
                  <Navbar/>
               </div>
               <div className="header__btn">

               </div>
            </div>
         </div>
      </div>
   );
}

export default Header;
