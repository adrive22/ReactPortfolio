import React, { useEffect,useState } from 'react';
import { Embed } from "semantic-ui-react"
import {Grid, GridColumn} from "semantic-ui-react"
import { useNavigate } from 'react-router-dom';

function GoogleDocsViewer() {
  const [isEmbedActive, setIsEmbedActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsEmbedActive(true); // Activate the embed upon component mount
  }, []); // Empty dependency array ensures that this effect runs only once after the component mounts



  return (
    <>
    <Grid>
    <GridColumn only="computer">
    <Embed
    icon='right circle arrow'
    placeholder='/images/image-16by9.png'
  

      url="https://docs.google.com/document/d/1VEntXTIjb3kF8sIPlKkvDS9V2tZJS1RgKkAhthd_lno/edit"
      active={isEmbedActive}
    />
    </GridColumn>
    </Grid>

<Grid only="mobile">
 <GridColumn only="mobile">
 <Embed
 icon='right circle arrow'
 placeholder='/images/image-16by9.png'
   url="https://docs.google.com/document/d/1VEntXTIjb3kF8sIPlKkvDS9V2tZJS1RgKkAhthd_lno/edit"
   active={isEmbedActive}
  
 />
 </GridColumn>
 </Grid>
 </>




  );
}

export default GoogleDocsViewer;