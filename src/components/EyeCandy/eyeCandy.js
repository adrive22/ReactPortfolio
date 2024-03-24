import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./index.css"
import EyeCandyImg2 from '../../../Images/EyeCandy2.jpg'; // importing image
import Header from "../Header/header.js";
import { GridRow, Divider, Container, GridColumn, Grid, Image} from 'semantic-ui-react';



console.log("hello");

const EyeCandy = () => {




    return(
        <>
       <Header/>
       <Grid centered columns={2}>
<GridColumn>
  <Image src={EyeCandyImg2} />
</GridColumn>

<GridRow  columns={2} >
  <GridColumn textAlign="right" >
  <Link  style={{color:'#82b6ce'}} to="https://adrive22.github.io/EyeCandy">View the Project Page in Action</Link>
  </GridColumn>
  
  <GridColumn textAlign="left" >
    <Link style={{color:'#82b6ce'}} to="https://github.com/adrive22/EyeCandy">View the Code for This Project on Github</Link>
  </GridColumn>
</GridRow>


<GridRow centered columns={2}>
<GridColumn textAlign="centered">
<p className="test p-pText">This web app uses Javascript, JQuery, AJAX, and the Giphy API, coupled with Semantic-UI styling to bring you an active entertaining world of giphs of your choosing. You can add buttons to search the Giphy API, and you can start and stop the giphs themselves. The page reloads after refreshing or leaving the site.</p>
</GridColumn>
</GridRow>
</Grid>
        </>
            
        
    )
    }


export default EyeCandy;


