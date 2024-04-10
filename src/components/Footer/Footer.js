import React from 'react';
import "./Footer.css";
import logo from "../../images/logotipo.png";
import gitHub from "../../images/github.png";
import linkedin from "../../images/linkedin.png";

export default function Footer() {
  return (
    <footer className='footer borderCard flexFooter'>
        <div className='flex2'>
            <div className="contenedor-rotacion">
                <img className="rotacion" src={logo} width="70px" alt=''/>
                <div className="texto">
                    <span className="texto-original">Desarrollado por <span className='color2'>Wahandri</span></span>
                    <span className="texto-hover">Desarrollado por <span className='color2'>Manuel García Cobos</span></span>
                </div>
            </div>
        </div>
        <div className='flex2'>
            
            <p>Mas sobre mi:</p> 

            <a href="https://github.com/Wahandri" target="_blank" rel="noopener noreferrer">
                <img className='imgSkill' src={gitHub} title='GitHub'  width="40px" alt=''/>
            </a>
            <span> | </span>
            <a href="https://linkedin.com/in/manuel-garcía-cobos-6b5413272" target="_blank" rel="noopener noreferrer">
                <img className='imgSkill' src={linkedin} title='Linkedin' width="40px" alt=''/>
            </a>
        </div>
    </footer>
  )
}
