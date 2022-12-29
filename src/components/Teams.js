import React, {useState} from 'react';
import './Teams.css';
import DotaLogo from '../assets/dotaWhite.png';
import CsgoLogo from '../assets/csgoWhite.png';
import eFootballLogo from '../assets/efootballWhite.png';
import TekkenLogo from '../assets/tekkenWhite.png';
import GeorgiaFlag from '../assets/georgiaFlagRounded.png';
import {FaTwitch, FaTwitter, FaYoutube} from 'react-icons/fa';

const Teams = () => {

    const professions = [
        {
            key: 'dota',
            src: DotaLogo
        },
        {
            key: 'csgo',
            src: CsgoLogo
        },
        {
            key: 'efootball',
            src: eFootballLogo
        },
        {
            key: 'tekken',
            src: TekkenLogo
        },
    ];

    const [myProfession, setMyProfession] = useState("dota");

  return (
    <div className="teams-cont" id="teams-scroll">
        <div className="teams-up-wrapper">
            <h3>PROTOS TEAMS</h3>
            <ul>
                {professions.map(profession => (
                    <li>
                        <img
                            src={profession.src} alt=""
                            key={profession.key}
                            onClick={() => setMyProfession(profession.key)}
                        />
                    </li>
                ))}
            </ul>
        </div>
        <div className="teams-info-wrapper">
            {myProfession === "dota" && (
                <div className="dota-team-members">
                            <div className="player-up">
                                <div className="player-title">
                                    <img src={GeorgiaFlag} alt="" />
                                    <h4>Madao</h4>
                                </div>
                                <p>Valeri Parsadanashvili</p>
                                <p>21 years</p>
                                <div className="player-socials">
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                </div>
                            </div>
                            <div className="player-up">
                                <div className="player-title">
                                    <img src={GeorgiaFlag} alt="" />
                                    <h4>Noaah</h4>
                                </div>
                                <p>Baqari Kharabadze</p>
                                <p>22 years</p>
                                <div className="player-socials">
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                </div>
                            </div>
                            <div className="player-up">
                                <div className="player-title">
                                    <img src={GeorgiaFlag} alt="" />
                                    <h4>Tsoppa</h4>
                                </div>
                                <p>Tsotne Chogovadze</p>
                                <p>22 years</p>
                                <div className="player-socials">
                                    <a href="https://www.twitch.tv/tsoppa" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
                                    <a href="https://twitter.com/ts0ppa" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                    <a href="https://www.youtube.com/channel/UCxNg3OGH0jYoKCOaYv9mmuA" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                                </div>
                            </div>
                            <div className="player-up">
                                <div className="player-title">
                                    <img src={GeorgiaFlag} alt="" />
                                    <h4>JohnJoeLee</h4>
                                </div>
                                <p>Sandro Gasitashvili</p>
                                <p>27 years</p>
                                <div className="player-socials">
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                </div>
                            </div>
                            <div className="player-up">
                                <div className="player-title">
                                    <img src={GeorgiaFlag} alt="" />
                                    <h4>Chila</h4>
                                </div>
                                <p>Levani Chilauri</p>
                                <p>26 years</p>
                                <div className="player-socials">
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                </div>
                            </div>
                </div>
            )}
            {myProfession === "csgo" && (
                <div className="csgo-team-members">
                            <div className="player-up">
                                <div className="player-title">
                                    {/* <img src={GeorgiaFlag} alt="" /> */}
                                    <h4>Coming Soon...</h4>
                                </div>
                                {/* <p>Tsotne Chogovadze</p>
                                <p>22 years</p>
                                <div className="player-socials">
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                </div> */}
                            </div>
                            {/* <div className="player-up">
                                <div className="player-title">
                                    <img src={GeorgiaFlag} alt="" />
                                    <h4>Gamarjoba</h4>
                                </div>
                                <p>Tsotne Chogovadze</p>
                                <p>22 years</p>
                                <div className="player-socials">
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                </div>
                            </div>
                            <div className="player-up">
                                <div className="player-title">
                                    <img src={GeorgiaFlag} alt="" />
                                    <h4>Gamarjoba</h4>
                                </div>
                                <p>Tsotne Chogovadze</p>
                                <p>22 years</p>
                                <div className="player-socials">
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                </div>
                            </div>
                            <div className="player-up">
                                <div className="player-title">
                                    <img src={GeorgiaFlag} alt="" />
                                    <h4>Gamarjoba</h4>
                                </div>
                                <p>Tsotne Chogovadze</p>
                                <p>22 years</p>
                                <div className="player-socials">
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                </div>
                            </div>
                            <div className="player-up">
                                <div className="player-title">
                                    <img src={GeorgiaFlag} alt="" />
                                    <h4>Gamarjoba</h4>
                                </div>
                                <p>Tsotne Chogovadze</p>
                                <p>22 years</p>
                                <div className="player-socials">
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
                                    <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                </div>
                            </div> */}
                </div>
            )}
            {myProfession === "efootball" && (
                <div className="efootball-team-members">
                            <div className="player-up">
                                <div className="player-title">
                                    <img src={GeorgiaFlag} alt="" />
                                    <h4>GEO_Rati</h4>
                                </div>
                                <p>Rati Nanava</p>
                                <p>22 years</p>
                                <div className="player-socials">
                                    <a href="https://www.youtube.com/channel/UCwCyqqrz-uTk1M_V6phkoLw" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                                    {/* <a href="https://www.facebook.com/Protos.gg" target="_blank" rel="noopener noreferrer"><FaTwitter /></a> */}
                                </div>
                            </div>
                </div>
            )}
            {myProfession === "tekken" && (
                <div className="tekken-team-members">
                            <div className="player-up">
                                <div className="player-title">
                                    <img src={GeorgiaFlag} alt="" />
                                    <h4>Duelist17</h4>
                                </div>
                                <p>Guga Iremashvili</p>
                                <p>25 years</p>
                                <div className="player-socials">
                                    <a href="https://www.twitch.tv/duelist17" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
                                    <a href="https://twitter.com/Duelist17_" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                    <a href="https://www.youtube.com/channel/UCKn2QciAJQm4J6eBGrSUSkA" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                                </div>
                            </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Teams;
