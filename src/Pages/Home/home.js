import { useState, useEffect, Component} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/header.js';
import TextOne from "../../components/Text/textBoxOne.js";
import SideNav from "../../components/SideNav/sideNav.js";
import { Grid, GridColumn, GridRow, Image, Divider, Icon, Transition,} from "semantic-ui-react";
import TextTwo from "../../components/Text/textBoxTwo.js";
import TextThree from "../../components/Text/textBoxThree.js";
import "./../../index.css";




  
const Home = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState("");
  const [clicked, setClicked] = useState(false);
 
  



  useEffect(() => {
    if (clicked) {
      navigate("/projectsPage/" + project);
      console.log(navigate);
    }
  }, [clicked, project, navigate]);



  return (
    <>
      <Header />
      {clicked && <Navigate to={"/projectsPage/" + project} />}
      <Grid centered columns={2} >
        <GridColumn width={12} textAlign="center">
          <TextOne className="textOne" />
        </GridColumn>
      </Grid>
      <br></br>
      <br></br>


      <Divider horizontal >
        <div className="dividerFont">

          What I Bring to the Table

        </div>
      </Divider>
      <br></br>


      <Grid className="secondRow" centered columns={2}>
        {/*Computer*/}
        <GridRow only='computer' columns={2}>
          <GridColumn width={7} verticalAlign='middle' className="sideNavContainer" >
         
         <SideNav/>
       
            
         
          </GridColumn>
          <GridColumn width={8} >
            <TextTwo />
          </GridColumn>
        </GridRow>
        {/*Mobile*/}
        <GridRow only="mobile" columns={1}>
          <GridColumn centered width={15}>
            <SideNav />
          </GridColumn>
        </GridRow>
        <GridRow only="mobile" columns={1}>
          <GridColumn centered textAlign="center" width={14}>
            <TextTwo />
          </GridColumn>
        </GridRow>
      </Grid>




      <Divider horizontal>

        <p className="dividerFont">About Me</p>

      </Divider>



      <Grid verticalAlign='middle' columns={3} centered>
        {/*Computer*/}
        <GridRow only='computer'>
          <GridColumn verticalAlign='middle'>
            <TextThree />
          </GridColumn>
          <GridColumn center>
            <Image size="medium" circular src="../../../Images/MainPagePhoto.png" />
          </GridColumn>
        </GridRow>
        {/*Mobile*/}
        <GridRow only="mobile" columns={1}>
          <GridColumn centered width={14}>
            <Image size="small" circular centered src="../../../Images/MainPagePhoto.png" />
          </GridColumn>
        </GridRow>
        <GridRow only="mobile" columns={1}>
          <GridColumn centered textAlign="center" width={14}>
            <TextThree />
          </GridColumn>
        </GridRow>
      </Grid>
    </>
  )
  }






export default Home;








