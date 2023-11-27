import React from 'react'
import "./Skills.css";
import SkillsImage from '../SkillsImage/SkillsImage';


export default function skills() {
  

  return (
    <div className='boxskills'>
        <SkillsImage skill='html'/>
        <SkillsImage skill='css'/>
        <SkillsImage skill='js'/>
        <SkillsImage skill='react'/>
        <SkillsImage skill='node'/>
        <SkillsImage skill='mongo'/>
        <SkillsImage skill='git'/>
        <SkillsImage skill='php'/>
        <SkillsImage skill='mysql'/>
        <SkillsImage skill='sass'/>
        <SkillsImage skill='bootstrap'/>
        
    </div>
  )
}
