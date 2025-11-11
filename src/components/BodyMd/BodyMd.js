import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BodyMd() {
  const md = `# Sobre mí

Soy Manuel García Cobos, desarrollador web Full Stack que llegó al código desde la hostelería,
impulsado por la curiosidad y las ganas de crear cosas útiles.

Tras varios años en atención al cliente, en 2022 decidí dar el salto y formarme como desarrollador
en CodeSpace Academy, donde cursé un bootcamp de un año y adquirí una sólida base en:
HTML, CSS, JavaScript, React, Node, Express, MongoDB y MySQL.

Desde entonces he seguido aprendiendo y creando proyectos propios para mejorar mis habilidades.
Me considero resolutivo, autodidacta y detallista, con un enfoque en interfaces limpias, 
APIs eficientes y una experiencia de usuario cuidada.

Actualmente busco seguir creciendo como desarrollador y participar en proyectos donde el diseño 
y la funcionalidad vayan de la mano.
`;

  return (
    <div className="boxSizeText">
      <p className="headerVSC">
        Home &gt; Document &gt; Portfolio &gt; SobreMi.md
      </p>
      <SyntaxHighlighter
        language="markdown"
        style={vscDarkPlus}
        showLineNumbers
        startingLineNumber={1}
      >
        {md}
      </SyntaxHighlighter>
    </div>
  );
}
