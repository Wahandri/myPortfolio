import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Ejemplo de estilo compatible

const code = `const objetivos = {
  "objetivos": [
    "Consolidar mis habilidades en el desarrollo front-end y back-end.",
    "Explorar nuevas tecnologías como React y Node.js.",
    "Colaborar en proyectos innovadores que desafíen y amplíen mis conocimientos.",
    "Aprender de desarrolladores experimentados y contribuir al éxito de equipos dinámicos."
  ]
};
console.log(objetivos);`;

export default function BodyJs() {
  return (
    <>
    <p className='headerVSC'>Home > Document > Portfolio > Objetivo.js</p>
    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {code}
    </SyntaxHighlighter>
    </>
  );
}
