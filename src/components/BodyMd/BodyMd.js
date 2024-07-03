import React from 'react';
import '../CodeBlock.css';

export default function BodyMd() {
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

  return (
    <pre className="codeBlock">
      {code.split('\n').map((line, index) => (
        <span key={index}>{line}</span>
      ))}
    </pre>
  );
}
