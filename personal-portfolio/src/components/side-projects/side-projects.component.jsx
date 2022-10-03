import ProjectCard from "../project-card/project-card.component";

import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';

import './side-projects.styles.css';
import rocket from "../../assets/img/rocket.png";
import spaceShuttle from "../../assets/img/space-shuttle.png";
import universe from "../../assets/img/universe.png";

const Projects = () => {

  const projects = [
    {
      title: "E-Commerce Website",
      description: "E-commerce app with Redux, Hooks, GraphQL, Stripe, Firebase",
      link: "https://endearing-lollipop-9efedd.netlify.app/",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website",
      link: "/",
    },
    {
      title: "Dawn of Chaos",
      description: "Zombie survival Game",
      link: "https://leofiremage.itch.io/dawn-of-chaos",
    },
    {
      title: "The Mage's Adventure",
      description: "Matching Card Game",
      link: "https://leofiremage.itch.io/the-mages-adventure",
    },
    {
      title: "Kitchen Dash",
      description: "2D kitchen management game",
      link: "https://leofiremage.itch.io/kitchen-dash",
    },
    {
      title: "Life on the Edge",
      description: "Simple shooter game",
      link: "https://leofiremage.itch.io/life-on-the-edge",
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col md={{ span: 12 }}>
            <div>
              <h2>Projects</h2>
              <Row>
                {projects.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...project} />
                  )
                })}
              </Row>
            </div>
          </Col>
          <Col>
            <div className="space-shuttle-div" >
              <img src={spaceShuttle} className="space-shuttle-image" alt="Space shuttle Img" />
            </div>
          </Col>
          <Col>
            <div className="rocket-div" >
              <img src={rocket} className="rocket-image" alt="Rocket Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Projects;