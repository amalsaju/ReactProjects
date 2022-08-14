
import { useState, useEffect } from 'react';

import AnimatedLetters from '../animated-letters/animated-letter.components';
import './about.styles.scss';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
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
    </div>
  )
}

export default About;