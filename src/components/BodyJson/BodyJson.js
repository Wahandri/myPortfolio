import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const code = `{
  "nombre": "Manuel García Cobos",
  "titulo": "Desarrollador Web Junior",
  "ubicacion": "Málaga, España",
  "contacto": {
    "email": "wahandricode@gmail.com",
    "linkedin": "https://www.linkedin.com/in/manuel-garc%C3%ADa-cobos-6b5413272/"
  },
  "habilidades": [
    "HTML", "CSS", "JavaScript", "Git", "React",
    "Node.js", "Next.js", "Express", "MongoDB", "MySql"
  ],
  "intereses": [
    "Desarrollo de software",
    "Inteligencia Artificial",
    "Documentales",
    "Baloncesto",
    "Senderismo"
  ],
  "formacion": [
    {
      "centro": "Code Space Academy",
      "titulo": "Desarrollo Web Full Stack",
      "fecha": "Octubre 2022 - Octubre 2023"
    },
    {
      "centro": "IES La Rosaleda, Málaga",
      "titulo": "Educación Secundaria Obligatoria (E.S.O.)",
      "fecha": "Junio 2010"
    }
  ],
  "experiencia": [
    {
      "proyecto": "Comer-IA",
      "descripcion": "App con Next.js que genera recetas usando la API de OpenAI. Trabajé en integración de IA, despliegue y diseño responsive.",
      "tecnologias": ["Next.js", "OpenAI API", "CSS"],
      "link": "https://www.comer-ia.com/"
    },
    {
      "proyecto": "Wahaha",
      "descripcion": "Red social de chistes donde los usuarios pueden subir, puntuar y guardar favoritos. Proyecto full stack con énfasis en UX y diseño.",
      "tecnologias": ["React", "Node.js", "MongoDB", "JavaScript", "CSS"],
      "link": null
    },
    {
      "proyecto": "SimonaZappoli",
      "descripcion": "Sitio web estático para una profesional del bienestar. Diseñado según necesidades reales del cliente, con enfoque en usabilidad.",
      "tecnologias": ["React", "HTML", "CSS", "JavaScript"],
      "link": "https://simona-zappoli.pages.dev/"
    },
    {
      "proyecto": "Adivina el Número",
      "descripcion": "Juego web simple para practicar lógica y control de flujo en JavaScript. Incluye niveles de dificultad.",
      "tecnologias": ["HTML", "CSS", "JavaScript"],
      "link": "https://gessthenumber.pages.dev/"
    },
    {
      "proyecto": "Rick and Morty API",
      "descripcion": "App que consume la API de Rick and Morty con scroll infinito y búsqueda en tiempo real. Enfocada en el diseño y consumo de API.",
      "tecnologias": ["React", "JavaScript", "CSS", "Rick and Morty API"],
      "link": "https://rick-and-morty-characters.pages.dev/"
    }
  ]
}
`;

export default function BodyJson() {
  return (
    <div className='boxSizeText'>
      <p className='headerVSC'>Home > Document > Portfolio > SobreMi.json</p>
      <SyntaxHighlighter language="json" style={vscDarkPlus} showLineNumbers startingLineNumber={1}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
