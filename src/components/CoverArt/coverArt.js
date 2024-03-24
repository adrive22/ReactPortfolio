import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "../Header/header.js";import "./index.css";
import { GridRow, Divider, Container, GridColumn, Grid, Image} from 'semantic-ui-react';

const CoverArt = () => {




    return(
        <>
        <Header/>
        <Grid centered columns={2}>
<GridColumn>
  <Image src='../../../Images/CoverArt2.jpg' />
</GridColumn>

<GridRow centered columns={2}>
  <GridColumn  textAlign="right" >
  <Link classname="ppLinks" style={{color:'#415e6b', background:'#FFF'}} to="https://intense-hamlet-79255.herokuapp.com">View the Project Page in Action</Link>
  </GridColumn>
  <GridColumn textAlign="left" >
    <Link  style={{color:'#415e6b'}} to="https://github.com/adrive22/AlbumCoverShuffle">View the Code for This Project on Github</Link>
  </GridColumn>
</GridRow>


<GridRow centered columns={2}>
<GridColumn textAlign="centered">
<p className="test p-pText ">This React web game uses images stored in a JSON file and shuffles them in random order everytime one of the images is clicked. If you click the same image twice, then you will be alerted and the score will be reset. T
            his game also records the highest score that you have achived overall while you are still on the same page. This game was created using create-react-app.</p>
</GridColumn>
</GridRow>
</Grid>
        </>
        
    
        
    )
    }


export default CoverArt;


