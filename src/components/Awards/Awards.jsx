import React from "react";
import "./awards.scss";
const Awards = () => {
  return (
    <>
      <div className="awards">
        <h2>Awards</h2>
        <div className="item">
          <ul>
            <li>
              <strong>Spirit of Guardian Award</strong>
            </li>
            <br />
            <span>
              The Guardian Life Insurance Company of America, New York
            </span>
            <li>
              Acknowledged for exceptional dedication, commitment, and
              significant contributions aligning with team objectives and
              upholding company values.
            </li>
          </ul>
        </div>
      </div>
      <div className="certification">
        <h2>Certification</h2>
        <div className="item">
          <ul>
            <li>
              <strong>Safe 6 Certification</strong>
            </li>
            <br />
            <span>
              The Guardian Life Insurance Company of America, New York
            </span>
            <li>
            Attained Safe 6 Certification, signifying expertise , such as Lean-Agile principles, Agile Release Trains.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Awards;
