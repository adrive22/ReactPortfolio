import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
import history from "../../history.js"


console.log("hello");

const Showmaps = () => {




    return(
        
        <div className="projectContainer">
         <div className="imagesContainer">
            <img className="projectMainImage" src={require("../../images/showmaps2.jpg")}></img> 
                <ul className="projectList">
                <Link className="projectLink ShowmapsLink" style={{color:'#82b6ce'}} to="/projectsPage/ShowMaps">Showmaps</Link>
                <Link className="projectLink EyeCandyLink" style={{color:'#82b6ce'}} to="/projectsPage/EyeCandy">Eye Candy</Link>
                <Link className="projectLink AlbumLink" style={{color:'#82b6ce'}} to="/projectsPage/CoverArt">Album Art</Link>
                <a className="projectLink CanvasLink" style={{color:'#82b6ce'}} href="https://github.com/adrive22/CanvasAnimations">Canvas Animations</a>
                </ul>
            </div>
            <p className="test">This React App is an innovative way for users to ee what shows are happening near them
                                in the Austin area without having to cross reference difference platforms individually to
                                get the information they need. When a user opens the website, the app will center on their location, 
                                and set a blue marker with an info window that says "your location". It It will also pull shows up 
                                from the Mlab databaswe that are happening for that day by cross referencing the day of the show with today.
                                It will then set markers for all shows in red on the map. When any of the markers for a show is clicked, the infor will will show the venue name, 
                                the artist playing, and the time of the show.  </p>
                                <p className="test">This app uses create-react-app, MongoDB with Mlab
                                Mongoose, Express, Node, Axios, Google Maps API with Geolocation, momentjs
                                and the google-maps-react npm package to help integrate the Google Maps API with React.</p>
                <a className="webLink" href="https://mysterious-depths-46018.herokuapp.com/">View the Project Page</a>
                <p className="codeLink">The code for this project is available upon request</p>

        </div> 
        
            
        
    )
    }


export default Showmaps;