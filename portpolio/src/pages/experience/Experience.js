import React from "react";
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experiencecontainer">
        <div className="experience__frontend">
          <h3>Freelancer Web Developer</h3>
          <div className="experiencecontent">
            <article className="experiencedetails">
              <BsFillPatchCheckFill className="experiencedetails-icon" />
              <div>
                <h4>EL Pizza</h4>
                <small className="text-light">
                  Develop Simple Pizza Shop Use Redux
                </small>
              </div>
            </article>
            <article className="experiencedetails">
              <BsFillPatchCheckFill className="experiencedetails-icon" />
              <div>
                <h4>Hotflix</h4>
                <small className="text-light">Create New Admin Dashboard</small>
              </div>
            </article>
            <article className="experiencedetails">
              <BsFillPatchCheckFill className="experiencedetails-icon" />
              <div>
                <h4>POS System</h4>
                <small className="text-light">
                  MERN Stack app using Ant Design
                </small>
              </div>
            </article>
          </div>
        </div>

        <div className="experiencebackend">
          <h3>Associate Software Engineer - TechScrolll</h3>
          <div className="experiencecontent">
            <article className="experiencedetails">
              <BsFillPatchCheckFill className="experiencedetails-icon" />
              <div>
                <h4>Part of Tuber 3</h4>
                <ul>
                  <li className="text-light">Build Front End Pages</li>
                  <li className="text-light">
                    API Integration for map features
                  </li>
                  <li className="text-light"></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
        <div className="experiencebackend">
          <h3>Software Engineer Intern - Gypzeez</h3>
          <div className="experiencecontent">
            <article className="experiencedetails">
              <BsFillPatchCheckFill className="experiencedetails-icon" />
              <div>
                <h4>Gypzeez Website</h4>
                <small className="text-light">
                  Design With React , Bootstrap
                </small>
              </div>
            </article>
            <article className="experiencedetails">
              <BsFillPatchCheckFill className="experiencedetails-icon" />
              <div>
                <h4>Book Shopping App</h4>
                <small className="text-light">
                  Use redux in MERN app
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
