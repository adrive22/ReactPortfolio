import React, { Component } from 'react';
import {Grid, GridRow, GridColumn, Card, Segment, Image, Header, Dimmer, HeaderSubheader, CardDescription,
  CardContent, Divider} from "semantic-ui-react"
import "./index.css"


class ProjectImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: [false, false, false] // Assuming there are 3 elements
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  // Function to handle mouse enter
  handleShow(index) {
    const { active } = this.state;
    active[index] = true;
    this.setState({ active });
  }

  // Function to handle mouse leave
  handleHide(index) {
    const { active } = this.state;
    active[index] = false;
    this.setState({ active });
  }

  render() {
    const { active } = this.state;

    return (
      <Grid padded='vertically' relaxed='very' columns='equal'>




      <GridRow only="computer" verticalAlign='middle'>
        <GridColumn/>
        <GridColumn width={5} textAlign='center'>
            <div className='homeText p-p'>
              Discover an interactive world of GIFs with this web app. Utilizing JavaScript, jQuery, AJAX, and the Giphy API, along with sleek Semantic-UI styling, it offers customizable GIF search and playback controls. Enjoy a seamless experience, even after refreshing or leaving the page.
            </div>
          </GridColumn>
        <GridColumn width={5} verticalAlign='middle'>
          <Card centered href='/projectsPage/EyeCandy'>
            <Segment
              onMouseEnter={() => this.handleShow(0)}
              onMouseLeave={() => this.handleHide(0)}
              style={{ cursor: 'pointer' }} // Apply cursor pointer style
            >
              <Image src='../../../Images/EyeCandy.png' />
              <Header className='title' textAlign='center'>Eye Candy</Header>
              <Dimmer active={active[0]} onMouseLeave={() => this.handleHide(0)}>
                <Header className='p-p' as='h2' icon inverted>
                  More Info
                  <HeaderSubheader className='p-p'>Eye Candy</HeaderSubheader>
                </Header>
              </Dimmer>
            </Segment>
            </Card>
        </GridColumn>
        <GridColumn />
      </GridRow>

      <GridRow only="mobile">
        <GridColumn fluid verticalAlign='middle'>
          <Card centered href='/projectsPage/EyeCandy'>
            <Segment
              onMouseEnter={() => this.handleShow(0)}
              onMouseLeave={() => this.handleHide(0)}
              style={{ cursor: 'pointer' }} // Apply cursor pointer style
            >
              <Image src='../../../Images/EyeCandy.png' />
              <Header className='title' textAlign='center'>Eye Candy</Header>
              <CardDescription textAlign="center">
              Discover an interactive world of GIFs with this web app. Utilizing JavaScript, jQuery, AJAX, and the Giphy API, along with sleek Semantic-UI styling, it offers customizable GIF search and playback controls. Enjoy a seamless experience, even after refreshing or leaving the page.
               </CardDescription>
              <Dimmer active={active[0]} onMouseLeave={() => this.handleHide(0)}>
                <Header className='p-p' as='h2' icon inverted>
                  More Info
                  <HeaderSubheader className='p-p'>Eye Candy</HeaderSubheader>
                </Header>
              </Dimmer>
            </Segment>
            </Card>
        </GridColumn>
      </GridRow>


<Divider only="mobile"/>




      
      <GridRow only="computer" verticalAlign='middle'>
        <GridColumn />
        <GridColumn width={5} verticalAlign='middle'>
          <Card centered href='/projectsPage/CoverArt'>
            <Segment
              onMouseEnter={() => this.handleShow(1)}
              onMouseLeave={() => this.handleHide(1)}
              style={{ cursor: 'pointer' }} // Apply cursor pointer style
            >
              <Image floated='left' src='../../../Images/coverArtShuffle.png' />
              <Header textAlign='center' className='title'>Cover Art Shuffle Game</Header>
              <Dimmer active={active[1]} onMouseLeave={() => this.handleHide(1)}>
                <Header className='p-p' as='h2' icon inverted>
                  More Info
                  <HeaderSubheader className='p-p'>Cover Art Shuffle Game</HeaderSubheader>
                </Header>
              </Dimmer>
            </Segment>
          </Card>
        </GridColumn>
        <GridColumn width={5} textAlign='center'>
          <div className='homeText p-p'>Dive into a React web game where images shuffle with each click. Avoid clicking the same image twice to maintain your score, all while tracking your highest score on-page. Built with create-react-app, it offers endless fun and challenge.</div>
        </GridColumn>
        <GridColumn />
      </GridRow>



      <GridRow only="mobile">
        <GridColumn fluid verticalAlign='middle'>
        <Card centered href='/projectsPage/CoverArt'>
            <Segment
              onMouseEnter={() => this.handleShow(0)}
              onMouseLeave={() => this.handleHide(0)}
              style={{ cursor: 'pointer' }} // Apply cursor pointer style
            >
              <Image floated='left' src='../../../Images/coverArtShuffle.png' />
              <Header className='title' textAlign='center'>Eye Candy</Header>
              <CardDescription textAlign="center">
              Dive into a React web game where images shuffle with each click. Avoid clicking the same image twice to maintain your score, all while tracking your highest score on-page. Built with create-react-app, it offers endless fun and challenge.
               </CardDescription>
              <Dimmer active={active[1]} onMouseLeave={() => this.handleHide(0)}>
                <Header className='p-p' as='h2' icon inverted>
                  More Info
                  <HeaderSubheader className='p-p'>Cover Art Shuffle Game</HeaderSubheader>
                </Header>
              </Dimmer>
            </Segment>
            </Card>
        </GridColumn>
      </GridRow>


      <Divider only="mobile"/>



      <GridRow only="computer" verticalAlign='middle'>
        <GridColumn />
        <GridColumn width={5} textAlign='center'>
          <div className='homeText p-p'>Dive into the captivating world of bouncing balls on this interactive web page. With HTML, CSS, and JavaScript, experience mesmerizing motion and vibrant colors as balls gracefully bounce across the screen. Explore the creative potential of web development technologies in this playful demonstration.</div>
        </GridColumn>
        <GridColumn width={5} verticalAlign='middle'>
          <Card centered href='/projectsPage/BouncingBalls'>
            <Segment
              onMouseEnter={() => this.handleShow(2)}
              onMouseLeave={() => this.handleHide(2)}
              style={{ cursor: 'pointer' }} // Apply cursor pointer style
            >
              <Image floated='right' src='../../../Images/BouncingBalls2.png' />
              <Header textAlign='center' className='title'>Bouncing Balls</Header>
              <Dimmer active={active[2]} onMouseLeave={() => this.handleHide(2)}>
                <Header className='p-p' as='h2' icon inverted>
                  More Info
                  <HeaderSubheader className='p-p'>Bouncing Balls</HeaderSubheader>
                </Header>
              </Dimmer>
            </Segment>
          </Card>
        </GridColumn>
        <GridColumn />
      </GridRow>


      <GridRow only="mobile">
        <GridColumn fluid verticalAlign='middle'>
        <Card centered href='/projectsPage/CoverArt'>
            <Segment
              onMouseEnter={() => this.handleShow(0)}
              onMouseLeave={() => this.handleHide(0)}
              style={{ cursor: 'pointer' }} // Apply cursor pointer style
            >
              <Image floated='right' src='../../../Images/BouncingBalls2.png' />
              <Header className='title' textAlign='center'>Bouncing Balls</Header>
              <CardDescription textAlign="center">
              Dive into the captivating world of bouncing balls on this interactive web page. With HTML, CSS, and JavaScript, experience mesmerizing motion and vibrant colors as balls gracefully bounce across the screen. Explore the creative potential of web development technologies in this playful demonstration.
               </CardDescription>
              <Dimmer active={active[2]} onMouseLeave={() => this.handleHide(0)}>
                <Header className='p-p' as='h2' icon inverted>
                  More Info
                  <HeaderSubheader className='p-p'>Bouncing Balls</HeaderSubheader>
                </Header>
              </Dimmer>
            </Segment>
            </Card>
        </GridColumn>
      </GridRow>





    </Grid>
  );
}
}
  // Export the component
  export default ProjectImages;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
