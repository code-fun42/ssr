import React from "react";
import ReactDOM, {createRoot, hydrateRoot} from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

// const root = document.getElementById("root");
// const root = hydrateRoot(domNode, reactNode );
// hydrateRoot(document.getElementById('root'), <App/>);

// const root = document.getElementById("root");

const root = createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <App/>
      </BrowserRouter>
   </React.StrictMode>,
);

// hydrateRoot(
//    document.getElementById("root"),
//    <div>
//       <BrowserRouter>
//          <App/>
//       </BrowserRouter>
//    </div>,
// );

// hydrate(
//    <React.StrictMode>
//       <BrowserRouter>
//          <App/>
//       </BrowserRouter>
//    </React.StrictMode>,
//    document.getElementById('root')
// );
