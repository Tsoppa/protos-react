import React, {useState} from 'react';
import './Teams.css';
import DotaLogo from '../assets/dotaWhite.png';
import CsgoLogo from '../assets/csgoWhite.png';
import eFootballLogo from '../assets/efootballWhite.png';
import TekkenLogo from '../assets/tekkenWhite.png';
import GeorgiaFlag from '../assets/georgiaFlagRounded.png';
import {FaFacebook} from 'react-icons/fa';

const Teams = () => {

    // const spaceHolder = ""
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
    <div className="teams-cont">
        <div className="teams-up-wrapper">
            <h3>PROTOS TEAMS</h3>
            <ul>
                {professions.map(profession => (
                    <li>
                        <img
                            // className={(spaceHolder === profession.key) ? 'game-active' : ''}
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
                                    <h4>Tsoppa</h4>
                                </div>
                                <p>Tsotne Chogovadze</p>
                                <p>22 years</p>
                                <div className="player-socials">
                                    <FaFacebook />
                                    <FaFacebook />
                                    <FaFacebook />
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
                                    <FaFacebook />
                                    <FaFacebook />
                                    <FaFacebook />
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
                                    <FaFacebook />
                                    <FaFacebook />
                                    <FaFacebook />
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
                                    <FaFacebook />
                                    <FaFacebook />
                                    <FaFacebook />
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
                                    <FaFacebook />
                                    <FaFacebook />
                                    <FaFacebook />
                                </div>
                            </div>
                </div>
            )}
            {myProfession === "csgo" && (
                <div className="csgo-team-members">
                            <div className="player-up">
                                <div className="player-title">
                                    <img src={GeorgiaFlag} alt="" />
                                    <h4>Gamarjoba</h4>
                                </div>
                                <p>Tsotne Chogovadze</p>
                                <p>22 years</p>
                                <div className="player-socials">
                                    <FaFacebook />
                                    <FaFacebook />
                                    <FaFacebook />
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
                                    <FaFacebook />
                                    <FaFacebook />
                                    <FaFacebook />
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
                                    <FaFacebook />
                                    <FaFacebook />
                                    <FaFacebook />
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
                                    <FaFacebook />
                                    <FaFacebook />
                                    <FaFacebook />
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
                                    <FaFacebook />
                                    <FaFacebook />
                                    <FaFacebook />
                                </div>
                            </div>
                </div>
            )}
            {myProfession === "efootball" && (
                <div className="efootball-team-members">
                            <div className="player-up">
                                <div className="player-title">
                                    <img src={GeorgiaFlag} alt="" />
                                    <h4>Rati Nanava</h4>
                                </div>
                                <p>Tsotne Chogovadze</p>
                                <p>22 years</p>
                                <div className="player-socials">
                                    <FaFacebook />
                                    <FaFacebook />
                                    <FaFacebook />
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
                                <p>Tsotne Chogovadze</p>
                                <p>22 years</p>
                                <div className="player-socials">
                                    <FaFacebook />
                                    <FaFacebook />
                                    <FaFacebook />
                                </div>
                            </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Teams;
