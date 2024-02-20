import React from 'react'
import './myskills.css'
import { BsFillPatchCheckFill } from "react-icons/bs";

const MySkills = () => {
  return (
    <section id="myskills">
      <h5>The skills I have</h5>
      <h2>My Skills</h2>

      <div className="container myskillscontainer">
        <div className="myskills__frontend">
          <h3>Frontend Development</h3>

          <div className="myskillscontent">
            <article className="myskillsdetails">
              <BsFillPatchCheckFill className="myskillsdetails-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="myskillsdetails">
              <BsFillPatchCheckFill className="myskillsdetails-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="myskillsdetails">
              <BsFillPatchCheckFill className="myskillsdetails-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="myskillsdetails">
              <BsFillPatchCheckFill className="myskillsdetails-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="myskillsdetails">
              <BsFillPatchCheckFill className="myskillsdetails-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="myskillsdetails">
              <BsFillPatchCheckFill className="myskillsdetails-icon" />
              <div>
                <h4>Ant Design</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of frontend part */}

        <div className="myskillsbackend">
          <h3>Backend Development</h3>
          <div className="myskillscontent">
            <article className="myskillsdetails">
              <BsFillPatchCheckFill className="myskillsdetails-icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="myskillsdetails">
              <BsFillPatchCheckFill className="myskillsdetails-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="myskillsdetails">
              <BsFillPatchCheckFill className="myskillsdetails-icon" />
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

export default MySkills