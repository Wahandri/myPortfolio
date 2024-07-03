import React from 'react';
import '../CodeBlock.css';

export default function BodyJs() {
  const code = `const objetivos = {
  "objetivos": [
    "Consolidar mis habilidades en el desarrollo front-end y back-end.",
    "Explorar nuevas tecnologías como React y Node.js.",
    "Colaborar en proyectos innovadores que desafíen y amplíen mis conocimientos.",
    "Aprender de desarrolladores experimentados y contribuir al éxito de equipos dinámicos."
  ]
};
console.log(objetivos);`;

  return (
    <pre className="codeBlock">
      {code.split('\n').map((line, index) => (
        <span key={index}>{line}</span>
      ))}
    </pre>
  );
}
