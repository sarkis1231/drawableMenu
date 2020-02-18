import React from "react";
import DashBoard from "../DashBoard/DashBoard";


const DashBoardLayout =  (props) =>{
    return (
        <div>
        <DashBoard>
            {props.children}
        </DashBoard>

        </div>
    );
};



export default DashBoardLayout;
