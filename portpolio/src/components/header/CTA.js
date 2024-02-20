import React from 'react'
import resumeData from "../../assets/Resume Elankumaran SivaSubramaniam.pdf";
import './header.css'
const CTA = () => {
  return (
    <div className="cta">
      <a href={resumeData} download className="btn">
        Download CV
      </a>
      <a href="#contacts" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
}

export default CTA