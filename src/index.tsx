import React from "react";
import ReactDOM, {createRoot, hydrateRoot} from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

// const root = document.getElementById("root");
// const root = hydrateRoot(domNode, reactNode );
// hydrateRoot(document.getElementById('root'), <App/>);

// const root = document.getElementById("root");

const root = createRoot(document.getElementById("root"));
// root.render(<App/>);
root.render(
   <BrowserRouter>
      <App/>
   </BrowserRouter>,
);


// hydrate(
//    <React.StrictMode>
//       <BrowserRouter>
//          <App/>
//       </BrowserRouter>
//    </React.StrictMode>,
//    document.getElementById('root')
// );