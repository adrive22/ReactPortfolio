import React, { Component } from 'react';

import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Text from "./components/TextBoxOne";
import Bar from"./components/Bar";
import ProjectImage from "./components/Projects/projectsLoop.js";
import Projects from "./components/Projects/projectImages.js"






class App extends Component{
  
  

  state = {
    projectId: "",
    
  }


getId = (id) => {
  console.log(id);
  
  switch (id)
{
   case "1": console.log("numerouno");
   
   
   break;
   
   case "2": console.log("numerdos")
   break;
   
   case "3": console.log("numerotres")
   break;
   
   default: console.log("default")
}
}


componentDidMount = () =>{
  
  
}


  

  



  render(){
    
    return(
      <Wrapper>
        <Header/>
        <Text/>
        <ProjectImage getId={this.getId}/>
        <Bar/>
      </Wrapper>
    )
  }
};

export default App;

