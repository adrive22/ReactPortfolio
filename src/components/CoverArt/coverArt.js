import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "../Header/header.js";import "./index.css";
import { GridRow, Divider, Container, GridColumn, Grid, Image} from 'semantic-ui-react';

const CoverArt = () => {




    return(
        <>
        <Header/>
        <Grid className="projectContainer" centered >
        <GridRow columns={1} centered className="projectImage">
          {/*computer*/}
        <GridColumn only="computer" >
  <Image centered size="huge" src='../../../Images/CoverArt2.jpg' />
</GridColumn>
{/*mobile*/}
<GridColumn centered only="mobile">
          <Image size="medium" centered src='../../../Images/CoverArt2.jpg' />
        </GridColumn>
</GridRow>




{/*computer*/}
<GridRow only="computer" centered columns={2}>
  <GridColumn  textAlign="right" >
  <Link classname="ppLinks" style={{color:'#415e6b', background:'#FFF'}} to="https://intense-hamlet-79255.herokuapp.com">View the Project Page in Action</Link>
  </GridColumn>
  <GridColumn textAlign="left" >
    <Link  style={{color:'#415e6b'}} to="https://github.com/adrive22/AlbumCoverShuffle">View the Code for This Project on Github</Link>
  </GridColumn>
</GridRow>
{/*mobile*/}
<GridRow only="mobile" centered columns={2}>
  <GridColumn  textAlign="center" >
  <Link classname="ppLinks" style={{color:'#415e6b', background:'#FFF'}} to="https://young-peak-52854-e0cb5335d194.herokuapp.com">View the Project Page in Action</Link>
  </GridColumn>
  <GridColumn textAlign="center" >
    <Link  style={{color:'#415e6b'}} to="https://github.com/adrive22/AlbumCoverShuffle">View the Code for This Project on Github</Link>
  </GridColumn>
</GridRow>








{/*computer*/}
<GridRow only="computer"centered columns={2}>
<GridColumn textAlign="centered">
<p className="test p-pText ">This React web game uses images stored in a JSON file and shuffles them in random order everytime one of the images is clicked. If you click the same image twice, then you will be alerted and the score will be reset. This game also records the highest score that you have achived overall while you are still on the same page. This game was created using create-react-app.</p>
</GridColumn>
</GridRow>
{/*mobile*/}
<GridRow  only="mobile" centered >
<GridColumn textAlign="center" padded centered>
<p className="test p-pText">This React web game uses images stored in a JSON file and shuffles them in random order everytime one of the images is clicked. If you click the same image twice, then you will be alerted and the score will be reset. This game also records the highest score that you have achived overall while you are still on the same page. This game was created using create-react-app.</p>
</GridColumn>
</GridRow>
<br></br>
</Grid>
        </>
        
    
        
    )
    }


export default CoverArt;


