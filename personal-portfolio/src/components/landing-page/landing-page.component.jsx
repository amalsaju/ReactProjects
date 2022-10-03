import { Container, Row, Col } from "react-bootstrap";
import planet from "../../assets/img/planet.png";
import comet from "../../assets/img/comet.png";
import 'animate.css';
import ReactTypingEffect from 'react-typing-effect';
import './landing-page.styles.css';

const LandingPage = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <ReactTypingEffect
                text={["Hi there, I'm Amal."]}
                speed={200}
                eraseDelay={15000}
                typingDelay={500}
                eraseSpeed={100}
                cursorRenderer={cursor => <h2 className="tagline">{cursor}</h2>}
                displayTextRenderer={(text, i) => {
                  return (
                    <h2 className="tagline">
                      {text.split('').map((char, i) => {
                        const key = `${i}`;
                        return (<span key={key}>{char}</span>);
                      })}
                    </h2>
                  );
                }}
              />

              <p>I love programming and tinkering with new technologies.</p>

            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>

            <div >
              <img src={planet} className="planet-image" alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section >
  )
}

export default LandingPage;