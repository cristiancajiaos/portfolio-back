export interface ProjectData {
  title: string;
  year: number;
  imgUrl: string;
  sampleUrl: string;
  description: string;
  tools: string[];
}

export const projects: ProjectData[] = [
  {
    title: 'Find a Movie',
    year: 2025,
    imgUrl: 'img/projects/findamovie.png',
    sampleUrl: 'https://cristiancajiaos.github.io/find-a-movie/',
    description:
      'Buscador de películas y de personas que trabajan en la industria cinematográfica. Usa la API de TheMovieDB.',
    tools: [
      'HTML5',
      'CSS3',
      'SASS/SCSS',
      'TypeScript',
      'JavaScript',
      'Angular',
      'RxJS',
      'Bootstrap',
      'NG-Bootstrap',
      'NG-Select',
      'Font Awesome',
    ],
  },
  {
    title: 'Handbrake Bitrate Calculator',
    year: 2021,
    imgUrl: 'img/projects/handbrakecalculator.png',
    sampleUrl: 'https://cristiancajiaos.github.io/handbreak-calculator-bs/',
    description:
      'Aplicación para uso con Handbrake, para calcular el bitrate en kbps de un video',
    tools: [
      'HTML5',
      'CSS3',
      'SASS/SCSS',
      'TypeScript',
      'JavaScript',
      'Angular',
      'Bootstrap',
      'NG-Bootstrap',
    ],
  },
  {
    title: 'En esto estuve',
    year: 2020,
    imgUrl: 'img/projects/enestoestuve.png',
    sampleUrl: 'https://cristiancajiaos.github.io/enestoestuveapp/',
    description:
      'Aplicación creada como diseño ideal del blog personal "En esto estuve", creado en el año 2010 en Tumblr. El propósito de este aplicación es hacer una demostración general del diseño del blog.',
    tools: [
      'HTML5',
      'CSS3',
      'SASS/SCSS',
      'TypeScript',
      'JavaScript',
      'Angular',
      'Bootstrap',
      'NG-Bootstrap',
    ],
  },
  {
    "title":"Entrekids",
    "year":2018,
    "imgUrl":"img/projects/entrekids.png",
    "sampleUrl":"https://cristiancajiaos.github.io/ekids/",
    "description":"Prototipo de aplicación, diseñado para la postulación de trabajo al proyecto Entrekids.",
    "tools":["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  }
];
