import React from "react";
import logo from './logo.svg';
import './App.css';
import { Router, Routes, Route, Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom" 
import Home from "./Pages/Home/home.js"


function App() {
  return (
   <>
   <Routes>
   <Route navigate={useNavigate}/>
   <Route path="/" element={<Home/>}/>

   </Routes>
   </>
   
  );
}

export default App;
