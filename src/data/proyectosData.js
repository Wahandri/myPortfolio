import comerIA1 from "../images/comer-ia/comeria1.png";
import comerIA2 from "../images/comer-ia/comeria2.png";
import comerIA3 from "../images/comer-ia/comeria3.png";
import comerIA4 from "../images/comer-ia/comeria4.png";
// import digimonOnline from "../images/digimonOnline.png";
import jokesWeb from "../images/JokesWeb.png";
import shaktiWeb from "../images/simonaZappoliWeb.png";
import findTheNumber from "../images/NumberGammer.png";
import rickAndMorty from "../images/imgRAM.png";
import dj1 from "../images/jotalopezdj/dj1.png";
import dj2 from "../images/jotalopezdj/dj2.png";
import dj3 from "../images/jotalopezdj/dj3.png";
import dj4 from "../images/jotalopezdj/dj4.png";
import playOnline1 from "../images/play-online/play-online1.png";
import playOnline2 from "../images/play-online/play-online2.png";
import playOnline3 from "../images/play-online/play-online3.png";

// Tech Icons
import reactIcon from "../images/react.png";
import jsIcon from "../images/js.png";
import cssIcon from "../images/css-3.png";
import htmlIcon from "../images/html-5.png";
import nextIcon from "../images/nextjs.png";
import nodeIcon from "../images/node.js.png";
// import gitIcon from "../images/git.png";
// import githubIcon from "../images/github.png";
import mongodbIcon from "../images/mongodb.png";
// import mysqlIcon from "../images/mySQL.png";
// import sassIcon from "../images/sass.png";
// import bootstrapIcon from "../images/Bootstrap.png";

