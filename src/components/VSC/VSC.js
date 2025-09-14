import React, { useState } from "react";
import "./VSC.css";
import iconJs from "../../images/jsIcon.png";
import iconJson from "../../images/jsonIcon.png";
import iconMd from "../../images/mdIcon.png";
import BodyMd from "../BodyMd/BodyMd";
import BodyEnv from "../BodyEnv/BodyEnv";
import BodyJson from "../BodyJson/BodyJson";

export default function VSC() {
  const [activeTab, setActiveTab] = useState("SobreMi.md");

  const renderContent = () => {
    switch (activeTab) {
      case "SobreMi.md":
        return <BodyMd />;
      case "contacto.env":
        return <BodyEnv />;
      case "datos.json":
        return <BodyJson />;
      default:
        return null;
    }
  };

  const getTabClassName = (tabName) => {
    return `tab ${activeTab === tabName ? "activeTab" : ""}`;
  };

  return (
    <div className="boxVSC borderCard">
      {/* <div className="titleBarVSC"></div> */}
      <header className="boxHeaderVSC">
        <div
          className={`${getTabClassName("datos.json")}`}
          onClick={() => setActiveTab("datos.json")}
        >
          <img width="30px" alt="" src={iconJson} />
          <p>datos.json</p>
        </div>
        <div
          className={getTabClassName("SobreMi.md")}
          onClick={() => setActiveTab("SobreMi.md")}
        >
          <img width="30px" alt="" src={iconMd} />
          <p>SobreMi.md</p>
        </div>
        <div
          className={getTabClassName("contacto.env")}
          onClick={() => setActiveTab("contacto.env")}
        >
          <img width="20px" alt="" src={iconJs} />
          <p>contacto.env</p>
        </div>
      </header>
      <div className="boxBodyVSC">
        <div className="scrollableContent">{renderContent()}</div>
      </div>
    </div>
  );
}
