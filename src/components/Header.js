import React from 'react';
import './Header.css';
import ProtosLogo from '../assets/protoslogo.png';
import { FaYoutube, FaFacebook, FaDiscord, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <div className="header-cont">
            <div className="header-logo" onClick={() => window.location.reload(false)}>
                <img src={ProtosLogo} alt="" />
                <h2>TEAM&nbsp;<span>PROTOS</span></h2>
            </div>
            <nav>
                <ul>
                    <li>ABOUT</li>
                    <li>TEAMS</li>
                    <li>MEDIA</li>
                    <li>PARTNERS</li>
                    <li>ACADEMY</li>
                </ul>
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
