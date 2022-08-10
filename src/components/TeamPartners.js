import React from 'react';
import './TeamPartners.css';
import CyberTVWhite from '../assets/cyberWhiteTV.png';

const TeamPartners = () => {
  return (
    <div className="team-partners-cont">
        <div className="team-partners-wrapper">
            <h3>TEAM PARTNERS</h3>
            <ul>
                <li><img src={CyberTVWhite} alt="" /></li>
                <li><img src={CyberTVWhite} alt="" /></li>
                <li><img src={CyberTVWhite} alt="" /></li>
            </ul>
        </div>
    </div>
  )
}

export default TeamPartners;
