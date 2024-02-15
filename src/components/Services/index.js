import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faPython, faNodeJs, faJava, faGit } from '@fortawesome/free-brands-svg-icons';
import { SettingsApplications } from '@material-ui/icons';

const SkillsCard = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>Skills</h3>
          <SettingsApplications />
        </div>
        <div className="flip-card-back">
          <div className="icon-row">
            <FontAwesomeIcon icon={faHtml5} size="5x" />
            <FontAwesomeIcon icon={faCss3} size="5x" />
            <FontAwesomeIcon icon={faJs} size="5x" />
            <FontAwesomeIcon icon={faReact} size="5x" />
          </div>
          <div className="icon-row">
            <FontAwesomeIcon icon={faPython} size="5x" />
            <FontAwesomeIcon icon={faNodeJs} size="5x" />
            <FontAwesomeIcon icon={faJava} size="5x" />
            <FontAwesomeIcon icon={faGit} size="5x" />
          </div>
        </div>
      </div>
    </div>
  );
};

const EducationCard = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>Education</h3>
          {/* Add education history */}
        </div>
        <div className="flip-card-back">
          {/* Add education content */}
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>Experience</h3>
          {/* Add work experiences */}
        </div>
        <div className="flip-card-back">
          {/* Add experience content */}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="app">
      <h1 className='heading'>Services</h1>
      <div className="flip-card-container">
        <SkillsCard />
        <EducationCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Services;
