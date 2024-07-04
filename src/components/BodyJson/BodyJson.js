import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const code = `{
  "nombre": "Manuel García Cobos",
  "titulo": "Desarrollador Web Junior",
  "ubicacion": "Málaga, España",
  "contacto": {
    "email": "wahandricode@gmail.com",
    "telefono": "+34 744-641-741"
  },
  "habilidades": [
    "HTML", "CSS", "JavaScript", "Git", "React", 
    "Node.js", "Express", "MongoDB", "MySql"
  ],
  "intereses": [
    "Desarrollo de software",
    "Inteligencia Artificial",
    "Tecnologías emergentes",
    "Viajes",
    "Fotografía"
  ]
}`;

export default function BodyJson() {
  return (
    <div className='boxSizeText'>
      <p className='headerVSC'>Home > Document > Portfolio > SobreMi.json</p>
      <SyntaxHighlighter language="json" style={vscDarkPlus} showLineNumbers startingLineNumber={1}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
