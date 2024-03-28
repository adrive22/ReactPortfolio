import {  Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react'
import React from  'react'
import { MenuMenu, MenuItem, Menu } from 'semantic-ui-react'
import "./header.css";
import {Dropdown, DropdownMenu, DropdownItem, Button} from "semantic-ui-react"
import { useNavigate } from "react-router-dom" 



function Header () {
  
  const navigate = useNavigate();


    return ( 
      <>


    <div className="headerContainer">

    
      <Menu className="headerMenu">
        <Link href="/" className="h1" >Allison Driver</Link>
  <MenuMenu position='right'>
      <MenuItem
     
      className="wordNav"
         href="/"
         name='Home'
         onClick={() => navigate("/home")}
      >
        Home
      </MenuItem>
     
       <MenuItem
      
      className="wordNav"
         href="/projectsPage"
         name='projects'
         onClick={() => navigate("/projects")}
      >
        Projects
      </MenuItem>
        <MenuItem
        className="wordNav">
        <Link
         to="https://drive.google.com/file/d/1k7U-ybHr0VxH14p5x99mAJHXFaTDfZ9E/view?usp=sharing"
        >
        Résumé
        </Link>
        </MenuItem>
        <MenuItem className="wordNav" >
        <Link to="https://www.linkedin.com/in/allison-driver/">
                   <Icon link name='linkedin grey large'/>
                 </Link>
                 </MenuItem>
                 <MenuItem className="wordNav" >
                 <Link className="wordNav"to="https://github.com/adrive22"> 
                   <Icon link name='github grey square'/>
                 </Link> 
                 </MenuItem> 
         <MenuItem className="smallScreenNav"vertical>
         <Dropdown   item icon='bars grey big '>
           <DropdownMenu>
             <DropdownItem 
              href="/">
                Home
                </DropdownItem>
             <DropdownItem 
             href="/projectsPage">
              Projects
              </DropdownItem>
             <DropdownItem
             className="dropdownLink"
            href="https://drive.google.com/file/d/1k7U-ybHr0VxH14p5x99mAJHXFaTDfZ9E/view?usp=sharing">
              Résumé
              </DropdownItem>
              <DropdownItem
               className="dropdownLink" >
              <Link to="https://www.linkedin.com/in/allison-driver/">LinkedIn</Link>
               </DropdownItem>
               <DropdownItem>
               <Link to="https://github.com/adrive22">Github</Link>
               </DropdownItem>
           </DropdownMenu>
         </Dropdown>
         </MenuItem> 
         </MenuMenu>
         </Menu>
       
      
     </div>

   </>  
     

     )
 }
 
 
 
 export default Header;