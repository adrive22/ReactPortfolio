//This method is looping through the JSON doc to create individual objects

import React from "react";
import ProjectData from "./projectsJson.js";
import Projects from "./projectImages.js"





const ProjectImage  = (props) => {
    console.log(props)
    

    return ProjectData.map(item => <Projects projectData={item} id={item.id} image={item.image} getId={props.getId}/>)
    
 
}

export default ProjectImage