import React from 'react'
import './myprojects.css'
import pos from '../../assets/pos.png'
import pizza from '../../assets/pizza.png'
import prohub from '../../assets/prohub.jpeg'

const MyProjects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pos} alt="" />
          </div>
          <h3>POS Sysyem (ongoing)</h3>
          <small className="text-light">
            React | Ant Design | MongoDB | Express | Node Js
          </small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Elankumaran98/POS"
              target="_blank"
              rel="noreferrer"
              className="btn">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pizza} alt="" />
          </div>
          <h3>EL Pizza (ongoing)</h3>
          <small className="text-light">
            React | Bootstrap | MongoDB | Express | Node Js
          </small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Elankumaran98/EL-Pizza"
              target="_blank"
              rel="noreferrer"
              className="btn">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={prohub} alt="" />
          </div>
          <h3>Project Management Tool (FrontEnd side My Contribution)</h3>
          <small className="text-light">
            React | Bootstrap | SQL | Springboot
          </small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ProHubOffl"
              target="_blank"
              rel="noreferrer"
              className="btn">
              Github
            </a>
            <a
              href="https://github.com/ProHubOffl"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary">
              Visit Website
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default MyProjects