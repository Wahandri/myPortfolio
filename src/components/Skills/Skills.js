import React from 'react'
import "./Skills.css";
import SkillsImage from '../SkillsImage/SkillsImage';


export default function skills() {
  

  return (
    <ul className='boxskills '>
        <li>
          <SkillsImage skill='html'/>
          <p>HTML5</p>
        </li>

        <li>
          <SkillsImage skill='css'/>
          <p>CSS3</p>
        </li>
        <li>
          <SkillsImage skill='js'/>
          <p>JavaScript</p>
        </li>
        <li>
          <SkillsImage skill='react'/>
          <p>React</p>
        </li>
        <li>
          <SkillsImage skill='nextjs'/>
          <p>Next.js</p>
        </li>
        <li>
          <SkillsImage skill='node'/>
          <p>Node.js</p>
        </li>
        <li>
          <SkillsImage skill='git'/>
          <p>Git</p>
        </li>
        <li>
          <SkillsImage skill='mysql'/>
          <p>MySQL</p>
        </li>
        <li>
          <SkillsImage skill='mongo'/>
          <p>MongoDB</p>
        </li>
        {/* <li>
          <SkillsImage skill='bootstrap'/>
          <p>Bootstrap</p>
        </li> */}
        
    </ul>
  )
}
