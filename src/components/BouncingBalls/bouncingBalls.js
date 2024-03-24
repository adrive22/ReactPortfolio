import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css"
//import EyeCandyImg2 from 'Images/EyeCandy2.jpg'; // importing image
import Header from "../Header/header.js";
import BouncingBalls2 from "../../../Images/BouncingBalls2.png";
import { GridRow, Divider, Container, GridColumn, Grid, Image} from 'semantic-ui-react';

console.log("hello");

const BouncingBalls = () => {




    return (
        <>
            
<Header/>
<Grid centered columns={2}>
<GridColumn container fluid >
<Image size='massive' fluid src={BouncingBalls2}/>
</GridColumn>

<GridRow centered columns={2} textAlign="centered">
<GridColumn textAlign="right">
<Link   style={{color:'#82b6ce'}} to="https://adrive22.github.io/BouncingBalls">View the Project Page in Action</Link>
</GridColumn>
<GridColumn textAlign="left">
<Link  style={{color:'#82b6ce'}} to="https://github.com/adrive22/BouncingBalls">View the Code for This Project on Github</Link>
</GridColumn>
</GridRow>


<GridRow centered columns={2}>
<GridColumn textAlign="centered">
<p className="test p-pText">Explore the captivating world of bouncing balls on this interactive web page. Using HTML, CSS, and JavaScript, this project showcases the mesmerizing motion of colorful balls gracefully bouncing across the screen. Each ball follows its unique trajectory, creating an engaging visual experience. With smooth animations and dynamic interactions, this demonstration highlights the creative potential of web development technologies. Dive into the playful realm of bouncing balls and witness the seamless synergy of design and code.</p>
</GridColumn>
</GridRow>
</Grid>
    </>


    )
}


export default BouncingBalls;


