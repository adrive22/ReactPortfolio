import React from "react";
import logo from './logo.svg';
import './App.css';
import Home from "../components/header.js";
import { Router, Routes, Route, Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom" 



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
