import { useState, useEffect, } from 'react';
import {  Navigate, useNavigate  } from 'react-router-dom';
import Header from '../../components/Header/header.js';
import TextOne from "../../components/Text/textBoxOne.js";
import SideNav from "../../components/SideNav/sideNav.js";
import {Grid, GridColumn, GridRow, Image, Divider, Icon} from "semantic-ui-react";
import TextTwo from "../../components/Text/textBoxTwo.js";
import TextThree from "../../components/Text/textBoxThree.js";
import "./../../index.css";




function Home () {
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
    <GridColumn width={10} textAlign="center">
    <TextOne className="textOne"/>
    </GridColumn>
    </Grid>
<br></br>
<br></br>


    <Divider  horizontal >
      <div className="dividerFont">
    
      What I Bring to the Table
    
      </div>
    </Divider>
    <br></br>


<Grid className="secondRow" centered columns={2}>
    <GridRow only='computer' columns={2}>
      <GridColumn width={7}verticalAlign='middle' className="sideNavContainer" >
        <SideNav />
      </GridColumn>
      <GridColumn width={7} >
      <TextTwo />
      </GridColumn>
    </GridRow>
    <GridRow only="mobile" columns={1}>
      <GridColumn  centered width={14}>
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
    <GridRow only='computer'>
      <GridColumn verticalAlign='middle'>
        <TextThree/>
      </GridColumn>
      <GridColumn center>
      <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular />
      </GridColumn>
    </GridRow>
    <GridRow only="mobile" columns={1}>
      <GridColumn  centered width={14}>
      <Image centered src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular />
      </GridColumn>
    </GridRow>
      <GridRow only="mobile" columns={1}>
      <GridColumn centered textAlign="center" width={14}>
      <TextThree/>
      </GridColumn>
    </GridRow>
</Grid>



  
  </>

  )
}



export default Home;








