import React from 'react';
import gitHub from "../../images/github.png";
import linkedin from "../../images/linkedin.png";

import "./Header.css";
import logotipo from "./logotipo.png";
import { Link } from 'react-router-dom';


export default function Header() {
  

  return (
    <div className='baseHeader'>
      <div className='logoName'>
        <div className='imgLogo'>
          <img className='img' src={logotipo} alt='' />
        </div> 
      </div>
      <div className='boxLinkNavBar'>
        <Link className='linkNavbar' to="/">Home</Link>
        
      </div>
      <div className="imgGithubIn">
        <a href="https://github.com/Wahandri" target="_blank" rel="noopener noreferrer">
                <img src={gitHub} title='GitHub'  width="40px" alt=''/>
        </a>
        <span> | </span>
        <a href="https://linkedin.com/in/manuel-garcía-cobos-6b5413272" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} title='Linkedin' width="40px" alt=''/>
        </a>
      </div>
    </div>
  )
}
