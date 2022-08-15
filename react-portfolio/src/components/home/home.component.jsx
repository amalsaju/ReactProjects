
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../animated-letters/animated-letter.components';
import Logo from '../logo/logo.component';

import './home.styles.scss';

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  const nameStarting = "I'm ";
  const userName = "Amal.";
  const job = "Welcome to my portfolio!";

  const nameStart = nameStarting.split('');
  const nameArray = userName.split('');
  const jobArray = job.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, [])


  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
          <span className={`${letterClass} _10`}>H</span>
          <span className={`${letterClass} _11`}>i</span>
          <span className={`${letterClass} _12`}>,</span>
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={nameStart} index={13} />

          {/* <img src={LogoTitle} alt="Developer" /> */}
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={20} />
        </h1>
        <Link to="/contact" className="flat-button">Contact Me</Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home;