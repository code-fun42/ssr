import "@components/navbar/index.css";

import React from 'react';
// import ReactDOM from "react-dom/client";
import {Link} from "react-router-dom";

function Navbar() {
   return (
      <div className="navbar">
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
      </div>
   );
}

export default Navbar;
