import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import Logo from '../assets/img/logo_d.png';
import NavIcon1 from '../assets/img/nav-icon1.svg';
import NavIcon2 from '../assets/img/nav-icon2.svg';
import NavIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from 'react-router-dom';

export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=> {
        const onScroll=()=>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
      <Router>
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Brand href="#home">
              <img src={Logo} alt="Logo"/>
              <link href="logo_light.png" rel="icon" media="(prefers-color-scheme: light)" />
              <link href="logo_dark.png" rel="icon" media="(prefers-color-scheme: dark)" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Beranda</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Lembaga Pemerintah</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Destinasi</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://twitter.com/lumajang_kab"><img src={NavIcon1} alt=""/></a>
                    <a href="https://id-id.facebook.com/lumajangkab/"><img src={NavIcon2} alt="facebook"/></a>
                    <a href="https://www.instagram.com/lumajang_kab/?hl=id"><img src={NavIcon3} alt="instagram"/></a>
                </div>
                <HashLink to='#connect'>
                  <button className="vvd" onClick={() => console.log('connect')}><span>Daftar</span></button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>   
      </Router>    
    )
}

export default NavBar;