import React, { Component } from 'react';


import {Redirect, BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import Text from "../../components/TextBoxOne";
import Bar from"../../components/Bar";
import ProjectImage from "../../components/Projects/projectsLoop.js";
import ProjectsPage from "../ProjectPage";



class Home extends Component{

state = {
  project: "",
  clicked:"false"
}








getId = (id) => {

console.log(id);


switch (id)
{
 case "1": this.setState({
     projectId:"ShowMaps",
     clicked:"true"
     
 })
 

 break;
 
 case "2": this.setState({
  projectId:"EyeCandy",
  clicked:"true"
 })
 break;
 
 case "3":  this.setState({
  projectId:"CoverArt",
  clicked:"true"
 })
 break;
 
 default: console.log("default")
}

}





  render(){
    if(this.state.clicked==="true")
    return <Redirect to={"/projectsPage/"+this.state.projectId}/>
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

export default Home;

