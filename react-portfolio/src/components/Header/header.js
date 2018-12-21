import React from "react";
import {Link} from "react-router-dom"
import { Button, Icon } from 'semantic-ui-react';
import "./header.css";

const Header = () =>(
    <div className="headerContainer">
    <Link className="h1"  style={{color:'#82b6ce'}} to="/">Allison Driver</Link>
    <Link className="link"  style={{color:'#82b6ce'}} to="/resume">Resumé</Link>
    <div className="icons">
         <Button href="https://github.com/adrive22">
        <i class="fab fa-github-square githubIcon"></i>
        </Button>
         <Button href="https://www.linkedin.com/in/allison-driver/" icon>
          <i class="fab fa-linkedin-in linkedinIcon"></i>
         </Button>
    </div> 
    </div>
);

export default Header;
