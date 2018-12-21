import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
import history from "../../history.js"


console.log("hello");

const Showmaps = () => {




    return(
        
        <div className="projectContainer">
         <div className="imagesContainer">
            <img className="projectMainImage" src="https://via.placeholder.com/300x150"></img>
                <ul className="projectList">
                <Link className="projectLink" style={{color:'#82b6ce'}} to="/projectsPage/ShowMaps">Showmaps</Link>
                <Link className="projectLink" style={{color:'#82b6ce'}} to="/projectsPage/EyeCandy">Eye Candy</Link>
                <Link className="projectLink" style={{color:'#82b6ce'}} to="/projectsPage/CoverArt">Album Art</Link>
                </ul>
            </div>
            <p className="test">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


        </div> 
        
            
        
    )
    }


export default Showmaps;