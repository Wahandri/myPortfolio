import React from 'react';
import datos from '../../data/datos.json';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function BodyMd() {
  const { nombre, titulo, ubicacion, intereses, habilidades, experiencia, contacto } = datos;

  const destacados = experiencia.slice(0, 2).map(p => `- **${p.proyecto}** — ${p.descripcion}`).join('\n');

  const md = `# ${nombre}

${titulo} — ${ubicacion}

Desarrollador orientado a producto. Construyo interfaces **limpias y funcionales**, integro APIs y cuido la experiencia de usuario.

## Tecnologías
${habilidades.join(' · ')}

## Intereses
${intereses.join(' · ')}

## Proyectos destacados
${destacados}

## Contacto
- **Email:** ${contacto.email}
- **LinkedIn:** ${contacto.linkedin}
`;

  return (
    <div className='boxSizeText'>
      <p className='headerVSC'>Home &gt; Document &gt; Portfolio &gt; SobreMi.md</p>
      <SyntaxHighlighter language="markdown" style={vscDarkPlus} showLineNumbers startingLineNumber={1}>
        {md}
      </SyntaxHighlighter>
    </div>
  );
}
