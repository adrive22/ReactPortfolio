import React, { Component } from 'react';
import Showmaps from "../../components/Showmaps";
import EyeCandy from "../../components/EyeCandy";
import CoverArt from "../../components/CoverArt";





class ProjectsPage extends Component{



projectSwitch=()=>{
    const project=this.props.match.params.projectId
    console.log(project);

   
switch (project)
{
 case "ShowMaps": return <Showmaps/>;
break;
case "EyeCandy": return <EyeCandy/>;
break;
case "CoverArt": return <CoverArt/>;
break;
}
}


render(){
   
    return(
        <div>
            <h1>Projects</h1>
           {this.projectSwitch()}
            
        </div>
    )
}
}




export default ProjectsPage;