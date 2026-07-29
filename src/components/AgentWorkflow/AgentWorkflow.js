import React from "react";
import "./AgentWorkflow.css";

const steps = [
  {
    icon: "💡",
    title: "Idea",
    desc: "Necesidad o problema a resolver",
  },
  {
    icon: "✍️",
    title: "Prompt Técnico",
    desc: "Traduzco la idea a especificaciones precisas para el agente",
  },
  {
    icon: "🤖",
    title: "Agente (opencode)",
    desc: "El agente IA analiza, escribe código y lo aplica al proyecto",
  },
  {
    icon: "🔍",
    title: "Revisión",
    desc: "Reviso cada cambio, refino el prompt y repito hasta que está correcto",
  },
  {
    icon: "⚡",
    title: "Build & Test",
    desc: "Compilo, ejecuto tests y verifico que todo funcione",
  },
  {
    icon: "🚀",
    title: "Deploy",
    desc: "Docker build + deploy al servidor o a producción",
  },
];

export default function AgentWorkflow() {
  return (
    <div className="agent-workflow-section">
      <div className="agent-workflow-content">
        <h2 className="fontTitle agent-workflow-title">
          {"< Mi Workflow con Agentes />"}
        </h2>
        <p className="agent-workflow-subtitle">
          Así es como programo hoy: código escrito por mí, potenciado por IA.
          Cada proyecto sigue este flujo:
        </p>

        <div className="workflow-steps">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <div className="workflow-step">
                <div className="step-icon">{step.icon}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="workflow-arrow">↓</div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="workflow-note">
          <p>
            No soy un "prompter" — soy programador. Uso agentes IA como herramientas
            para amplificar mi capacidad, igual que uso un IDE o Git. Cada línea de
            código pasa por mi criterio antes de llegar a producción.
          </p>
        </div>
      </div>
    </div>
  );
}
