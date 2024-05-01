import React from "react";
import logo from './logo.svg';
import './App.css';
import { Router, Routes, Route, Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom" 
import Home from "./Pages/Home/home.js"
import "./index.css"
import EyeCandy from "./components/EyeCandy/eyeCandy.js";
//import Resume from "./Pages/Resume/resume.js"
import BouncingBalls from "./components/BouncingBalls/bouncingBalls.js";
import CoverArt from "./components/CoverArt/coverArt.js";
import ProjectsPage from "./Pages/ProjectPage/projectPage.js";
import 'semantic-ui-css/semantic.min.css'





function App() {

   
  
  return (
   <>
   <Routes>
   <Route navigate={useNavigate}/>
   <Route path="/" element={<Home/>}/>
    <Route path="/projectsPage/EyeCandy"  element={<EyeCandy/>} />
    <Route path="/projectsPage/CoverArt"  element={<CoverArt/>} />
    <Route path="/projectsPage"  element={<ProjectsPage/>} />
    <Route path="/projectsPage/BouncingBalls"  element={<BouncingBalls/>} />
    <Route path="/resume" element={''}/>
   </Routes>
   </>
   
  );
}
export default App;
