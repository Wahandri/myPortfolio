import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Ejemplo de estilo compatible

const code = `async function iniciarCarrera() {
  const respuesta = await fetch("https://api.ejemplo.com/solicitudes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ puesto: "Junior Developer" })
  });

  if (respuesta.ok) {
    const data = await respuesta.json();
    if (data.aceptado) {
      console.log("✅ Solicitud aceptada.");
      console.log("🧠 Aprendiendo y aportando desde el primer día.");
    } else {
      console.log("❌ Solicitud rechazada.");
      console.log("📚 Seguimos mejorando y buscando nuevas oportunidades.");
    }
  } else {
    console.log("❌ Solicitud ignorada.");
    await iniciarCarrera(); // reintento
  }
}

iniciarCarrera();
`;

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
