import React from 'react';

import Navbar from "@components/blocks/navbar";
import Button from "@components/ui/button";

import "@components/sections/header/style.css";

function Header() {
   function clickOpenModal(){
      console.log('buttonClick')
   }

   return (
      <header className="header">
         <div className="container">
            <div className="header__container">
               <div className="header__logo">

               </div>
               <div className="header__navbar-wrap">
                  <Navbar/>
               </div>
               <div onClick={clickOpenModal} className="header__btn-wrap">
                  <Button text="Modal"/>
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;
