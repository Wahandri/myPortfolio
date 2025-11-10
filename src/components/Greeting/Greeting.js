import React from "react";
import hombre from "../../images/hombrex.png";
import "./Greeting.css";
import Skills from "../Skills/Skills";

export default function Greeting() {
  return (
    <div className="boxGreeting borderCard flexCenter">
      {/* <div className="boxMyDescription hello"> */}
      <div className="helloImg">
        <div className="textStart padding-20 ">
          <h1>
            Manuel García Cobos
          </h1>
          <h2 className="color2">
          {`< Desarrollador Web />`}
          </h2>
        </div>
        <div className="divMen">
          <img className="imgMen" src={hombre} alt="" />
        </div>
      </div>
      <Skills />
      

      {/* </div> */}
      
    </div>
  );
}