//   <GridRow verticalAlign='middle'>
//   <GridColumn/>
//   <GridColumn width={5} textAlign='center'>
//       <div className='homeText p-p'>
//         Discover an interactive world of GIFs with this web app. Utilizing JavaScript, jQuery, AJAX, and the Giphy API, along with sleek Semantic-UI styling, it offers customizable GIF search and playback controls. Enjoy a seamless experience, even after refreshing or leaving the page.
//       </div>
//     </GridColumn>
//   <GridColumn width={5} verticalAlign='middle'>
//     <Card centered href='/projectsPage/EyeCandy'>
//       <Segment
//         onMouseEnter={() => this.handleShow(0)}
//         onMouseLeave={() => this.handleHide(0)}
//         style={{ cursor: 'pointer' }} // Apply cursor pointer style
//       >
//         <Image src='../../../Images/EyeCandy.png' />
//         <Header className='title' textAlign='center'>Eye Candy</Header>
//         <Dimmer active={active[0]} onMouseLeave={() => this.handleHide(0)}>
//           <Header className='p-p' as='h2' icon inverted>
//             More Info
//             <HeaderSubheader className='p-p'>Eye Candy</HeaderSubheader>
//           </Header>
//         </Dimmer>
//       </Segment>
//       </Card>
//   </GridColumn>
//   <GridColumn />
// </GridRow>


