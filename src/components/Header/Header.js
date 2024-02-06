import React from 'react';
import gitHub from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import "./Header.css";
import logotipo from "./logotipo.png";
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <div className='baseHeader borderCard'>
      <div className='logoName'>
        <div className='imgLogo'>
          <img className='img' src={logotipo} alt='' />
        </div> 
      </div>
      <div className='boxLinkNavBar'>
        <div className='flexBetween'>
          <Link className="textNone" to="/" >
            <button className={`linkNavbar ${location.pathname === '/' ? 'activeLink' : ''}`}>Porfolio</button>
          </Link>
        
          <Link className="textNone"  to="/cv" >
            <button className={`linkNavbar ${location.pathname === '/cv' ? 'activeLink' : ''}`}>Ver Currículum</button>
          </Link>
        </div>
      </div>
      <div className="imgGithubIn">
        <a href="https://github.com/Wahandri" target="_blank" rel="noopener noreferrer">
                <img className='imgSkill' src={gitHub} title='GitHub'  width="40px" alt=''/>
        </a>
        <span> | </span>
        <a href="https://linkedin.com/in/manuel-garcía-cobos-6b5413272" target="_blank" rel="noopener noreferrer">
            <img className='imgSkill' src={linkedin} title='Linkedin' width="40px" alt=''/>
        </a>
      </div>
    </div>
  );
}
