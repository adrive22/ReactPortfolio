import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Home from "./Pages/Home";

// import EyeCandy from "./Pages/EyeCandy";
import ProjectsPage from "./Pages/ProjectPage";






class App extends Component {

  state={
    projectId:"",
    imageClicked: "false",
  }


actualProject=(project) => {
  console.log(project);
}

  
  


render(){
  
   return( 

  <Router>
    <div>
   <Route path="/" exact= {true} render={(props)=><Home {...props} project={this.actualProject()}/>}/>

      <Route path="/projectsPage/:projectId" exact = {true} render={(props)=><ProjectsPage {...props} projectId={this.state.projectId}/> }/>
        
    </div>
  </Router>

)
}
}


export default App;

