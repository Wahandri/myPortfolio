import React from 'react';
import "./Start.css"
import Greeting from "../Greeting/Greeting";
import Skills from '../Skills/Skills';
import VSC from "../VSC/VSC";


export default function Start() {
  return (
    <div>
        <Greeting />
        <Skills />
        <VSC />
    </div>
  )
}
