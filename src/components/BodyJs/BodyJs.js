import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BodyJs() {
  const code = `// Skills.js

const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js"],
  backend: ["Node.js", "Express.js"],
  databases: ["MongoDB", "MySQL"],
  tools: ["Git", "Docker"],
  methodologies: ["Agile", "Scrum", "UI/UX"],
  softSkills: ["Trabajo en equipo", "Comunicación", "Resolutivo", "Adaptabilidad"],
};

export default skills;`;

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
