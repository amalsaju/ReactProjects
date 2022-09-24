import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../../assets/img/nav-icon1.svg";

import './footer.styles.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/amal-saju-077023210/" target="_blank"><img src={linkedin} alt="" /></a>
            </div>
          </Col>
        </Row>
    </div>
    </footer>
  )
}

export default Footer;