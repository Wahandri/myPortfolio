import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BodyMd() {
  const md = `# Sobre mí

Soy Manuel García Cobos, AI-Augmented Full-Stack Developer.

Mi historia es la de un programador de formación clásica que abrazó
la revolución de la IA. Estudié desarrollo web full-stack en CodeSpace
Academy (2022-2023) y desde entonces he construido decenas de proyectos,
desde apps Android con Flutter hasta videojuegos 3D multijugador.

Pero lo que realmente me define es cómo trabajo hoy: **código + agentes IA**.
No soy un "prompter" — soy un programador que usa IA como amplificador de
su capacidad. Cada línea la escribo yo, cada decisión arquitectónica la tomo
yo, pero con una velocidad y alcance que multiplican mi productividad.

## Stack Principal
- **Frontend**: React, Next.js, TypeScript, Three.js, Flutter
- **Backend**: Python (FastAPI), Node.js, WebSockets
- **Infra**: Docker, Linux, Cloudflare Tunnels, MariaDB
- **IA**: DeepSeek API, Ollama, LangChain, Agentes (opencode)

## Filosofía
"La programación no ha muerto — se ha transformado. Ahora construyo
sistemas que antes requerían equipos enteros, usando agentes IA como
mis aliados."
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
