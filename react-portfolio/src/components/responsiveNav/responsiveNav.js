import React, {Component} from "react";
import "./index.css";


class responsiveNav extends Component {
    
    render(){
        return(
    
    <nav className="navbar container-fluid navbar-expand-lg navbar-light bg-light">
    <a className="h1" href="allisondriverportfolio.com">Allison Driver</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        
      <ul className="navbar-nav">
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Projects
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="https://allisondriverportfolio.com/projectsPage/ShowMaps">ShowMaps</a>
          <a class="dropdown-item" href="https://allisondriverportfolio.com/projectsPage/EyeCandy">Eye Candy</a>
          <a class="dropdown-item" href="https://allisondriverportfolio.com/projectsPage/CoverArt">Album Cover Game</a>
          <a class="dropdown-item" href="https://github.com/adrive22/CanvasAnimations">Canvas Animations</a>
        </div>
      </li>
        <li className="nav-item">
          <a className="nav-link" href="https://docs.google.com/document/d/1DxVyld6atROCaqW_g-RVUSUle9VM9jhNI9z8FrbFTWQ/edit?usp=sharing">Resume <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/adrive22">Github</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/allison-driver/">LinkedIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="https://github.com/adrive22/ReactPortfolio/tree/master/react-portfolio">See the Code for this Website</a>
        </li>
      </ul>
    </div>
  </nav>

        )
    }


}


export default responsiveNav;