import { Col } from "react-bootstrap";

import './project-card.styles.css';

const ProjectCard = ({ title, description, link }) => {

  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank">
        <div className="proj-imgbx">
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}

export default ProjectCard;