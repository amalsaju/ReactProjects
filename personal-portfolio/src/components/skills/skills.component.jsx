
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faHtml5, faJs, faReact, faUnity } from "@fortawesome/free-brands-svg-icons";

import './skills.styles.css';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn" id='skills'>
              <h2>Skills</h2>
              <p>These are some of the technologies I am proficient in.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <FontAwesomeIcon icon={faUnity} style={{ color: "#b0b0b0" }} />
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faReact} style={{ color: "#62dafc" }} />
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faHtml5} style={{ color: "#f0652a" }} />
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faCss3} style={{ color: "#3c9cd7" }} />
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faJs} style={{ color: "#E0C71F" }} />
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faGitAlt} style={{ color: "#f25029" }} />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;