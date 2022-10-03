import { useState, useEffect } from "react";
import {BrowserRouter as Router} from "react-router-dom";

import ThemeToggleButton from "../theme-toggle-button/theme-toggle-button.component";

import { Navbar, Nav, Container } from "react-bootstrap";
import './navbar.styles.css';

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [lightMode, setLightMode] = useState('default')

  const toggleTheme = () => {
    const localTheme = window.localStorage.getItem('lightMode')
    const savedMode = localTheme === 'inverted' ? 'inverted' : 'default'
    if (savedMode === 'default') {
      window.localStorage.setItem('lightMode', 'inverted')
      setLightMode('inverted')
    } else {
      window.localStorage.setItem('lightMode', 'default')
      setLightMode('default')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('lightMode')
    setLightMode(localTheme)
    if (localTheme === 'inverted') {
      document.body.classList.add('is_inverted')
    }
    else {
      document.body.classList.remove('is_inverted')
    }
  }, [lightMode])

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project"
                className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
              {/* <Nav.Link href="/about"
                className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('about')}>About Me</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <ThemeToggleButton themeSwitch={toggleTheme} />
      </Navbar>
    </Router>
  )
}

export default NavBar;