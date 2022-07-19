
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import './css/style.css';
import '../src/fonts/DiaryOfAWimpyKidFont-Regular.ttf'
import {
   
    Link
  } from "react-router-dom";

import App from "./App";
import Footer from "./footer";
import Headeer from "./header";
import Banner from "./banner";
import Roadmap from "./roadmap";
// import Our_Nft from "./our_nft";
// import The_Team from "./The_Team";
import Faqs from "./Faqs";


const Main = () => {






    return (
        <>
        
        <Headeer/>
        <Banner/>
        <Roadmap/>
        <Faqs/>
    <Footer/>  
  
     
      
        </>
    )
}

export default Main;