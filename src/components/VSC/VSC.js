import React, { useState } from 'react';
import "./VSC.css";
import iconJs from "../../images/jsIcon.png";
import iconJson from "../../images/jsonIcon.png";
import iconMd from "../../images/mdIcon.png";
import BodyJson from '../BodyJson/BodyJson';
import BodyMd from '../BodyMd/BodyMd';
import BodyJs from '../BodyJs/BodyJs';

export default function VSC() {
  const [activeTab, setActiveTab] = useState('QuienSoy.json');

  const renderContent = () => {
    switch (activeTab) {
      case 'QuienSoy.json':
        return <BodyJson />;
      case 'Experiencia.md':
        return <BodyMd />;
      case 'Objetivo.js':
        return <BodyJs />;
      default:
        return null;
    }
  };

  const getTabClassName = (tabName) => {
    return `tab ${activeTab === tabName ? 'activeTab' : ''}`;
  };

  return (
    <div className='boxVSC'>
      <header className='boxHeaderVSC'>
        <div className={getTabClassName('QuienSoy.json')} onClick={() => setActiveTab('QuienSoy.json')}>
          <img width="30px" alt='' src={iconJson} /> 
          <p>QuienSoy.json</p>
        </div>
        <div className={getTabClassName('Experiencia.md')} onClick={() => setActiveTab('Experiencia.md')}>
          <img width="30px" alt='' src={iconMd} /> 
          <p>Experiencia.md</p>
        </div>
        <div className={getTabClassName('Objetivo.js')} onClick={() => setActiveTab('Objetivo.js')}>
          <img width="20px" alt='' src={iconJs} /> 
          <p>Objetivo.js</p>
        </div>
      </header>
      <div className='boxBodyVSC'>
        {renderContent()}
      </div>
    </div>
  );
}
