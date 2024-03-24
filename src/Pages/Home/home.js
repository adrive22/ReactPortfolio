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
    <GridColumn textAlign="center">
    <TextOne className="bodyBack"/>
    </GridColumn>
    </Grid>
<br></br>
<br></br>


    <Divider  horizontal >
      <div className="dividerFont">
    
      What I Bring to the Table
    
      </div>
    </Divider>


<Grid centered columns={2}>
    <GridRow  columns={2}>
      <GridColumn width={7}verticalAlign='middle' className="sideNavContainer" >
        <SideNav />
      </GridColumn>
      <GridColumn width={7} >
      <TextTwo />
      </GridColumn>
    </GridRow>
</Grid>


<Divider horizontal>
      
<p className="dividerFont">About Me</p>
      
    </Divider>



<Grid verticalAlign='middle' columns={3} centered>
    <GridRow >
      <GridColumn verticalAlign='middle'>
        <TextThree/>
      </GridColumn>
      <GridColumn center>
      <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular />
      </GridColumn>
    </GridRow>
  </Grid>
  
</>
  )
}



export default Home;








