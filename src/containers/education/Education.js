import React from "react";
import "./Education.scss";
import {educationInfo} from "../../portfolio";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <ExperienceCard key={index} place={school} showTime={false} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
