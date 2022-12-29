import React, {useState} from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import ProtosLogo from '../assets/protoslogo.png';
import { FaYoutube, FaFacebook, FaDiscord, FaInstagram } from 'react-icons/fa';

const Header = () => {

    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState('nav__toggler');
    const navToggle = () => {
        active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu')

        // TogglerIcon
        toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler');
    }

  return (
    <header>
        <div className="header-cont">
            <div className="header-logo" onClick={() => window.location.reload(false)}>
                <img src={ProtosLogo} alt="" />
                <h2>TEAM&nbsp;<span>PROTOS</span></h2>
            </div>
            <nav>
                <ul className={active}>
                    <li className="nav__item"> 
                        <Link to="about-scroll" spy={true} smooth={true} offset={-90} duration={100}>ABOUT</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="teams-scroll" spy={true} smooth={true} offset={-90} duration={100}>TEAMS</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="media-scroll" spy={true} smooth={true} offset={-90} duration={100}>MEDIA</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="partners-scroll" spy={true} smooth={true} offset={-90} duration={100}>PARTNERS</Link>
                    </li>
                </ul>
                <div onClick={navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            <div className="header-socials">
                <ul>
                    <li><a href="https://www.youtube.com/channel/UCOJsAfEcCS5ZoHEySVRDMoA/?sub_confirmation=1" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                    <li><a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                    <li><a href="https://discord.gg/bKqaA4c7yh" target="_blank" rel="noopener noreferrer"><FaDiscord /></a></li>
                    <li><a href="https://www.instagram.com/protos.gg/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header;
