import path from "node:path";
import fs from "node:fs";

import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
import {StaticRouter} from "react-router-dom/server";

const app = express();

app.use(express.static(path.join(__dirname, "..", "client")));

const createReactApp = (location) => {
   const reactApp = ReactDOMServer.renderToString(
      <StaticRouter location={location}>
         <App/>
      </StaticRouter>
   );

   const reactHtml = fs.readFileSync(path.resolve(__dirname, "..", "client", "index.html"), "utf-8")
      .replace(`<div id="root"></div>`, `<div id="root">${reactApp}</div>`);
   return reactHtml;
}

app.get("*",async (req, res) => {
   const indexHtml = createReactApp(req.url);
   res.status(200).send(indexHtml);
});

const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}/`);
});
