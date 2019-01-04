import React from "react";
import {Link} from "react-router-dom"
import { Button, Icon } from 'semantic-ui-react';
import "./header.css";
import Resume from "../../Pages/Resume";

const Header = () => (
    <div className="headerContainer">
    <Link className="h1"  style={{color:'#82b6ce'}} to="/">Allison Driver</Link>
    <Resume/>
    <div className="icons">
         <Button href="https://github.com/adrive22">
        <i class="fab fa-github-square githubIcon"></i>
        </Button>
         <Button href="https://www.linkedin.com/in/allison-driver/" icon>
          <i class="fab fa-linkedin-in linkedinIcon"></i>
         </Button>
         <Button className="websiteLink" style={{color:'#528fa8'}} href="https://github.com/adrive22/ReactPortfolio/tree/master/react-portfolio">See the code for this website
         </Button>
    </div> 
    </div>
);

export default Header;
