import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BodyJs() {
  const code = `// Skills.js — AI-Augmented Developer
const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Three.js"],
  backend: ["Python (FastAPI)", "Node.js", "Express.js", "WebSockets", "REST APIs"],
  mobile: ["Flutter", "Dart"],
  databases: ["MongoDB", "MySQL", "MariaDB"],
  devops: ["Docker", "Linux", "Cloudflare", "Git"],
  ai_ml: ["DeepSeek API", "Ollama", "LangChain", "OpenAI API", "PyTorch"],
  agents: ["opencode (coder agent)", "NOVA (personal AI assistant)", "Custom agent workflows"],
  games: ["Three.js", "WebSockets multiplayer", "Voxel rendering"],
  tools: ["Git", "Docker Compose", "VS Code", "Postman", "Figma"],
};

module.exports = { developer: "Manuel García Cobos", creed: "Código + IA = ∞" };`;

  return (
    <div className="boxSizeText">
      <p className="headerVSC">
        Home &gt; Document &gt; Portfolio &gt; Skills.js
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        showLineNumbers
        startingLineNumber={1}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
