import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Projects from "./components/Projects";






class App extends Component{
  render(){
    return(
      <Wrapper>
        <Header/>
        <Projects/>
      </Wrapper>
    )
  }
};

export default App;

