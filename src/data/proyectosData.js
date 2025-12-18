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
      descripcion: "Sitio web corporativo para un DJ de eventos, diseñado para transmitir profesionalidad y facilitar la contratación. Funciona como punto central de información donde los clientes pueden ver equipos, servicios y contactar directamente.",
      queHice: [
        "Diseñé una interfaz moderna y atractiva alineada con la marca personal.",
        "Optimicé la carga de imágenes para asegurar un rendimiento fluido en móviles.",
        "Implementé un formulario de contacto directo para aumentar la conversión de leads."
      ],
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
      descripcion: "Aplicación que utiliza Inteligencia Artificial para generar recetas de cocina basadas en los ingredientes que el usuario tiene en casa. Ideal para reducir el desperdicio de alimentos y descubrir nuevas ideas culinarias.",
      queHice: [
        "Integré la API de OpenAI para generar contenido dinámico y coherente.",
        "Creé un sistema de filtros (dieta, tiempo, dificultad) para personalizar los resultados.",
        "Diseñé una UI intuitiva que guía al usuario paso a paso en la creación del prompt."
      ],
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
      descripcion: "Plataforma de streaming dedicada a la serie Digimon Adventure. Permite a los usuarios ver la serie completa y mantiene un registro local de los episodios vistos para retomar la visualización donde la dejaron.",
      queHice: [
        "Implementé persistencia de datos en LocalStorage para guardar el progreso del usuario.",
        "Desarrollé una galería de episodios con carga diferida (lazy loading) para mejorar la velocidad.",
        "Creé un reproductor de video personalizado integrado en la interfaz."
      ],
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
      descripcion: "Red social de humor donde los usuarios pueden publicar, votar y guardar chistes. Es un proyecto Full Stack que simula una comunidad activa con interacción en tiempo real.",
      queHice: [
        "Desarrollé una API REST completa con Node.js y Express para gestionar usuarios y contenido.",
        "Diseñé el esquema de base de datos en MongoDB para almacenar chistes, votos y favoritos.",
        "Implementé autenticación de usuarios y protección de rutas en el frontend."
      ],
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
      descripcion: "Landing page profesional para una especialista en bienestar y coaching. El objetivo era crear una presencia digital elegante y rápida que comunicara claramente sus servicios.",
      queHice: [
        "Traduje los requisitos del cliente en un diseño web funcional y estético.",
        "Optimicé el SEO y la estructura semántica para mejorar la visibilidad en buscadores.",
        "Aseguré una experiencia de usuario fluida con una navegación sencilla y clara."
      ],
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
      descripcion: "Juego de lógica clásico donde el usuario debe adivinar un número oculto con pistas de 'mayor' o 'menor'. Un proyecto enfocado en la lógica de programación pura y la manipulación del DOM.",
      queHice: [
        "Programé la lógica del juego en JavaScript vanilla sin dependencias.",
        "Implementé un sistema de puntuación y record para incentivar la rejugabilidad.",
        "Añadí animaciones CSS para feedback visual de aciertos y errores."
      ],
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
      descripcion: "Buscador de personajes de la serie Rick y Morty que consume su API oficial. Permite filtrar en tiempo real y cargar más resultados dinámicamente.",
      queHice: [
        "Consumí la API REST de Rick and Morty utilizando fetch y useEffect.",
        "Implementé un 'Infinite Scroll' para cargar personajes a medida que el usuario baja.",
        "Creé un buscador con filtrado instantáneo para mejorar la UX."
      ],
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
