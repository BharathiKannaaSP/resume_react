import React from "react";
import "./HobbiesAndSocialMedia.scss";
import { FaGithub, FaMusic, FaPlaneDeparture } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";
import { PiCookingPot } from "react-icons/pi";
import {CiLinkedin} from 'react-icons/ci'
const HobbiesAndSocialMedia = () => {
  return (
    <div className="hobbiesAndSocialMedia">
      <h2>Hobbies</h2>
      <div className="hobbies">
        <div className="items">
          <p>
            <FaMusic />
          </p>
          <p>Music</p>
        </div>
        <div className="items">
          <p>
            <BiSolidCameraMovie />
          </p>
          <p>Movies</p>
        </div>
        <div className="items">
          <p>
            <FaPlaneDeparture />
          </p>
          <p>Travel</p>
        </div>
        <div className="items">
          <p>
            <PiCookingPot />
          </p>
          <p>Cooking</p>
        </div>
      </div>
        <h2>Social Media</h2>
      <div className="socialLinks">
        <div className="items">
          <a target="blank" href="https://github.com/BharathiKannaaSP?tab=repositories"><p>
            <FaGithub />
          </p></a>
          <p>Github</p>
        </div>
        <div className="items">
          <a target="blank" href="https://www.linkedin.com/in/bharathi-kannaa-s-p-828851214"><p>
          <CiLinkedin />
          </p>
          <p>Linkedin</p></a>
        </div>
      </div>
    </div>
  );
};

export default HobbiesAndSocialMedia;
