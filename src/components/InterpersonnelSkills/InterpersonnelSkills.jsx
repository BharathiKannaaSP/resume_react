import React from "react";
import "./InterpersonnelSkills.scss";
const InterpersonnelSkills = () => {
  return (
    <>
      <div className="interPersonnelSkills">
        <h2>Interpersonnel Skills</h2>
        <div className="interSkills">
          <div className="item">
            <ul>
              <li>Social Awareness</li>
              <li>Adaptability</li>
              <li>Leadership</li>
            </ul>
          </div>
          <div className="item">
            <ul>
              <li>Problem Solving</li>
              <li>Verbal Skills</li>
              <li>Responsibility</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="extraCurricularActivities">
        <h2>Extracurricular Activities</h2>
        <div className="item">
          <ul>
            <li>
              <strong>NSS Volunteer: </strong>Participated in mega camps
              conducted by AURCC in Negamam, Coimbatore.
            </li>
            <li>
              <strong>UBA Volunteer: </strong>Participated in Unnat Bharat
              Abhiyan activities.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InterpersonnelSkills;
