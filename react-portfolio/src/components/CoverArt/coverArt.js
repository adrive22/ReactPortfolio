import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./index.css";


console.log("hello");

const CoverArt = () => {




    return(
        
          
        <div className="projectContainer">
         <div className="imagesContainer">
            <img className="projectMainImage" src={require("../../images/CoverArt2.jpg")}></img>
                <ul className="projectList">
                <Link className="projectLink" style={{color:'#82b6ce'}} to="/projectsPage/ShowMaps">Showmaps</Link>
                <Link className="projectLink" style={{color:'#82b6ce'}} to="/projectsPage/EyeCandy">Eye Candy</Link>
                <Link className="projectLink" style={{color:'#82b6ce'}} to="/projectsPage/CoverArt">AlbumArt</Link>
                <a className="projectLink CanvasLink" style={{color:'#82b6ce'}} href="https://github.com/adrive22/CanvasAnimations">Canvas Animations</a>
                </ul>
            </div>
            <p className="test">This React web game uses images stored in a JSON file and shuffles them in random order everytime one of the imagews is clicked. If you clicke the same image twice, then you will be alerted and the score will be reset. T
            his game also records the highest score that you have achived overall while you are still on the same page. This game was created using create-react-app.</p>
            <a className="webLink" href="https://intense-hamlet-79255.herokuapp.com">View the Project Page</a>
            <a className="codeLink" href="https://github.com/adrive22/AlbumCoverShuffle">View the Code</a>

        </div> 
            
        
    )
    }


export default CoverArt;