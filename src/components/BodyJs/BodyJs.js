import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Ejemplo de estilo compatible

const code = `const objetivos = [
  "Comenzar mi carrera laboral como desarrollador",
  "Aprender de desarrolladores experimentados y contribuir al éxito del equipo.",
  "Colaborar en proyectos innovadores que desafíen y amplíen mis conocimientos.",
  "Consolidar mis habilidades en el desarrollo front-end y back-end."
];

console.log("Realizando búsquedas:");
objetivos.forEach((objetivo) => {
  buscar(objetivo);
});`;

export default function BodyJs() {
  return (
    <>
    <p className='headerVSC'>Home > Document > Portfolio > Objetivo.js</p>
    <SyntaxHighlighter language="javascript" showLineNumbers startingLineNumber={1} style={vscDarkPlus}>
      {code}
    </SyntaxHighlighter>
    </>
  );
}
