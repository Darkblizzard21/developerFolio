import React, {useContext} from "react";
import "./WorkExperience.scss";
import {educationInfo, workExperiences} from "../../portfolio";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";

export default function WorkExperience() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="experience">
        <h1 className="education-heading">Experience</h1>
        <div className="education-card-container">
          {workExperiences.experience.map((place, index) => (
            <ExperienceCard key={index} place={place} showTime={true} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
