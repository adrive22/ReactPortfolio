import React from "react";
import history from "../../history.js";
import "./projects.css";






const Projects = props => {
  console.log(props.projectData.image)
  return(
    
    <div className="imageContainer">
     <img onClick={() => props.getId(props.projectData.id)}   className="projectImages"  alt="placeholder" src={require(`../../images/${props.projectData.image}`)}/>
      </div>
    
  )
}

export default Projects 





