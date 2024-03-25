
import  { React, useState, useEffect} from 'react';
import { useParams, Navigate  } from 'react-router';
import "./project.css";
import Header from "../../components/Header/header.js";

import { useNavigate } from 'react-router-dom';
import ProjectImages from "../Home/projectImages2.js";


function ProjectPage () {
  const navigate = useNavigate();
  const [project, setProject] = useState("/projectsPage");
  const [clicked, setClicked] = useState(false);
 
  


useEffect(() => {
  if (clicked) {
    navigate("/projectsPage/" + project);
    console.log(navigate);
  }
}, [clicked, project, navigate]);




return (
  <>
 
 
    {clicked && <Navigate to={"/projectsPage/" + project} />}
    <Header />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <ProjectImages/>
    
  </>

);

}


export default ProjectPage;




    







    
