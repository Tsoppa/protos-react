import React from 'react';
import './TeamPartners.css';
import CyberArenaWhite from '../assets/cyberArenaWhite.png';

const TeamPartners = () => {
  return (
    <div className="team-partners-cont" id="partners-scroll">
        <div className="team-partners-wrapper">
            <h3>TEAM PARTNERS</h3>
            <ul>
                <li><img src={CyberArenaWhite} alt="" /></li>
                {/* <li><img src={CyberArenaWhite} alt="" /></li> */}
                {/* <li><img src={CyberArenaWhite} alt="" /></li> */}
            </ul>
        </div>
    </div>
  )
}

export default TeamPartners;
