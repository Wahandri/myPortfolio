import comerIA from "../images/comeriaImage.png";
import digimonOnline from "../images/digimonOnline.png";
import jokesWeb from "../images/JokesWeb.png";
import shaktiWeb from "../images/simonaZappoliWeb.png";
import findTheNumber from "../images/NumberGammer.png";
import rickAndMorty from "../images/imgRAM.png";

const proyectosData = [
  {
    id: "comer-ia",
    titulo: "Comer-IA",
    descripcion:
      "Aplicación con Next.js que genera recetas personalizadas usando la API de OpenAI, con filtros por ingredientes, dieta y dificultad.",
    imagen: comerIA,
    enlaces: [
      { etiqueta: "Ver demo", url: "https://www.comer-ia.com/", tipo: "primario" }
    ]
  },
  {
    id: "digimon-online",
    titulo: "Digimon Online",
    descripcion:
      "Galería responsive que organiza episodios de Digimon Adventure y guarda el progreso de visionado con localStorage.",
    imagen: digimonOnline,
    enlaces: [
      { etiqueta: "Ver demo", url: "https://wahandri-digimon.vercel.app/", tipo: "primario" },
      { etiqueta: "Código", url: "https://github.com/Wahandri/digimon-castellano" }
    ]
  },
  {
    id: "wahaha",
    titulo: "Wahaha",
    descripcion:
      "Plataforma full stack para descubrir, escuchar y guardar chistes, con valoraciones y favoritos en tiempo real.",
    imagen: jokesWeb,
    enlaces: [
      { etiqueta: "Ver demo", url: "https://youtu.be/5QpQYx3MyBo", tipo: "primario" },
      { etiqueta: "Código", url: "https://github.com/Wahandri/JokesWeb" }
    ]
  },
  {
    id: "simona-zappoli",
    titulo: "Simona Zappoli",
    descripcion:
      "Landing page profesional desarrollada en React para un negocio de coaching, con diseño limpio y contenido dinámico.",
    imagen: shaktiWeb,
    enlaces: [
      { etiqueta: "Ver demo", url: "https://simona-zappoli.pages.dev/", tipo: "primario" },
      { etiqueta: "Código", url: "https://github.com/Wahandri/ShaktiYoga" }
    ]
  },
  {
    id: "adivina-el-numero",
    titulo: "Adivina el Número",
    descripcion:
      "Juego web clásico creado con HTML, CSS y JavaScript para practicar lógica y manipulación del DOM.",
    imagen: findTheNumber,
    enlaces: [
      { etiqueta: "Jugar", url: "https://gessthenumber.pages.dev/", tipo: "primario" },
      { etiqueta: "Código", url: "https://github.com/Wahandri/GessTheNumber" }
    ]
  },
  {
    id: "rick-and-morty",
    titulo: "Rick and Morty",
    descripcion:
      "Explorador de personajes con scroll infinito y búsqueda instantánea, construido consumiendo una API pública.",
    imagen: rickAndMorty,
    enlaces: [
      { etiqueta: "Ver demo", url: "https://rick-and-morty-characters.pages.dev/", tipo: "primario" },
      { etiqueta: "Código", url: "https://github.com/Wahandri/Characters-Rick-and-Morty" }
    ]
  }
];

export default proyectosData;
