import React from 'react';

import Navbar from "@components/blocks/navbar";
import Button from "@components/ui/button";

import "@components/sections/header/style.css";

import {HeaderProp} from "@components/sections/header/interface";

function Header(props:HeaderProp) {
   return (
      <header className="header">
         <div className="container">
            <div className="header__container">
               <div className="header__logo">

               </div>
               <div className="header__navbar-wrap">
                  <Navbar/>
               </div>
               <div onClick={props.openModal} className="header__btn-wrap">
                  <Button text="Modal"/>
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;
