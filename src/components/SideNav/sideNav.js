import { React, Button, } from 'react'
import "./index.css";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import ContainerComponent from './container.js';
import { Icon } from "semantic-ui-react";


const SideNav = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('CoverArt');



  useEffect(() => {
    // Set the initial active tab when the component mounts
    setActiveTab("CoverArt");
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };



  return (
    <ContainerComponent className="sideNavContainer" >
      <div>
        <p className="title">Projects</p>
        <div className="ui top attached header tabular menu sideNavMenuItems">
          <a
            className={`sideText item ${activeTab === 'EyeCandy' ? 'active' : ''}`}
            onClick={() => handleTabClick('EyeCandy')}
          >
            Eye Candy
          </a>


          <a
            className={`sideText item ${activeTab === 'CoverArt' ? 'active' : ''}`}
            onClick={() => handleTabClick('CoverArt')}
          >
            Cover Art
          </a>
          <a

            className={`sideText item ${activeTab === 'BouncingBalls' ? 'active' : ''}`}
            onClick={() => handleTabClick('BouncingBalls')}
          >
            Bouncing Balls
          </a>

        </div>






        <div className={`projectContainer ui attached  ${activeTab === 'EyeCandy' ? 'active' : ''}`} >
          {activeTab === 'EyeCandy' && (
            <div>
              <p className="learnMore" onClick={() => navigate("/projectsPage/EyeCandy")}>
                <Icon name="angle  right" />
                Learn More
                <Icon name="angle  left" />
              </p >

              <img onClick={() => navigate("/projectsPage/EyeCandy")} className="ui fluid image " src="../../../Images/EyeCandy.png" alt="Eye Candy" />

            </div>
          )}
        </div>
        <div className={`projectContainer ui attached   ${activeTab === 'CoverArt' ? 'active' : ''}`} >
          {activeTab === 'CoverArt' && (
            <div>
              <p className="learnMore" onClick={() => navigate("/projectsPage/CoverArt")}>
                <Icon name="angle  right" />
                Learn More
                <Icon name="angle  left" />
              </p >

              <img onClick={() => navigate("/projectsPage/CoverArt")} className="ui fluid image " src="../../../Images/coverArtShuffle.png" alt="Cover Art" />

            </div>
          )}
        </div>
        <div className={`projectContainer ui attached   ${activeTab === 'BouncingBalls' ? 'active' : ''}`}  >
          {activeTab === 'BouncingBalls' && (
            <div>
              <p className="learnMore" onClick={() => navigate("/projectsPage/BouncingBalls")}>
                <Icon name="angle  right" />
                Learn More
                <Icon name="angle  left" />
              </p >
              <img onClick={() => navigate("/projectsPage/BouncingBalls")} className="ui fluid image " src="../../../Images/BouncingBalls.png" alt="Bouncing Balls" />
            </div>
          )}
        </div>
      </div>
    </ContainerComponent>
  )
}
export default SideNav;