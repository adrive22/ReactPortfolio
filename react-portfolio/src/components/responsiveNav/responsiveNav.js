import React, {Component} from "react";
import "./index.css";


class responsiveNav extends Component {
    
    render(){
        return(
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <a class="dropdown-item" href="#">ShowMaps</a>
          <a class="dropdown-item" href="#">Album Cover Game</a>
          <a class="dropdown-item" href="#">Eye Candy</a>
        </div>
      </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Resume <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Github</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">LinkedIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">See the Code for this Website</a>
        </li>
      </ul>
    </div>
  </nav>
        )
    }


}


export default responsiveNav;