import React from "react";
import {hydrate} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {hydrateRoot} from "react-dom/client";

hydrate(
   <React.StrictMode>
      <BrowserRouter>
         <App/>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
);

// hydrateRoot(
//    document.getElementById('root'),
//    <React.StrictMode>
//       <BrowserRouter>
//          <App/>
//       </BrowserRouter>
//    </React.StrictMode>,
// );
