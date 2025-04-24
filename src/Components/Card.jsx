import React from 'react';
import { assets } from '../assets';
import './Card.css';

const Card = () => {
  return (
    <div className="card-container">
    <div className="cursor-glow"></div>

      <div className="card-col">
        <div className="project-card">
          <img src={assets.VOT} alt="Vibe on Top" className="project-img" />
          <p className="project-meta">2025 • ECOMMERCE</p>
          <h1 className="project-title">VIBE ON TOP</h1>
        </div>

        <div className="project-card">
          <img src={assets.Gray2Green} alt="Gray to Green" className="project-img" />
          <p className="project-meta">2023 • ENVIRONMENT</p>
          <h1 className="project-title">GREY TO GREEN</h1>
        </div>
      </div>

      <div className="card-col right-card">
        <div className="project-card">
          <img src={assets.Datatreya} alt="Vibe on Top" className="project-img" />
          <p className="project-meta">2025 • MARKETPLACE</p>
          <h1 className="project-title">Datatreya</h1>
        </div>

        <div className="project-card">
          <img src={assets.Jodiac} alt="Gray to Green" className="project-img" />
          <p className="project-meta">2025 • WEB SERVICE</p>
          <h1 className="project-title">Jodiac</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
