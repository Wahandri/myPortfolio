import React from 'react';
import datos from '../../data/datos.json';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function BodyEnv() {
  const { contacto = {}, ubicacion = '' } = datos;
  const email = contacto?.email ?? '';
  const linkedin = contacto?.linkedin ?? '';
  const github = contacto?.github ?? '';
  const web = contacto?.web ?? '';

  const env = `# contacto.env
# AI-Augmented Full-Stack Developer
EMAIL=${email}
LINKEDIN=${linkedin}
GITHUB=${github}
WEB=${web}
LOCATION="${ubicacion}"`;

  return (
    <div className='boxSizeText'>
      <p className='headerVSC'>Home &gt; Document &gt; Portfolio &gt; contacto.env</p>
      <SyntaxHighlighter language="bash" style={vscDarkPlus} showLineNumbers startingLineNumber={1}>
        {env}
      </SyntaxHighlighter>
    </div>
  );
}
