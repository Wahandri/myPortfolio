import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Ejemplo de estilo compatible

const code = `{
  "nombre": "Manuel García Cobos",
  "titulo": "Desarrollador Web Junior",
  "ubicacion": "Málaga, España",
  "contacto": {
    "email": "wahandricode@gmail.com",
    "telefono": "+123456789",
    "linkedin": "https://www.linkedin.com/in/tunombre",
    "github": "https://github.com/tunombre",
    "portafolio": "https://tunombre.dev"
  },
  "resumen": "Soy un desarrollador web apasionado con experiencia en la creación de aplicaciones web modernas y responsivas. Tengo habilidades en HTML, CSS, JavaScript, y frameworks como React y Vue. Me gusta resolver problemas complejos y trabajar en equipo para crear productos innovadores y de alta calidad.",
  "habilidades": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vue.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "Webpack"
  ],
  "experiencia": [
    {
      "puesto": "Desarrollador Web",
      "empresa": "Nombre de la Empresa",
      "duracion": "Enero 2022 - Actualidad",
      "descripcion": "Desarrollo y mantenimiento de aplicaciones web utilizando React y Node.js. Colaboración con equipos de diseño para implementar interfaces de usuario atractivas y funcionales. Optimización de rendimiento y accesibilidad."
    },
    {
      "puesto": "Desarrollador Frontend",
      "empresa": "Otra Empresa",
      "duracion": "Mayo 2020 - Diciembre 2021",
      "descripcion": "Creación de componentes reutilizables con Vue.js. Integración de API RESTful y manejo del estado de la aplicación con Vuex. Participación en revisiones de código y mejora de la base de código existente."
    }
  ],
  "educacion": [
    {
      "grado": "Licenciatura en Ciencias de la Computación",
      "institucion": "Nombre de la Universidad",
      "duracion": "2016 - 2020"
    }
  ],
  "proyectos": [
    {
      "nombre": "Nombre del Proyecto",
      "descripcion": "Descripción breve del proyecto y las tecnologías utilizadas.",
      "enlace": "https://github.com/tunombre/nombre-del-proyecto"
    }
  ],
  "intereses": [
    "Desarrollo de software",
    "Inteligencia Artificial",
    "Tecnologías emergentes",
    "Viajes",
    "Fotografía"
  ]
}`;

export default function BodyJson() {
  return (
    <>
      <p className='headerVSC'>Home > Document > Portfolio > QuienSoy.json</p>
      <SyntaxHighlighter language="json" style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
    </>
  );
}
