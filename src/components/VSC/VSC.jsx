import React, { useMemo, useState } from "react";
import "./VSC.css";
import BodySkills from "../BodySkills/BodySkills";

const iconMd = "📝";
const iconJson = "{ }";
const iconEnv = "🔐";

const fileList = [
  { name: "SobreMi.md", icon: iconMd },
  { name: "datos.json", icon: iconJson },
  { name: "contacto.env", icon: iconEnv },
  { name: "Skills.md", icon: iconMd },
];

const defaultContent = {
  "SobreMi.md": (
    <article className="vscBody vscBody--md">
      <h2>Sobre mí</h2>
      <p>
        ¡Hola! Soy Manuel, desarrollador web con foco en construir interfaces
        limpias y experiencias accesibles. Me gusta trabajar con React y crear
        herramientas que resuelvan problemas reales.
      </p>
      <p>
        Disfruto colaborar en equipo, compartir conocimiento y mantener una
        comunicación clara con las personas involucradas en cada proyecto.
      </p>
    </article>
  ),
  "datos.json": (
    <article className="vscBody vscBody--json">
      <pre>
        {`{
  "role": "Desarrollador Web",
  "experience": "+3 años",
  "location": "Madrid, España",
  "interests": ["UI", "APIs", "Productos digitales"]
}`}
      </pre>
    </article>
  ),
  "contacto.env": (
    <article className="vscBody vscBody--env">
      <dl>
        <div>
          <dt>Email</dt>
          <dd><a href="mailto:hola@wahandri.dev">hola@wahandri.dev</a></dd>
        </div>
        <div>
          <dt>LinkedIn</dt>
          <dd>
            <a href="https://www.linkedin.com/in/wahandri/">linkedin.com/in/wahandri</a>
          </dd>
        </div>
        <div>
          <dt>GitHub</dt>
          <dd>
            <a href="https://github.com/Wahandri">github.com/Wahandri</a>
          </dd>
        </div>
      </dl>
    </article>
  ),
};

const VSC = () => {
  const defaultFileName = useMemo(() => fileList[0].name, []);
  const [openFiles, setOpenFiles] = useState([defaultFileName]);
  const [activeFile, setActiveFile] = useState(defaultFileName);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleFileClick = (fileName) => {
    setOpenFiles((prev) => {
      if (prev.includes(fileName)) {
        return prev;
      }
      return [...prev, fileName];
    });
    setActiveFile(fileName);
    setIsSidebarOpen(false);
  };

  const closeFile = (fileName) => {
    setOpenFiles((prev) => {
      if (!prev.includes(fileName)) {
        return prev;
      }
      let updated = prev.filter((name) => name !== fileName);
      if (!updated.length) {
        updated = [defaultFileName];
      }
      setActiveFile((current) => {
        if (current === fileName) {
          return updated[updated.length - 1];
        }
        return current;
      });
      return updated;
    });
  };

  const renderContent = () => {
    switch (activeFile) {
      case "Skills.md":
        return <BodySkills />;
      default:
        return defaultContent[activeFile] || null;
    }
  };

  return (
    <div className="vsc">
      <div className="vsc__header">
        <button
          type="button"
          className="vsc__toggle"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          Explorador
        </button>
      </div>
      <div className="vsc__layout">
        <aside className={`vsc__sidebar ${isSidebarOpen ? "is-open" : ""}`}>
          <h3 className="vsc__sidebarTitle">PORTFOLIO</h3>
          <ul className="vsc__fileList">
            {fileList.map((file) => (
              <li key={file.name}>
                <button
                  type="button"
                  className={`vsc__fileButton ${
                    activeFile === file.name ? "is-active" : ""
                  }`}
                  onClick={() => handleFileClick(file.name)}
                >
                  <span className="vsc__fileIcon" aria-hidden="true">
                    {file.icon}
                  </span>
                  <span>{file.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="vsc__main">
          <div className="vsc__tabs" role="tablist" aria-label="Archivos abiertos">
            {openFiles.map((fileName) => (
              <div
                key={fileName}
                className={`vsc__tab ${fileName === activeFile ? "is-active" : ""}`}
                role="tab"
                aria-selected={fileName === activeFile}
                tabIndex={fileName === activeFile ? 0 : -1}
                onClick={() => setActiveFile(fileName)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveFile(fileName);
                  }
                }}
              >
                <span>{fileName}</span>
                <button
                  type="button"
                  className="vsc__tabClose"
                  aria-label={`Cerrar ${fileName}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    closeFile(fileName);
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="vsc__content" role="tabpanel">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSC;
