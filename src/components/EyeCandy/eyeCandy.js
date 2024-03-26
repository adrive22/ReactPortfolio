import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./index.css"
import Header from "../Header/header.js";
import { GridRow, Divider, Container, GridColumn, Grid, Image} from 'semantic-ui-react';



console.log("hello");

const EyeCandy = () => {




    return(
        <>
       <Header/>
       <Grid  centered className="projectContainer" >
        <GridRow columns={1} centered className="projectImage">
{/*computer*/}
        <GridColumn only="computer" >
          <Image centered size="huge" src="../../../Images/EyeCandy2.jpg" />
        </GridColumn>
{/*mobile*/}
        <GridColumn centered only="mobile">
          <Image size="medium" centered src="../../../Images/EyeCandy2.jpg" />
        </GridColumn>
</GridRow>


{/*computer*/}
<GridRow only="computer"  columns={2} >
  <GridColumn textAlign="right" >
  <Link  style={{color:'#82b6ce'}} to="https://adrive22.github.io/EyeCandy">View the Project Page in Action</Link>
  </GridColumn>
  <GridColumn textAlign="left" >
    <Link style={{color:'#82b6ce'}} to="https://github.com/adrive22/EyeCandy">View the Code for This Project on Github</Link>
  </GridColumn>
</GridRow>

{/*mobile*/}
<GridRow only="mobile" columns={2} >
  <GridColumn textAlign="center" >
  <Link  style={{color:'#82b6ce'}} to="https://adrive22.github.io/EyeCandy">View the Project Page in Action</Link>
  </GridColumn>
  <GridColumn textAlign="center" >
    <Link style={{color:'#82b6ce'}} to="https://github.com/adrive22/EyeCandy">View the Code for This Project on Github</Link>
  </GridColumn>
</GridRow>



{/*computer*/}
<GridRow only="computer" columns={2}>
<GridColumn textAlign="centered">
<p className="test p-pText">This web app uses Javascript, JQuery, AJAX, and the Giphy API, coupled with Semantic-UI styling to bring you an active entertaining world of giphs of your choosing. You can add buttons to search the Giphy API, and you can start and stop the giphs themselves. The page reloads after refreshing or leaving the site.</p>
</GridColumn>
</GridRow>
{/*mobile*/}
<GridRow  only="mobile" centered >
<GridColumn textAlign="center" padded centered>
<p className="test p-pText" >This web app uses Javascript, JQuery, AJAX, and the Giphy API, coupled with Semantic-UI styling to bring you an active entertaining world of giphs of your choosing. You can add buttons to search the Giphy API, and you can start and stop the giphs themselves. The page reloads after refreshing or leaving the site.</p>
</GridColumn>
</GridRow>

</Grid>
        </>
            
        
    )
    }


export default EyeCandy;


