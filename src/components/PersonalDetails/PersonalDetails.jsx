import React from "react";
import "./PersonalDetails.scss";
const PersonalDetails = () => {
  return (
    <div className="personalDetails">
      <h2>Personal Details</h2>
      <div className="headers">
        <ul>
          <li>
            <strong>Date of birth :</strong> 04-05-2001
          </li>
        </ul>
      </div>
      <div className="headers">
        <ul>
          <li>
            <strong>Address: </strong>
            <span>132, Aadhi Vinayagar Kovil Street,</span><br />
            <span className="address2">Kumarapuri, Chennimalai,</span><br />
            <span className="city">Erode - 638051.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalDetails;
