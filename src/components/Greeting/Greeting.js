import React from "react";
import hombre from "../../images/hombrex.png";
import "./Greeting.css";
import Skills from "../Skills/Skills";
import VSC from "../VSC/VSC";

export default function Greeting() {
  return (
    <div className="boxGreeting borderCard flexCenter">
      {/* <div className="boxMyDescription hello"> */}
      <div className="helloImg">
        <div className="textStart">
          <h1>
            Me llamo <span class="color2">Manuel</span>
          </h1>
          <h1>
            Y soy <span className="color2">Desarrollador Web</span>
          </h1>
        </div>
        <div className="divMen">
          <img className="imgMen" src={hombre} alt="" />
        </div>
      </div>

      <VSC />

      {/* </div> */}
      <Skills />
    </div>
  );
}
