
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

import AnimatedLetters from '../animated-letters/animated-letter.components';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import './about.styles.scss';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, [])

  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']} index={15} />
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, labore! Quae temporibus veniam nulla et,
          qui impedit libero corporis possimus delectus exercitationem nam accusantium inventore aliquam quo, facere magnam. Consequatur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam nostrum,
          dolores ad totam nam ea sint minima quia dignissimos ullam explicabo excepturi rem, est magni vitae. Ipsa, ipsam eligendi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          dolore natus dignissimos enim debitis aliquid nemo atque ratione illum eveniet dolores, id quae quis nam maxime repellat omnis laudantium soluta!</p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faAngular} color="#dd0031" />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color="#5ed4fe" />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color="#ec4b28" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;