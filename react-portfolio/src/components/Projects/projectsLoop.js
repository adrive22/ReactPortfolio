//This method is looping through the JSON doc to create individual objects

import React from "react";
import ProjectData from "./projectsJson.js";
import Projects from "./projectImages.js";
import {Route} from "react-router-dom";





const ProjectImage  = (props) => {
    console.log(props)
    

    return ProjectData.map(item =>
        
        <Projects className="projects" projectData={item} id={item.id} image={item.image} link={item.link} getId={props.getId} 
    />

    
    


    )

  

 
}

export default ProjectImage