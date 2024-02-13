/* eslint-disable react/no-unescaped-entities */
import "./Education_Skills_WorkExp.scss";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Languages from "../Languages/Languages";
import InterpersonnelSkills from "../InterpersonnelSkills/InterpersonnelSkills";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import Awards from "../Awards/Awards";
import HobbiesAndSocialMedia from "../../HobbiesAndSocialMedia/HobbiesAndSocialMedia";
const Education_Skills_WorkExp = () => {
  return (
    <div className="edu_Skills_we">
      <div className="edu_skills">
        <h2>Education</h2>
        <div className="contents">
          <div className="item">
            <ul>
              <li>2018 - 2022</li>
              <li>BACHELOR OF ENGINEERING – COMPUTER SCIENCE</li>
              <li>Anna University Regional Campus, Coimbatore.</li>
              <li>CGPA - 8.2</li>
            </ul>
          </div>
          <div className="item">
            <ul>
              <li>2017 - 2018</li>
              <li>HSC</li>
              <li>Kongunadu Matric Higher Secondary School.</li>
              <li>Percentage - 91.5</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="skills">
          <h2>Skills</h2>
          <div className="item">
            <div className="technical_skills">HTML</div>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <CiStar />
            </div>
          </div>
          <div className="item">
            <div className="technical_skills">CSS</div>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <CiStar />
            </div>
          </div>
          <div className="item">
            <div className="technical_skills">Javascript</div>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <CiStar />
            </div>
          </div>
          <div className="item">
            <div className="technical_skills">ReactJS</div>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <CiStar />
            </div>
          </div>
          <div className="item">
            <div className="technical_skills">NodeJS</div>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <CiStar />
              <CiStar />
            </div>
          </div>
          <div className="item">
            <div className="technical_skills">MongoDB</div>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <CiStar />
              <CiStar />
            </div>
          </div>
        </div>
        {/*--------------------- //Skills in lines---------------------------- */}
        <Skills /><br />
        <InterpersonnelSkills/><br />
        <Languages/><br />
        <Awards/><br />
        <PersonalDetails/><br />
        {/* -------------------------------------------- */}
      </div>
      <hr />
      <div className="work">
        <h2>Work Experience</h2>
        <div className="contents">
          <div className="item">
            <ul>
              <div className="headings">
                <div></div>
                <span>
                  The Guardian Life Insurance Company of America, NY
                </span>
                <span>(April 2022 - Present)</span>
              </div>
              <li>
                <strong>UI Development:</strong> Designed and implemented the
                user interface for the onboarding application, prioritizing
                responsiveness and a positive user experience.
              </li>

              <li>
                <strong>State Management:</strong> Implemented effective state
                management using React's features and external libraries like
                Redux, ensuring a seamless onboarding process.
              </li>

              <li>
                <strong>API Integration:</strong> Collaborated with backend
                developers to integrate the application with APIs, addressing
                challenges related to data synchronization.
              </li>

              <li>
                <strong>Code Quality:</strong> Maintained clean and maintainable
                code through adherence to React best practices and active
                participation in code reviews.
              </li>

              <li>
                <strong>Collaboration:</strong> Worked closely with
                cross-functional teams, including designers and project
                managers, to ensure the successful delivery of the project.
              </li>

              <li>
                <strong>Continuous Learning:</strong> Stayed updated on the
                latest React features, contributing to the project's
                adaptability and integration of cutting-edge technologies.
              </li>

              <li>
                <strong>User Feedback:</strong> Actively engaged with user
                feedback, participating in iterative development processes to
                enhance the application's user experience.
              </li>
            </ul>
          </div>
          <Projects/>
          <HobbiesAndSocialMedia/>
        </div>
      </div>
    </div>
  );
};

export default Education_Skills_WorkExp;
