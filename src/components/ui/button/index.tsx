import React from "react";

import "@components/ui/button/style.css";
import {ButtonProp} from "@components/ui/button/interface";

function Button(props:ButtonProp){
   return(
     <button className="btn">{props.text}</button>
   );
}

export default Button;
