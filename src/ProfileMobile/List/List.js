import React, { useState, useEffect, useContext } from "react";
import "./index.scss";
function List({Title,...props}) {
    return(
     <div className="dataBox">
         <div className="titleBox">
                 <h4 className="title">{Title}</h4>
         </div>
     </div>
    );
}

export default List;
