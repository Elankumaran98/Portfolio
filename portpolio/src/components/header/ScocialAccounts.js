import React from 'react'
import './header.css'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const ScocialAccounts = () => {
  return (
    <div className="socials">
      <a
        href="https://www.linkedin.com/in/elankumaran-sivasubramaniam-67b13a15a/"
        target="_blank"
        rel="noreferrer">
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Elankumaran98"
        target="_blank"
        rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
}

export default ScocialAccounts