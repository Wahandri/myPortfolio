import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BodyMd() {
  const md = `# Sobre mí

Me llamo Manuel García Cobos. Soy un desarrollador web Full Stack que llegó al código desde la hostelería, impulsado por una fuerte curiosidad tecnológica y ganas de construir cosas útiles.

Después de años en atención al cliente, en 2022 decidí dar el salto y formarme como desarrollador. Me gradué en un bootcamp intensivo donde descubrí mi pasión por crear productos web que no solo funcionen, sino que tengan propósito.

Me defino como alguien resolutivo, autodidacta y con buen ojo para el detalle. Disfruto trabajando en equipo, compartiendo ideas y aprendiendo de otros.

Mi enfoque está en construir interfaces limpias, conectar APIs de forma eficiente y cuidar la experiencia de usuario desde el primer clic hasta el último scroll.

Actualmente estoy enfocado en seguir creciendo como desarrollador, aprender nuevas tecnologías y participar en proyectos donde el diseño y la funcionalidad vayan de la mano.
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
