import React from "react";
import "./projects.css";
import showMaps from "../../Images/ShowMaps";
import EyeCandy from "../../Images/EyeCandy";
import CoverArt from "../../Images/CoverArt"




const JSON ={
    CoverArt:{
        "id": 1,
        "image": showMaps,
        "clicked": false
    },
    EyeCandy:{
        "id": 2,
        "image": EyeCandy,
        "clicked": false
     },
     ShowMaps:{
        "id": 3,
        "image": CoverArt,
        "clicked": false
    }
}

class Projects extends React.Component {
    render() {
      return (
        <div className="container">
          {Object.keys(JSON).map(key => (
            <div>
              <img className="projectImages" src={JSON[key].image} key={key}/>
            </div>
          ))}
        </div>
      );
    }
  }
  
  export default Projects;