const proyectosData = [
  {
    id: "jotalopez-dj",
    titulo: "JotaLopez DJ",
    descripcion: `Web profesional diseñada para un servicio de DJ especializado en bodas y eventos. 
    El sitio presenta los servicios ofrecidos, muestra el equipo profesional disponible y permite a los clientes 
    conocer la experiencia y propuesta de valor.`,
    detalles: {
      problema: "Digitalizar servicio de DJ para bodas/eventos y facilitar contacto.",
      solucion: "Web profesional que presenta servicios y equipo, optimizada para conversión.",
      rol: "Desarrollo Frontend completo, diseño UI/UX y despliegue.",
      tecnologias: [
        { name: "Next.js", icon: nextIcon },
        { name: "React", icon: reactIcon },
        { name: "CSS", icon: cssIcon },
        { name: "HTML", icon: htmlIcon },
      ]
    },
    imagenes: [dj1, dj2, dj3, dj4],
    enlaces: [
      { etiqueta: "Visitar web", url: "https://jotalopezdj.vercel.app/", tipo: "primario" },
    ],
    skills: ["html", "css", "js", "nextjs"],
  },
  {
    id: "comer-ia",
    titulo: "Comer-IA",
    descripcion: `Desarrollé una aplicación web con Next.js que genera recetas personalizadas usando la API de OpenAI. 
    Los usuarios ingresan ingredientes y aplican filtros (tipo de comida, dificultad, dieta) para obtener recetas coherentes y detalladas.`,
    detalles: {
      problema: "Dificultad para crear recetas con ingredientes limitados o restricciones.",
      solucion: "App que genera recetas únicas vía IA (OpenAI) con filtros personalizados.",
      rol: "Full Stack: integración de API, lógica de negocio e interfaz.",
      tecnologias: [
        { name: "Next.js", icon: nextIcon },
        { name: "React", icon: reactIcon },
        { name: "OpenAI API", icon: jsIcon }, // Using JS icon as placeholder or generic API
        { name: "CSS", icon: cssIcon },
      ]
    },
    imagenes: [comerIA1, comerIA2, comerIA3, comerIA4],
    enlaces: [
      { etiqueta: "Visitar web", url: "https://www.comer-ia.com/", tipo: "primario" },
    ],
    skills: ["html", "css", "js", "nextjs"],
  },
  {
    id: "play-online",
    titulo: "play-online",
    descripcion: `Aplicación web para ver la serie Digimon Adventure completa en castellano. 
    Muestra todos los episodios en una galería con miniaturas, además de marcar los vistos para llevar un control del progreso.`,
    detalles: {
      problema: "Falta de plataforma centralizada para ver 'Digimon Adventure' con seguimiento.",
      solucion: "SPA que organiza episodios y guarda progreso de visualización localmente.",
      rol: "Frontend: gestión de estado, persistencia de datos y UI.",
      tecnologias: [
        { name: "Next.js", icon: nextIcon },
        { name: "React", icon: reactIcon },
        { name: "CSS", icon: cssIcon },
        { name: "HTML", icon: htmlIcon },
      ]
    },
    imagenes: [playOnline1, playOnline2, playOnline3],
    enlaces: [
      { etiqueta: "Visitar web", url: "https://play-online-eight.vercel.app/", tipo: "primario" }
    ],
    skills: ["html", "css", "js", "nextjs"],
  },
  {
    id: "wahaha",
    titulo: "Wahaha",
    descripcion: `Wahaha es una plataforma interactiva y divertida donde los usuarios pueden ver, escuchar, puntuar y añadir a favoritos 
    chistes subidos por otros miembros de la comunidad.`,
    detalles: {
      problema: "Ausencia de espacio social dedicado para compartir y valorar humor.",
      solucion: "Plataforma social para publicar, votar y guardar chistes favoritos.",
      rol: "Full Stack (Proyecto Final): arquitectura, backend y frontend.",
      tecnologias: [
        { name: "React", icon: reactIcon },
        { name: "Node.js", icon: nodeIcon },
        { name: "MongoDB", icon: mongodbIcon },
      ]
    },
    imagen: jokesWeb,
    enlaces: [
      { etiqueta: "Ver demo", url: "https://youtu.be/5QpQYx3MyBo", tipo: "primario" },
      // { etiqueta: "Código", url: "https://github.com/Wahandri/JokesWeb" },
    ],
    skills: ["html", "css", "js", "react"],
  },
  {
    id: "simona-zappoli",
    titulo: "SimonaZappoli",
    descripcion: `Simonazappoli es una web estática que diseñé y creé para el negocio freelance de una amiga dedicada al coaching emocional, 
    nutrición, masajes, meditación y yoga.`,
    detalles: {
      problema: "Negocio de bienestar necesitaba presencia online profesional sin coste recurrente.",
      solucion: "Web estática rápida y elegante que comunica servicios y filosofía.",
      rol: "Diseño y Desarrollo, toma de requisitos y trato con cliente.",
      tecnologias: [
        { name: "React", icon: reactIcon },
        { name: "CSS", icon: cssIcon },
        { name: "HTML", icon: htmlIcon },
        { name: "JavaScript", icon: jsIcon },
      ]
    },
    imagen: shaktiWeb,
    enlaces: [
      { etiqueta: "Visitar web", url: "https://simona-zappoli.pages.dev/", tipo: "primario" },
      // { etiqueta: "Código", url: "https://github.com/Wahandri/ShaktiYoga" },
    ],
    skills: ["html", "css", "js", "react"],
  },
  {
    id: "adivina-el-numero",
    titulo: "Adivina el Número",
    descripcion: `Este juego simple hecho con HTML, CSS y JavaScript desafía al jugador a adivinar un número secreto 
    que varía en dificultad a medida que avanzas de nivel.`,
    detalles: {
      problema: "Necesidad de consolidar lógica de programación y manipulación del DOM.",
      solucion: "Minijuego interactivo con dificultad progresiva y feedback inmediato.",
      rol: "Desarrollo individual enfocado en algoritmos y gamificación.",
      tecnologias: [
        { name: "JavaScript", icon: jsIcon },
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
      ]
    },
    imagen: findTheNumber,
    enlaces: [
      { etiqueta: "Jugar", url: "https://gessthenumber.pages.dev/", tipo: "primario" },
      // { etiqueta: "Código", url: "https://github.com/Wahandri/GessTheNumber" },
    ],
    skills: ["html", "css", "js"],
  },
  {
    id: "rick-and-morty",
    titulo: "Rick and Morty API",
    descripcion: `Esta es una web sencilla que consume una API pública de Rick y Morty. 
    Permite explorar todos los personajes de la serie con un scroll infinito y cuenta con un input de búsqueda que filtra 
    los personajes a medida que se escribe.`,
    detalles: {
      problema: "Visualizar y filtrar eficientemente grandes volúmenes de datos externos.",
      solucion: "Interfaz con scroll infinito y búsqueda en tiempo real.",
      rol: "Frontend: consumo de API, asincronía y diseño responsive.",
      tecnologias: [
        { name: "React", icon: reactIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "CSS", icon: cssIcon },
        { name: "HTML", icon: htmlIcon },
      ]
    },
    imagen: rickAndMorty,
    enlaces: [
      { etiqueta: "Visitar web", url: "https://rick-and-morty-characters.pages.dev/", tipo: "primario" },
      // { etiqueta: "Código", url: "https://github.com/Wahandri/Characters-Rick-and-Morty" },
    ],
    skills: ["html", "css", "js", "react"],
  },
];

export default proyectosData;
