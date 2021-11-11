import React, {useEffect, useState} from "react";
import './App.css';
import './index.css'
import { css } from "@emotion/react";
import {PropagateLoader} from "react-spinners";
import Navbar from "./Components/Navbar";

function App() {

    const[loading,setLoading]=useState(true);
    const override=css`
        display: block;
      border-color: #FF1414;
      margin-top: 20%;
    `;

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },5000)
    })

  return (
    <div className="App">

        {
            loading?<PropagateLoader color={"#0af5ed"} loading={loading} css={override} size={40}/>:

               <Navbar />
        }
    </div>
  );
}

export default App;
