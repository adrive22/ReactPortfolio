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
    this.handleCardClick = this.handleCardClick.bind(this);
  }


  componentDidMount() {
    // Add event listener when component mounts
    window.addEventListener("popstate", this.resetState);
  }

  componentWillUnmount() {
    // Remove event listener when component unmounts
    window.removeEventListener("popstate", this.resetState);
  }


  // Function to handle mouse enter
  handleShow(index) {
    const { active } = this.state;
    active.fill(false); // Reset all dimmer states
    active[index] = true;
    this.setState({ active });
  }

  // Function to handle mouse leave
  handleHide(index) {
    const { active } = this.state;
    active[index] = false;
    this.setState({ active });
  }


   handleCardClick(index) {
    this.handleShow(index);
  }

  render() {
    const { active } = this.state;
    

    return (

      <>
      <Grid only="computer" centered relaxed='very' columns='equal'>
       
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


      <GridRow only="computer" verticalAlign='middle'>
        <GridColumn />
        <GridColumn width={5} textAlign='center'>
          <div className='homeText p-p'>Immerse yourself into the captivating world of bouncing balls on this interactive web page. With HTML, CSS, and JavaScript, experience mesmerizing motion and vibrant colors as balls gracefully bounce across the screen. Explore the creative potential of web development technologies in this playful demonstration.</div>
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
    </Grid>
  




{/* Mobile Grid*/ }
<Grid only="mobile" centered columns={1} >
 <GridRow only="mobile"  >
        <GridColumn verticalAlign='middle'>
          <Card centered href='/projectsPage/EyeCandy'>
            <Segment
              onMouseEnter={() => this.handleShow(0)}
              onMouseLeave={() => this.handleHide(0)}
              onClick={() => this.handleCardClick(0)} 
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


<Divider only="mobile" />

<GridRow only="mobile" >
        <GridColumn only="mobile" fluid verticalAlign='middle'>
        <Card centered href='/projectsPage/CoverArt'>
            <Segment
              onMouseEnter={() => this.handleShow(1)}
              onMouseLeave={() => this.handleHide(1)}
              onClick={() => this.handleShow(1)} /* Add onClick handler to reset dimmer */
              style={{ cursor: 'pointer' }} // Apply cursor pointer style
            >
              <Image floated='left' src='../../../Images/coverArtShuffle.png' />
              <Header className='title' textAlign='center'>Cover Art Shuffle React Game</Header>
              <CardDescription textAlign="center">
              Dive into a React web game where images shuffle with each click. Avoid clicking the same image twice to maintain your score, all while tracking your highest score on-page. Built with create-react-app, it offers endless fun and challenge.
               </CardDescription>
              <Dimmer active={active[1]} onMouseLeave={() => this.handleHide(1)}>
                <Header className='p-p' as='h2' icon inverted>
                  More Info
                  <HeaderSubheader className='p-p'>Cover Art Shuffle Game</HeaderSubheader>
                </Header>
              </Dimmer>
            </Segment>
            </Card>
        </GridColumn>
      </GridRow>


      <Divider only="mobile" />

      <GridRow only="mobile"  >
        <GridColumn fluid verticalAlign='middle'>
        <Card centered href='/projectsPage/BouncingBalls'>
            <Segment
              onMouseEnter={() => this.handleShow(2)}
              onMouseLeave={() => this.handleHide(2)}
              onClick={() => this.handleCardClick(2)} 
              style={{ cursor: 'pointer' }} // Apply cursor pointer style
            >
              <Image floated='right' src='../../../Images/BouncingBalls2.png' />
              <Header className='title' textAlign='center'>Bouncing Balls</Header>
              <CardDescription textAlign="center">
              Immerse yourself into the captivating world of bouncing balls on this interactive web page. With HTML, CSS, and JavaScript, experience mesmerizing motion and vibrant colors as balls gracefully bounce across the screen. Explore the creative potential of web development technologies in this playful demonstration.
               </CardDescription>
              <Dimmer active={active[2]} onMouseLeave={() => this.handleHide(2)}>
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
 </>
    )}}

    export default ProjectImages
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





