import React from 'react';
import './Circle.css';
import imgCSS from "../../images/PHP.png";

const Circle = () => {
  return (
    <div className="conteneur">
      <h1>Animated Carrousel showing informations on hover</h1>
      <div className="circle">
        <div className="point_general point1">
            <img className='iconSkill' src={imgCSS} alt="icon1" />
          <span className="texte">Ergo ergo vel videre ad eventu plebem permittunt textum</span>
        </div>
        <div className="point_general point2">
          <span className="texte">Sollemnia ita ita ita in regis imitatus</span>
        </div>
        <div className="point_general point3">
          <span className="texte">Deiectas fieri scholarum super nec iniusta</span>
        </div>
        <div className="point_general point4">
          <span className="texte">Contemnendos se contemni non extollere opere submittere</span>
        </div>
        <div className="point_general point5">
          <span className="texte">Quae quae quiete equestrium planitie vicos cohortium</span>
        </div>
        <div className="point_general point6">
          <span className="texte">Ex rebus agrestibus tranquillis et licet veteres</span>
        </div>
        <div className="point_general point7">
          <span className="texte">Seleucus plagam ab quam limes Nicator pelagi Nili regna cum</span>
        </div>
        <div className="point_general point8">
          <span className="texte">Sublimius spatiis spatiis pari palmite uberi quam ad verticibus </span>
        </div>
      </div>
    </div>
  );
};

export default Circle;
