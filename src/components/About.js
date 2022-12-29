import React from 'react';
import './About.css';
import ProtosLogo from '../assets/protoslogo.png';

const About = () => {
  return (
    <div className="about-cont" id="about-scroll">
      <div className="about-wrapper">
        <img src={ProtosLogo} alt="" />
        <div className="about-texts">
          <h2>About Us</h2>
          <h4>Protos Is Esports Team From Georgia</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nisi dolorum ab inventore maiores. Ducimus sapiente magni illo doloribus odit? Rerum obcaecati officia sint qui sequi perferendis esse quidem doloremque beatae veniam sed assumenda amet accusantium, commodi reprehenderit illum ab fuga iusto odit ipsum praesentium. Non nobis facere mollitia dolorum iusto sequi minima quidem harum quos sunt, velit sit, architecto voluptatibus dolor at tempora assumenda consequatur quod quas maxime nihil.</p>
        </div>
      </div>
    </div>
  )
}

export default About