import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../project-card/project-card.component";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import './side-projects.styles.css';

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
          <Col size={12}>
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
        </Row>
      </Container>
    </section>
  )
}

export default Projects;