// <GridRow verticalAlign='middle'>
//   <GridColumn />
//   <GridColumn width={5} verticalAlign='middle'>
//     <Card centered href='/projectsPage/CoverArt'>
//       <Segment
//         onMouseEnter={() => this.handleShow(1)}
//         onMouseLeave={() => this.handleHide(1)}
//         style={{ cursor: 'pointer' }} // Apply cursor pointer style
//       >
//         <Image floated='left' src='../../../Images/coverArtShuffle.png' />
//         <Header textAlign='center' className='title'>Cover Art Shuffle Game</Header>
//         <Dimmer active={active[1]} onMouseLeave={() => this.handleHide(1)}>
//           <Header className='p-p' as='h2' icon inverted>
//             More Info
//             <HeaderSubheader className='p-p'>Cover Art Shuffle Game</HeaderSubheader>
//           </Header>
//         </Dimmer>
//       </Segment>
//     </Card>
//   </GridColumn>
//   <GridColumn width={5} textAlign='center'>
//     <div className='homeText p-p'>Dive into a React web game where images shuffle with each click. Avoid clicking the same image twice to maintain your score, all while tracking your highest score on-page. Built with create-react-app, it offers endless fun and challenge.</div>
//   </GridColumn>
//   <GridColumn />
// </GridRow>



// <GridRow verticalAlign='middle'>
//   <GridColumn />
//   <GridColumn width={5} textAlign='center'>
//     <div className='homeText p-p'>Dive into the captivating world of bouncing balls on this interactive web page. With HTML, CSS, and JavaScript, experience mesmerizing motion and vibrant colors as balls gracefully bounce across the screen. Explore the creative potential of web development technologies in this playful demonstration.</div>
//   </GridColumn>
//   <GridColumn width={5} verticalAlign='middle'>
//     <Card centered href='/projectsPage/BouncingBalls'>
//       <Segment
//         onMouseEnter={() => this.handleShow(2)}
//         onMouseLeave={() => this.handleHide(2)}
//         style={{ cursor: 'pointer' }} // Apply cursor pointer style
//       >
//         <Image floated='right' src='../../../Images/BouncingBalls2.png' />
//         <Header textAlign='center' className='title'>Bouncing Balls</Header>
//         <Dimmer active={active[2]} onMouseLeave={() => this.handleHide(2)}>
//           <Header className='p-p' as='h2' icon inverted>
//             More Info
//             <HeaderSubheader className='p-p'>Bouncing Balls</HeaderSubheader>
//           </Header>
//         </Dimmer>
//       </Segment>
//     </Card>
//   </GridColumn>

//   <GridColumn />

// </GridRow>
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
//   state = {
//     active: [false, false] // Initialize state for each card
//   };

//   handleShow = (index) => {
//     const { active } = this.state;
//     active[index] = true;
//     this.setState({ active });
//   }

//   handleHide = (index) => {
//     const { active } = this.state;
//     active[index] = false;
//     this.setState({ active });
//   }

//   render() {
//     const { active } = this.state;

//     // const componentStyle = {
//     //   width: '100%',
//     //   margin: 0,
//     //   padding: 0,
//     //   boxShadow: 'none',           // Remove box shadow
//     //   WebkitBoxShadow: 'none'      // Remove Webkit box shadow
//     // };
  

//     return (
      

