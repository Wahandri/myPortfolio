import React, { useState, useEffect } from "react";
import "./VSC.css";
import iconJs from "../../images/jsIcon.png";
import iconJson from "../../images/jsonIcon.png";
import iconMd from "../../images/mdIcon.png";
import BodyMd from "../BodyMd/BodyMd";
import BodyEnv from "../BodyEnv/BodyEnv";
import BodyJson from "../BodyJson/BodyJson";
import archiveIcon from "../../images/archivo.png";
import logo from "../../images/empyVSC.png";

/**
 * Layout (izq ➜ dcha):
 * 1) miniSidebar fija con botón para desplegar el explorador
 * 2) explorerVSC (si está abierto), con carpeta “MiPortfolio” contraible
 * 3) mainVSC con pestañas + contenido; la X solo aparece en la pestaña activa
 *
 * Controles de ventana (titleVSC):
 * - “–” y “×/⧉” alternan plegado/desplegado de toda la ventana.
 * - Doble clic en la barra de título también alterna el plegado.
 */
export default function VSC() {
  const fileList = [
    { name: "datos.json", icon: iconJson },
    { name: "SobreMi.md", icon: iconMd },
    { name: "contacto.env", icon: iconJs },
  ];

  // Pestañas y activa
  const [openTabs, setOpenTabs] = useState(fileList.map((f) => f.name));
  const [activeTab, setActiveTab] = useState("SobreMi.md");

  // Explorador
  const [isFolderOpen, setIsFolderOpen] = useState(true);
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);

  // Ventana plegada/desplegada (oculta todo menos la barra de título)
  const [isWindowCollapsed, setIsWindowCollapsed] = useState(false);
  const toggleWindowCollapsed = () => setIsWindowCollapsed((v) => !v);

  // Cerrar explorador por defecto en móviles en el primer render
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 700) {
      setIsExplorerOpen(false);
    }
  }, []);

  // Si el viewport vuelve a ser >700px, reabrimos el explorador automáticamente
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => {
      if (window.innerWidth > 700) {
        setIsExplorerOpen(true);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleOpenFile = (fileName) => {
    if (!openTabs.includes(fileName)) setOpenTabs([...openTabs, fileName]);
    setActiveTab(fileName);
    // En móvil, cerrar explorador al elegir archivo
    if (typeof window !== "undefined" && window.innerWidth <= 700) {
      setIsExplorerOpen(false);
    }
  };

  const closeTab = (fileName) => {
    const newOpenTabs = openTabs.filter((tab) => tab !== fileName);
    setOpenTabs(newOpenTabs);
    if (activeTab === fileName) {
      setActiveTab(
        newOpenTabs.length ? newOpenTabs[newOpenTabs.length - 1] : null
      );
    }
  };

  const renderContent = () => {
    // Si no hay pestaña activa (se cerraron todas), muestra el logo centrado
    if (!activeTab) {
      return (
        <div className="emptyState">
          <img src={logo} alt="Logo MiPortfolio" />
        </div>
      );
    }
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

  const getTabClassName = (tabName) =>
    `tab ${activeTab === tabName ? "activeTab" : ""}`;

  return (
    <div className={`vscWrapper ${isWindowCollapsed ? "collapsed" : ""}`}>
      {/* Barra de título (siempre visible) */}
      <div
        className={`titleVSC ${isWindowCollapsed ? "collapsed" : ""}`}
        onDoubleClick={toggleWindowCollapsed}
        role="button"
        aria-expanded={!isWindowCollapsed}
        title={
          isWindowCollapsed
            ? "Doble clic para desplegar"
            : "Doble clic para plegar"
        }
      >
        <p className="titleLeft"></p>
        <p className="titleCenter">MiPortfolio - Visual Wahandri Code</p>

        <div className="titleControls">
          <button
            className="titleBtn titleMin"
            aria-label={isWindowCollapsed ? "Desplegar" : "Plegar"}
            title={isWindowCollapsed ? "Desplegar" : "Plegar"}
            onClick={toggleWindowCollapsed}
          >
            –
          </button>
          <button
            className="titleBtn titleClose borderR"
            aria-label={isWindowCollapsed ? "Desplegar" : "Plegar"}
            title={isWindowCollapsed ? "Desplegar" : "Plegar"}
            onClick={toggleWindowCollapsed}
          >
            {isWindowCollapsed ? "⧉" : "×"}
          </button>
        </div>
      </div>

      {/* Cuerpo (oculto si está plegado) */}
      {!isWindowCollapsed && (
        <div className="boxVSC">
          {/* 1) Barra lateral fina fija */}
          <div className="miniSidebar">
            <button
              className="miniSidebarBtn"
              onClick={() => setIsExplorerOpen(!isExplorerOpen)}
              aria-label={
                isExplorerOpen ? "Cerrar explorador" : "Abrir explorador"
              }
              title={isExplorerOpen ? "Cerrar explorador" : "Abrir explorador"}
            >
              <img width="24" height="24" alt="" src={archiveIcon} />
            </button>
          </div>

          {/* 2) Explorador (plegable/oculto) */}
          <aside
            className={`explorerVSC ${isExplorerOpen ? "open" : "closed"}`}
            aria-hidden={!isExplorerOpen}
          >
            <div
              className="folderItem"
              onClick={() => setIsFolderOpen(!isFolderOpen)}
              role="button"
              aria-expanded={isFolderOpen}
            >
              <span className="folderChevron">{isFolderOpen ? "▼" : "▶"}</span>
              <span>MiPortfolio</span>
            </div>

            {isFolderOpen &&
              fileList.map(({ name, icon }) => (
                <div
                  key={name}
                  className={`explorerItem ${
                    activeTab === name ? "activeExplorerItem" : ""
                  }`}
                  onClick={() => handleOpenFile(name)}
                  role="button"
                >
                  {icon && <img width="18" height="18" alt="" src={icon} />}
                  <span>{name}</span>
                </div>
              ))}
          </aside>

          {/* 3) Área principal: pestañas + contenido */}
          <div className="mainVSC">
            <header className="boxHeaderVSC">
              {openTabs.map((tabName) => {
                const details = fileList.find((f) => f.name === tabName);
                return (
                  <div
                    key={tabName}
                    className={getTabClassName(tabName)}
                    onClick={() => handleOpenFile(tabName)}
                  >
                    {details?.icon && (
                      <img width="18" height="18" alt="" src={details.icon} />
                    )}
                    <p>{tabName}</p>
                    {/* X solo en pestaña activa y a la derecha */}
                    {tabName === activeTab && (
                      <span
                        className="closeTab"
                        onClick={(e) => {
                          e.stopPropagation();
                          closeTab(tabName);
                        }}
                        aria-label="Cerrar pestaña"
                        title="Cerrar pestaña"
                      >
                        <div className="XIcon" role="img" aria-hidden="true">
                          x
                        </div>
                      </span>
                    )}
                  </div>
                );
              })}
            </header>

            <div className="boxBodyVSC">
              <div className="scrollableContent">{renderContent()}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
