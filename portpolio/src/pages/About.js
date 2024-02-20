import React from 'react'
import me from '../assets/me.jpg'
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container aboutcontainer">
        <div className="aboutme">
          <div className="aboutme-image">
            <img src={me} alt="me" />
          </div>
          <div className="aboutcontent">
            <div className="aboutcards">
              <article className="aboutcard">
                <GiGraduateCap className="abouticon" />
                <h5>Degree</h5>
                <small>Bsc.(Hons) Software Engneering</small> <br />
                <i>University of Kelaniya.</i>
              </article>
              <article className="aboutcard">
                <BsBookmarkStar className="abouticon" />
                <h5>G.P.A</h5>
                <small>2.89</small>
              </article>
              <article className="aboutcard">
                <TfiWorld className="abouticon" />
                <h5>Domains</h5>
                <small>
                  <ul>
                    <li>Frontend Development</li>
                    <li>Web Development</li>
                    <li>MERN Stack Development</li>
                  </ul>
                </small>
              </article>
            </div>
            <p>
              <b> Software Engineering</b> Graduate (BSc HONS) in University of
              Kelaniya. React js | Node js | MongoDB | JavaScript | FullStack
              Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About