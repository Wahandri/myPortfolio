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
          <SkillsImage skill='typescript'/>
          <p>TypeScript</p>
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
          <SkillsImage skill='python'/>
          <p>Python</p>
        </li>
        <li>
          <SkillsImage skill='fastapi'/>
          <p>FastAPI</p>
        </li>
        <li>
          <SkillsImage skill='flutter'/>
          <p>Flutter</p>
        </li>
        <li>
          <SkillsImage skill='node'/>
          <p>Node.js</p>
        </li>
        <li>
          <SkillsImage skill='docker'/>
          <p>Docker</p>
        </li>
        <li>
          <SkillsImage skill='threejs'/>
          <p>Three.js</p>
        </li>
        <li>
          <SkillsImage skill='websocket'/>
          <p>WebSockets</p>
        </li>
        <li>
          <SkillsImage skill='ai'/>
          <p>IA / LLMs</p>
        </li>
        <li>
          <SkillsImage skill='deepseek'/>
          <p>DeepSeek</p>
        </li>
        <li>
          <SkillsImage skill='mongo'/>
          <p>MongoDB</p>
        </li>
        <li>
          <SkillsImage skill='mysql'/>
          <p>MySQL</p>
        </li>
        <li>
          <SkillsImage skill='git'/>
          <p>Git</p>
        </li>
    </ul>
  )
}
