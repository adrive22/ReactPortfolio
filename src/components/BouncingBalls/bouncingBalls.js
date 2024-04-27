import React from "react";
import { Link } from "react-router-dom";
import "./index.css"
//import EyeCandyImg2 from 'Images/EyeCandy2.jpg'; // importing image
import Header from "../Header/header.js";
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react';




const BouncingBalls = () => {
        return (
                <>

                        <Header />
                        <Grid centered verticalAlign='middle'>
                                <GridRow columns={1} centered className="bb">

                                        {/*computer*/}
                                        <GridColumn only="computer" >
                                                <Image size='huge' centered src="../../../Images/BouncingBalls2.png" />
                                        </GridColumn>
                                        {/*mobile*/}
                                        <GridColumn centered only="mobile">
                                                <Image size="medium" centered src="../../../Images/BouncingBalls2.png" />
                                        </GridColumn>
                                </GridRow>

                                {/*computer*/}
                                <GridRow only="computer" centered columns={2} textAlign="centered">
                                        <GridColumn textAlign="right">
                                                <Link style={{ color: '#82b6ce' }} to="https://adrive22.github.io/BouncingBalls">View the Project Page in Action</Link>
                                        </GridColumn>
                                        <GridColumn textAlign="left">
                                                <Link style={{ color: '#82b6ce' }} to="https://github.com/adrive22/BouncingBalls">View the Code for This Project on Github</Link>
                                        </GridColumn>
                                </GridRow>
                                {/*mobile*/}
                                <GridRow only="mobile" centered columns={2} textAlign="centered">
                                        <GridColumn textAlign="center">
                                                <Link style={{ color: '#82b6ce' }} to="https://adrive22.github.io/BouncingBalls">View the Project Page in Action</Link>
                                        </GridColumn>
                                        <GridColumn textAlign="center">
                                                <Link style={{ color: '#82b6ce' }} to="https://github.com/adrive22/BouncingBalls">View the Code for This Project on Github</Link>
                                        </GridColumn>
                                </GridRow>







                                {/*computer*/}
                                <GridRow only="computer" columns={2}>
                                        <GridColumn textAlign="centered">
                                                <p className="test p-pText">Explore the captivating world of bouncing balls on this interactive web page. Using HTML, CSS, and JavaScript, this project showcases the mesmerizing motion of colorful balls gracefully bouncing across the screen. Each ball follows its unique trajectory, creating an engaging visual experience. With smooth animations and dynamic interactions, this demonstration highlights the creative potential of web development technologies. Dive into the playful realm of bouncing balls and witness the seamless synergy of design and code.</p>
                                        </GridColumn>
                                </GridRow>
                                {/*mobile*/}
                                <GridRow only="mobile" centered >
                                        <GridColumn textAlign="center" padded centered>
                                                <p className="test p-pText">This small project showcases the power of HTML, CSS, Javascript, and Canvas alone with mesmerizing motion of colorful balls gracefully bouncing across the screen. Each ball follows its unique trajectory, creating an engaging visual experience. With smooth animations and dynamic interactions, this demonstration highlights the creative potential of web development technologies.</p>
                                        </GridColumn>
                                </GridRow>
                                <br></br>


                        </Grid>
                </>


        )
}


export default BouncingBalls;


