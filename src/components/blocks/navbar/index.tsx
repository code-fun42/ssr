import React from 'react';
import {Link} from "react-router-dom";

import "@components/blocks/navbar/index.css";

function Navbar() {
   return (
      <div className="navbar">
         <ul className="navbar__list">
            <li className="navbar__item">
               <Link to="/">Home</Link>
            </li>
            <li className="navbar__item">
               <Link to="/about">About</Link>
            </li>
         </ul>
      </div>
   );
}

export default Navbar;
