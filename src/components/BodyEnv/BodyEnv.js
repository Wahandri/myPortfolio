import React from 'react';
import datos from '../../data/datos.json';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function BodyEnv() {
  const { contacto = {}, ubicacion = '' } = datos;
  const email = contacto?.email ?? '';
  const linkedin = contacto?.linkedin ?? '';

  const env = `# contacto.env
EMAIL=${email}
LINKEDIN=${linkedin}
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
