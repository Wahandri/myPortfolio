import React, { useState } from 'react';
import "./VSC.css";
import iconJs from "../../images/jsIcon.png";
import iconJson from "../../images/jsonIcon.png";
// import iconMd from "../../images/mdIcon.png";
import BodyJson from '../BodyJson/BodyJson';
import BodyMd from '../BodyMd/BodyMd';
import BodyJs from '../BodyJs/BodyJs';

export default function VSC() {
  const [activeTab, setActiveTab] = useState('SobreMi.json');

  const renderContent = () => {
    switch (activeTab) {
      case 'SobreMi.json':
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
    <div className='boxVSC borderCard'>
      <header className='boxHeaderVSC'>
        <div className={getTabClassName('SobreMi.json')} onClick={() => setActiveTab('SobreMi.json')}>
          <img width="30px" alt='' src={iconJson} /> 
          <p>SobreMi.json</p>
        </div>
        <div className={getTabClassName('Objetivo.js')} onClick={() => setActiveTab('Objetivo.js')}>
          <img width="20px" alt='' src={iconJs} /> 
          <p>Objetivo.js</p>
        </div>
      </header>
      <div className='boxBodyVSC'>
        <div className="scrollableContent">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
