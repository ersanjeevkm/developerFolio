import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {desc} from "../../portfolio";

export default function Education() {
  if (desc.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">About Pinacle</h1>
        <div className="education-card-container">
          {desc.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
