import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import datos from '../../data/datos.json';

export default function BodyJson() {
  const code = JSON.stringify(datos, null, 2);

  return (
    <div className='boxSizeText'>
      <p className='headerVSC'>Home &gt; Document &gt; Portfolio &gt; datos.json</p>
      <SyntaxHighlighter language="json" style={vscDarkPlus} showLineNumbers startingLineNumber={1}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
