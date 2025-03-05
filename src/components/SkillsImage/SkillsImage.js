import React from 'react'
import "./SkillsImage.css";
import html from '../../images/html-5.png';
import css from '../../images/css-3.png';
import nextjs from '../../images/nextjs.png';
import js from '../../images/js.png';
import react from '../../images/react.png';
import node from '../../images/node.js.png';
import mongo from '../../images/mongodb.png';
import git from '../../images/git.png';
import php from '../../images/PHP.png';
import mysql from '../../images/mySQL.png';
import sass from '../../images/sass.png';
import bootstrap from '../../images/Bootstrap.png';

const skillsImages = {
  html, css, js, react, node, mongo, git, php, mysql, sass, bootstrap, nextjs
}



export default function SkillsImage( {skill} ) {
    return (
    <div>
        <img className='skills imgSkill' src={skillsImages[skill]} alt={skill}/>
    </div>
  )
}
