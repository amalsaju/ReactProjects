import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faItchIo, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { Container, Row, Col } from "react-bootstrap";

import yellowMoon from "../../assets/img/yellow-moon.png";
import './footer.styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Row className="align-items-center">
          <Col md={{ span: 10 }}>
            <p className="credits">
              Credits <br />
              Iconset: Space Flat - Galaxy radio (https://www.iconfinder.com/iconsets/space-flat-galaxy-radio) <br />
              Author: Chanut is Industries (https://www.iconfinder.com/Chanut-is)<br />
              License: Creative Commons (Attribution 3.0 Unported) (http://creativecommons.org/licenses/by/3.0/)
            </p>
          </Col>
          <Col className="text-center text-sm-end" md={{ span: 2 }}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/amal-saju-077023210/" target="_blank" title="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} bounce /></a>
            </div>
            <div className="social-icon">
              <a href="https://github.com/Amalsaju" target="_blank" title="Github"><FontAwesomeIcon icon={faGithub} beatFade /></a>
            </div>
            <div className="social-icon">
              <a href="https://leofiremage.itch.io/" target="_blank" title="Itch.io"><FontAwesomeIcon icon={faItchIo} shake />
              </a>
            </div>
          </Col>
          <Col>
            <div className="yellow-moon-div" >
              <img src={yellowMoon} className="yellow-moon-image" alt="Yellow Moon Img" />
            </div>
          </Col>
        </Row>
      </div>
    </footer >
  )
}

export default Footer;