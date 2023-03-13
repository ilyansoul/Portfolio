import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/dd.png";
import projImg2 from "../assets/img/loveetsc.png";
import projImg3 from "../assets/img/kk.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    { 
      title: "Site de Fitness",
      description: "Wordpress",
      urlSite : 'https://niicecoaching.fr/',
      urlGit : 'https://github.com/ilyansoul/herewegoagain',

      imgUrl: projImg1,
    },
    {
      title: "Site de Rencontre",
      description: "React , Express , Nodejs , MongoDb",
      imgUrl: projImg2,
      urlSite : 'https://niicecoaching.fr/',
      urlGit : 'https://github.com/ilyansoul/herewegoagain',
    },
    {
      title: "Bientot a disposition",
      description: "En cours",
      imgUrl: projImg3,
   
    },
    
    {
      title: "Bientot a disposition",
      description: "En cours",
      imgUrl: projImg3,

    },
    
    {
      title: "Bientot a disposition",
      description: "En cours",
      imgUrl: projImg3,
    },
    
    {
      title: "Bientot a disposition",
      description: "En cours",
      imgUrl: projImg3,
    },
    
   
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projets</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>En cours</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>En cours</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="magnifique"></img>
    </section>
  )
}
