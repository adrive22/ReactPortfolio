import React, { Component,Link } from 'react';
import "./index.css";
import {Redirect} from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import Text from "../../components/TextBoxOne";
import Bar from"../../components/Bar";
import ProjectImage from "../../components/Projects/projectsLoop.js";
import BottomNav from "../../components/BottomNav";
import history from "../../history.js";
import MediaQuery from 'react-responsive';
import Nav from "../../components/responsiveNav";







class Home extends Component{

  componentDidMount=()=>{
    history.push("/");
    console.log(history);
  }


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
        <Nav/>
        <Text/>
        <ProjectImage getId={this.getId}/>
        <Bar/>
        <BottomNav/>
      </Wrapper>
     
      
    )
  }
};

export default Home;

