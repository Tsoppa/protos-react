import React from 'react';
import './FollowUs.css';
import { FaYoutube, FaFacebook, FaDiscord, FaInstagram, FaFacebookMessenger } from 'react-icons/fa';

const FollowUs = () => {
  return (
    <div className="followus-cont">
        <div className="followus-wrapper">
            <h3>FOLLOW US</h3>
            <ul>
                <li><a href="https://www.youtube.com/channel/UCOJsAfEcCS5ZoHEySVRDMoA/?sub_confirmation=1" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                <li><a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                <li><a href="https://discord.gg/bKqaA4c7yh" target="_blank" rel="noopener noreferrer"><FaDiscord /></a></li>
                <li><a href="https://www.instagram.com/protos.gg/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                <li className="followus-contactus"><a href="https://m.me/Protos.gg" target="_blank" rel="noopener noreferrer"><span>Contact Us&nbsp;&nbsp;</span><FaFacebookMessenger /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default FollowUs