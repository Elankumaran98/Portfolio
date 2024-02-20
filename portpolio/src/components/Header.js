import React from 'react'
import CTA from './CTA';
import ScocialAccounts from './ScocialAccounts';
import me from '../assets/me.jpg'

const Header = () => {
  return (
    <header>
      <div className="container headercontainer">
        <h5>Hello, I'm</h5>
        <h1>Elankumaran Sivasubramaniam</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <ScocialAccounts />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contacts" className="scrolldown">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header