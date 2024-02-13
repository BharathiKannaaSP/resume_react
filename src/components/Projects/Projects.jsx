import React from "react";
import "./projects.scss";
const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <div className="projects">
        <div className="project_item">
          <p>Food Order App</p>
          <ul>
            <li>
              <strong>Key Technologies:</strong>
            </li>
            <ul>
              <li>
                <strong>React:</strong> The frontend is built with React,
                providing a responsive and dynamic user interface. React
                components enable smooth navigation and real-time updates,
                enhancing the overall user experience.
              </li>
              <li>
                <strong>MongoDB:</strong> Backend services are powered by
                MongoDB, offering a scalable and secure environment. User
                authentication, data storage, and seamless real-time updates are
                efficiently handled with MongoDB.
              </li>
              <li>
                <strong>RapidAPI:</strong> Our app seamlessly integrates with
                RapidAPI, connecting to various APIs for enriched
                functionalities. Real-time restaurant data, location services,
                and third-party integrations are facilitated through RapidAPI,
                enhancing app versatility.
              </li>
              <li>
                <strong>Stripe:</strong> For secure and efficient payment
                processing, we seamlessly integrate Stripe. Users can subscribe
                and access premium content with ease, enhancing the convenience
                of our food ordering experience.
              </li>
              <li>
                <strong>Alan AI:</strong> Voice-driven interactions are enabled
                through Alan AI, offering a personalized and intuitive
                experience.
              </li>
            </ul>
          </ul>
        </div>
        <div className="project_item">
          <p>Urbaneutopia - Fashion App</p>
          <ul>
            <li>
              <strong>Key Technologies:</strong>
            </li>
            <ul>
              <li>
                <strong>React:</strong> Urbaneutopia's frontend is crafted with
                React, ensuring a sleek and responsive user interface. React
                components drive an engaging and seamless browsing experience
                for fashion enthusiasts.
              </li>
              <li>
                <strong>MongoDB:</strong> The backend relies on MongoDB,
                providing a robust and scalable database solution. MongoDB
                efficiently manages user data, product information, and ensures
                a smooth shopping experience.
              </li>
              <li>
                <strong>Node.js:</strong> Powering the server-side, Node.js
                enhances Urbaneutopia's performance. It facilitates quick data
                retrieval, real-time updates, and seamless communication between
                the frontend and MongoDB.
              </li>
              <li>
                <strong>Stripe:</strong> Urbaneutopia integrates Stripe for
                secure and hassle-free payment processing. Users can confidently
                make purchases, leveraging Stripe's reliable payment gateway for
                a seamless checkout experience.
              </li>
            </ul>
          </ul>
        </div>
        <div className="project_item">
          <p>Other Projects</p>
          <ul>
            <ul>
              <li>
                <strong>Netflix Clone : </strong>  Using React, Firebase, TMDB API, and Stripe for payment.
              </li>
              <li>
                <strong>Shopping app : </strong>Using Strapi and ReactJS
              </li>           
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
