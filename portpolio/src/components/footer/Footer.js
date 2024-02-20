import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footerlogo'>Elankumaran</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footersocials">
          <a href="https://www.linkedin.com/in/elankumaran-sivasubramaniam-67b13a15a/"><BsLinkedin/></a>
          <a href="https://github.com/Elankumaran98"><BsGithub/></a>
        </div>

        <div className="footercopyright">
            <small>&copy;Elankumaran. All rightts reserved.</small>
        </div>
    </footer>
  )
}

export default Footer