// <CardGroup>
// <Grid padded='vertically' relaxed="very" columns="equal" >
// <GridRow verticalAlign='middle'>
//   <GridColumn>
//   </GridColumn>
//   <GridColumn  width={5} textAlign="center">
// <div className="homeText p-p">Discover an interactive world of GIFs with this web app. Utilizing JavaScript, jQuery, AJAX, and the Giphy API, along with sleek Semantic-UI styling, it offers customizable GIF search and playback controls. Enjoy a seamless experience, even after refreshing or leaving the page.</div>
//   </GridColumn>
//   <GridColumn width={5} verticalAlign='middle'>
//   <Card centered href="/projectsPage/EyeCandy">
            
//             <Segment
//               onMouseEnter={() => this.handleShow(0)} // Pass index of card
//               onMouseLeave={() => this.handleHide(0)} // Pass index of card
//             >
//               <Image
//                 src='../../../Images/EyeCandy.png'
//               />
//               <Header className="title" textAlign="center">Eye Candy</Header>
//               <Dimmer active={active[0]} onMouseLeave={() => this.handleHide(0)}> {/* Use active state based on index */}
//                 <Header  className="p-p" as='h2' icon inverted>
//                   More Info
//                   <HeaderSubheader  className="p-p" >Eye Candy</HeaderSubheader>
//                 </Header>
//               </Dimmer>
//             </Segment>
//         </Card>
//   </GridColumn>
//   <GridColumn>
//   </GridColumn>
// </GridRow>




// <GridRow verticalAlign='middle'>
//   <GridColumn>
   
//   </GridColumn>
//   <GridColumn width={5} verticalAlign='middle'>
//   <Card centered href="/projectsPage/CoverArt" >
          
//             <Segment  
//               onMouseEnter={() => this.handleShow(1)} // Pass index of card
//               onMouseLeave={() => this.handleHide(1)} // Pass index of card
//             >
//               <Image
//               floated="left"
//                 src='../../../Images/coverArtShuffle.png'
//               />
//               <Header textAlign="center"  className="title" >Cover Art Shuffle Game</Header>
//               <Dimmer active={active[1]} onMouseLeave={() => this.handleHide(1)}> {/* Use active state based on index */}
//                  <Header  className="p-p" as='h2' icon inverted>
//                   More Info
//                   <HeaderSubheader className="p-p"  >Cover Art Shuffle Game</HeaderSubheader>
//                 </Header>
//               </Dimmer>
//             </Segment>
//         </Card>
//   </GridColumn>
//   <GridColumn width={5} textAlign="center">
//     <div className="homeText p-p">Dive into a React web game where images shuffle with each click. Avoid clicking the same image twice to maintain your score, all while tracking your highest score on-page. Built with create-react-app, it offers endless fun and challenge.</div>
//   </GridColumn>
//   <GridColumn>
//   </GridColumn>
// </GridRow>




// <GridRow verticalAlign='middle'>
//   <GridColumn>
//   </GridColumn>
//   <GridColumn width={5} textAlign="center">
//   <div className="homeText p-p">Dive into the captivating world of bouncing balls on this interactive web page. With HTML, CSS, and JavaScript, experience mesmerizing motion and vibrant colors as balls gracefully bounce across the screen. Explore the creative potential of web development technologies in this playful demonstration.</div>
//   </GridColumn>
//   <GridColumn width={5} verticalAlign='middle'>
//   <Card centered  href="/projectsPage/BouncingBalls">
         
//          <Segment
//            onMouseEnter={() => this.handleShow(2)} // Pass index of card
//            onMouseLeave={() => this.handleHide(2)} // Pass index of card
//          >
//            <Image
//            floated="right"
//              src='../../../Images/BouncingBalls2.png'
//            /> 
//             <Header textAlign="center" className="title"  >Bouncing Balls</Header>
          

//            <Dimmer active={active[2]} onMouseLeave={() => this.handleHide(1)}> 
//               <Header  className="p-p" as='h2' icon inverted>
//                More Info
//                <HeaderSubheader  className="p-p" >Bouncing Balls</HeaderSubheader>
//              </Header>
//            </Dimmer>
//          </Segment>
      
//      </Card>
//   </GridColumn>
//   <GridColumn>
   
//   </GridColumn>
  
// </GridRow>
//  </Grid> 
// </CardGroup>

// )
//   }
//   }

//   export default ProjectImages;













