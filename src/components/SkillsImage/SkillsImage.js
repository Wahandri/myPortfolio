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
import python from '../../images/skills/python.svg';
import typescript from '../../images/skills/typescript.svg';
import fastapi from '../../images/skills/fastapi.svg';
import flutter from '../../images/skills/flutter.svg';
import docker from '../../images/skills/docker.svg';
import threejs from '../../images/skills/threejs.svg';
import websocket from '../../images/skills/websocket.svg';
import ai from '../../images/skills/ai.svg';
import deepseek from '../../images/skills/deepseek.svg';

const skillsImages = {
  html, css, js, react, node, mongo, git, php, mysql, sass, bootstrap, nextjs,
  python, typescript, fastapi, flutter, docker, threejs, websocket, ai, deepseek
}

export default function SkillsImage( {skill} ) {
    return (
    <div>
        <img className='skills imgSkill' src={skillsImages[skill]} alt={skill}/>
    </div>
  )
}
