import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./index.css"


console.log("hello");

const EyeCandy = () => {




    return(
        
          
        <div className="projectContainer">
         <div className="imagesContainer">
            <img className="projectMainImage" src={require("../../images/EyeCandy2.jpg")}></img>
                <ul className="projectList">
                <Link className="projectLink" style={{color:'#82b6ce'}} to="/projectsPage/ShowMaps">Showmaps</Link>
                <Link className="projectLink" style={{color:'#82b6ce'}} to="/projectsPage/EyeCandy">Eye Candy</Link>
                <Link className="projectLink" style={{color:'#82b6ce'}} to="/projectsPage/CoverArt">AlbumArt</Link>
                <a className="projectLink CanvasLink" style={{color:'#82b6ce'}} href="https://github.com/adrive22/CanvasAnimations">Canvas Animations</a>
                </ul>
            </div>
            <p className="test">This web app uses Javascript, JQuery, AJAX, and the Giphy API, coupled with Semantic-UI styling to bring you an active entertaining world of giphs of your choosing. Y
            ou can add buttons to search the Giphy API, and you can start and stop the giphs themselves. The page reloads after refreshing or leaving the site."</p>
            <a className="webLink" href="https://adrive22.github.io/EyeCandy">View the Project Page</a>
            <a className="codeLink" href="https://github.com/adrive22/EyeCandy">View the Code</a>

        </div> 
        
            
        
    )
    }


export default EyeCandy;