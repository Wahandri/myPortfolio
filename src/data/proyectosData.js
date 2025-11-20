import comerIA from "../images/comeriaImage.png";
import digimonOnline from "../images/digimonOnline.png";
import jokesWeb from "../images/JokesWeb.png";
import shaktiWeb from "../images/simonaZappoliWeb.png";
import findTheNumber from "../images/NumberGammer.png";
import rickAndMorty from "../images/imgRAM.png";
import dj1 from "../images/dj1.png";
import dj2 from "../images/dj2.png";
import dj3 from "../images/dj3.png";
import dj4 from "../images/dj4.png";

const proyectosData = [
  {
    id: "jotalopez-dj",
    titulo: "JotaLopez DJ",
    descripcion: `Web profesional diseñada para un servicio de DJ especializado en bodas y eventos. 
    El sitio presenta los servicios ofrecidos, muestra el equipo profesional disponible y permite a los clientes 
    conocer la experiencia y propuesta de valor.

    Desarrollada con un diseño moderno y responsive, la web facilita el contacto directo con los clientes 
    y muestra de forma atractiva el ambiente y la calidad del servicio de DJ para eventos especiales.`,
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
    Los usuarios ingresan ingredientes y aplican filtros (tipo de comida, dificultad, dieta) para obtener recetas coherentes y detalladas. 
    Desde el diseño de la interfaz hasta la implementación, aprendí a integrar IA en aplicaciones web, gestionar dominios DNS, desplegar en Vercel y crear interfaces responsive.

    Este proyecto me permitió mejorar en Next.js, React, CSS y el manejo de APIs externas, además de resolver desafíos como la coherencia de la IA y la optimización del rendimiento.`,
    imagen: comerIA,
    enlaces: [
      { etiqueta: "Visitar web", url: "https://www.comer-ia.com/", tipo: "primario" },
    ],
    skills: ["html", "css", "js", "nextjs"],
  },
  {
    id: "digimon-online",
    titulo: "Digimon-Online",
    descripcion: `Aplicación web para ver la serie Digimon Adventure completa en castellano. 
    Muestra todos los episodios en una galería con miniaturas, además de marcar los vistos para llevar un control del progreso.

    La app organiza los episodios a partir de un archivo JSON, utiliza localStorage para guardar el progreso de visionado y gestiona la reproducción de cada capítulo directamente desde la web.`,
    imagen: digimonOnline,
    enlaces: [
      { etiqueta: "Visitar web", url: "https://wahandri-digimon.vercel.app/", tipo: "primario" },
      // { etiqueta: "Código", url: "https://github.com/Wahandri/digimon-castellano" },
    ],
    skills: ["html", "css", "js", "nextjs"],
  },
  {
    id: "wahaha",
    titulo: "Wahaha",
    descripcion: `Wahaha es una plataforma interactiva y divertida donde los usuarios pueden ver, escuchar, puntuar y añadir a favoritos 
    chistes subidos por otros miembros de la comunidad.

    Diseñada como una pequeña red social para compartir y evaluar chistes, Wahaha permite a los usuarios disfrutar de una experiencia única 
    al combinar elementos de humor y socialización.

    Este es un proyecto full stack que desarrollé desde cero como parte de mi proyecto final de curso, el cual completé con éxito. 
    Con el tiempo, he realizado mejoras específicas en la experiencia de usuario y diseño.`,
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
    nutrición, masajes, meditación y yoga.

    Este proyecto fue una oportunidad para acercarme a un entorno laboral real, donde tuve que escuchar peticiones, solucionar problemas 
    y trabajar en el diseño, a pesar de no ser diseñador. 
    A través de reuniones online y telefónicas con Simona, logramos definir un diseño que cumpliera con sus expectativas y ofreciera una 
    experiencia de usuario cómoda.`,
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
    que varía en dificultad a medida que avanzas de nivel.

    Creado principalmente como ejercicio para practicar lógica y fortalecer mis habilidades en JavaScript.`,
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
    los personajes a medida que se escribe.

    Inspirado por mi pasión por la serie, me dediqué especialmente al diseño CSS para crear una experiencia visual atractiva.`,
    imagen: rickAndMorty,
    enlaces: [
      { etiqueta: "Visitar web", url: "https://rick-and-morty-characters.pages.dev/", tipo: "primario" },
      // { etiqueta: "Código", url: "https://github.com/Wahandri/Characters-Rick-and-Morty" },
    ],
    skills: ["html", "css", "js", "react"],
  },
];

export default proyectosData;
