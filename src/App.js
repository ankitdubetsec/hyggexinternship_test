import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";

import { useState } from "react";
import FAQ from "./faqs/FAQ";
import './App.css'
import Path from "./components/Intro/Path";
function App(props) {
  const [dark,setdark]=useState(true);
  console.log(dark)

  return (
    <div className="App"   >
      {/* style={{backgroundColor:"black",color:"white"}} */}
      <Navbar dark={dark}  setdark={setdark}/>
      <Path/>
      <Intro/>
      <FAQ/>
      
    </div>
  );
}

export default App;
