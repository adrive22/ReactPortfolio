import React, { Component } from 'react';
import Showmaps from "../../components/Showmaps";
import EyeCandy from "../../components/EyeCandy";
import CoverArt from "../../components/CoverArt";
import "./project.css";
import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import history from "../../history.js"





class ProjectsPage extends Component{


componentDidMount = () => {
    history.push(history.location)
}
   
    
  

projectSwitch=()=>{
    const project=this.props.match.params.projectId
    console.log(project);

   


   
switch (project)
{
 case "ShowMaps": return <Showmaps/>
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
            <Header/>
            <div>
           {this.projectSwitch()}
            </div>
            <BottomNav/>



    </div>            
        
    )
}
}




export default  ProjectsPage;