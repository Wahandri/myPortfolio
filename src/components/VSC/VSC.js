import React, { useState } from "react";
import "./VSC.css";
import iconJs from "../../images/jsIcon.png";
import iconJson from "../../images/jsonIcon.png";
import iconMd from "../../images/mdIcon.png";
import BodyMd from "../BodyMd/BodyMd";
import BodyEnv from "../BodyEnv/BodyEnv";
import BodyJson from "../BodyJson/BodyJson";

export default function VSC() {
  // Lista de archivos disponibles junto con sus iconos.
  const fileList = [
    { name: "datos.json", icon: iconJson },
    { name: "SobreMi.md", icon: iconMd },
    { name: "contacto.env", icon: iconJs },
  ];

  // Estado con las pestañas actualmente abiertas; por defecto están todas abiertas.
  const [openTabs, setOpenTabs] = useState(fileList.map((f) => f.name));

  // Pestaña activa para determinar qué contenido mostrar.
  const [activeTab, setActiveTab] = useState("SobreMi.md");

  // Abre un archivo desde el explorador (añade la pestaña si no está) y lo activa.
  const handleOpenFile = (fileName) => {
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName]);
    }
    setActiveTab(fileName);
  };

  // Cierra una pestaña.  Si era la activa, selecciona otra o vacía la selección.
  const closeTab = (fileName) => {
    const newOpenTabs = openTabs.filter((tab) => tab !== fileName);
    setOpenTabs(newOpenTabs);
    if (activeTab === fileName) {
      if (newOpenTabs.length > 0) {
        setActiveTab(newOpenTabs[newOpenTabs.length - 1]);
      } else {
        setActiveTab(null);
      }
    }
  };

  // Devuelve el componente de contenido según la pestaña activa.
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

  // Devuelve las clases CSS para una pestaña (activa o no).
  const getTabClassName = (tabName) => {
    return `tab ${activeTab === tabName ? "activeTab" : ""}`;
  };

  return (
    <div className="boxVSC borderCard" style={{ display: "flex" }}>
      {/* Barra lateral del explorador */}
      <aside className="explorerVSC" style={{ minWidth: "140px" }}>
        <div>Explorador</div>
        {fileList.map(({ name, icon }) => (
          <div
            key={name}
            className="explorerItem"
            onClick={() => handleOpenFile(name)}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              padding: "4px 8px",
            }}
          >
            {icon && (
              <img
                width="18px"
                height="18px"
                alt=""
                src={icon}
                style={{ marginRight: "6px" }}
              />
            )}
            <span>{name}</span>
          </div>
        ))}
      </aside>

      {/* Área principal con las pestañas y el contenido */}
      <div style={{ flexGrow: 1 }}>
        <header className="boxHeaderVSC">
          {openTabs.map((tabName) => {
            const details = fileList.find((f) => f.name === tabName);
            return (
              <div
                key={tabName}
                className={getTabClassName(tabName)}
                onClick={() => handleOpenFile(tabName)}
                style={{ display: "flex", alignItems: "center" }}
              >
                {details?.icon && (
                  <img
                    width="18px"
                    height="18px"
                    alt=""
                    src={details.icon}
                    style={{ marginRight: "4px" }}
                  />
                )}
                <p style={{ marginRight: "4px", marginBottom: 0 }}>{tabName}</p>
                {/* Botón de cierre (la X).  Detiene la propagación para no activar la pestaña al cerrar */}
                <span
                  className="closeTab"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeTab(tabName);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  &#10005;
                </span>
              </div>
            );
          })}
        </header>
        <div className="boxBodyVSC">
          <div className="scrollableContent">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}
