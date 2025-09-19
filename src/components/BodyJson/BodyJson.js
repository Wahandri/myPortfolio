import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BodyJson() {
  const code = `{
  "perfil": {
    "nombre": "Manuel García Cobos",
    "ubicacion": "Málaga, España",
    "sobreMiShort": "Desarrollador web Full Stack enfocado en React/Next y Node."
  },
  "proyectos": [
    {
      "nombre": "Comer-IA",
      "url": "https://www.comer-ia.com/",
      "stack": ["Next.js", "OpenAI", "Vercel"]
    },
    {
      "nombre": "JokesWeb 2.0",
      "url": "https://github.com/Wahandri/JokesWeb-2.0",
      "stack": ["React", "Node.js", "Express", "MongoDB"]
    }
  ],
  "portfolioUrl": "https://wahandri.github.io/",
  "linkedin": "https://www.linkedin.com/in/manuel-garc%C3%ADa-cobos-6b5413272/",
  "contacto": {
    "email": "wahandricode@gmail.com"
  },
  "ubicacion": "Málaga, 29010"
}`;

  return (
    <div className="boxSizeText">
      <p className="headerVSC">
        Home &gt; Document &gt; Portfolio &gt; datos.json
      </p>
      <SyntaxHighlighter
        language="json"
        style={vscDarkPlus}
        showLineNumbers
        startingLineNumber={1}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
