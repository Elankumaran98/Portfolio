import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experiencecontainer">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experiencecontent">
            <article className="experiencedetails">
              <BsFillPatchCheckFill className="experiencedetails-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiencedetails">
              <BsFillPatchCheckFill className="experiencedetails-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiencedetails">
              <BsFillPatchCheckFill className="experiencedetails-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiencedetails">
              <BsFillPatchCheckFill className="experiencedetails-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiencedetails">
              <BsFillPatchCheckFill className="experiencedetails-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of frontend part */}

        <div className="experiencebackend">
          <h3>Backend Development</h3>
          <div className="experiencecontent">
            <article className="experiencedetails">
              <BsFillPatchCheckFill className="experiencedetails-icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiencedetails">
              <BsFillPatchCheckFill className="experiencedetails-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiencedetails">
              <BsFillPatchCheckFill className="experiencedetails-icon" />
              <div>
                <h4>Express Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
