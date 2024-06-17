import React from 'react';
import "./Start.css"
import Greeting from "../Greeting/Greeting"
// import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';


export default function Start() {
  return (
    <div>
        <Greeting />
        {/* <Skills /> */}
        <Projects />
    </div>
  )
}
