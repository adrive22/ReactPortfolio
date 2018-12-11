import React, { Component } from 'react';
import { Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./Pages/Home";

// import EyeCandy from "./Pages/EyeCandy";
import ProjectsPage from "./Pages/ProjectPage";
import history from "./history.js";
import Resume from "./Pages/Resume";






class App extends Component {
  componentDidMount(){
    console.log("mounted");
  }

  state={
    projectId:"",
    imageClicked: "false",
  }


actualProject=(project) => {
  console.log(project);
}

  



render(){
  
   return( 

  <Router history={history}>
    <div>
   
   <Route path="/" exact= {true} render={(props)=> <Home {...props} project={this.actualProject()}/>}/>

      <Route path="/projectsPage/:projectId" exact = {true} render={(props)=><ProjectsPage  {...props} projectId={this.state.projectId}/> 
      }/>
      
    <Route path="/resume" exact={true} render={Resume}></Route>
    </div>
  </Router>

)
}
}


export default App;

