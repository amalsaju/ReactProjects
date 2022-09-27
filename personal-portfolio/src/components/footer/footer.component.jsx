import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faItchIo, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import linkedin from "../../assets/img/nav-icon1.svg";

import './footer.styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Row className="align-items-center">
          <Col size={12} sm={8}>
            <p className="credits">
              Credits <br />
              Iconset: Space Flat - Galaxy radio (https://www.iconfinder.com/iconsets/space-flat-galaxy-radio) <br />
              Author: Chanut is Industries (https://www.iconfinder.com/Chanut-is)<br />
              License: Creative Commons (Attribution 3.0 Unported) (http://creativecommons.org/licenses/by/3.0/)
            </p>
          </Col>
          <Col className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/amal-saju-077023210/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} bounce /></a>
            </div>
            <div className="social-icon">
              <a href="https://github.com/Amalsaju" target="_blank"><FontAwesomeIcon icon={faGithub} beatFade /></a>
            </div>
            <div className="social-icon">
              <a href="https://leofiremage.itch.io/" target="_blank"><FontAwesomeIcon icon={faItchIo} shake />
              </a>
            </div>
          </Col>
        </Row>
        <Row>

        </Row>
      </div>
    </footer >
  )
}

export default Footer;