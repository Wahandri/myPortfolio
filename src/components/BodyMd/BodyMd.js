import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Ejemplo de estilo compatible

const code = `# Experiencia

**Educación:**
- Institución: Nombre de tu institución educativa
- Título: Título obtenido (p. ej., Ingeniería Informática)
- Año de graduación: Año de graduación

**Proyectos:**
1. **Nombre del proyecto**:
   - Descripción: Breve descripción del proyecto y tu rol en él
   - Tecnologías: Lista de tecnologías utilizadas

2. **Otro proyecto**:
   - Descripción: Breve descripción del proyecto y tu rol en él
   - Tecnologías: Lista de tecnologías utilizadas`;

export default function BodyMd() {
  return (
    <>
    <p className='headerVSC'>Home > Document > Portfolio > Experiencia.md</p>
    <SyntaxHighlighter language="markdown" style={vscDarkPlus}>
      {code}
    </SyntaxHighlighter>
    </>
  );
}
