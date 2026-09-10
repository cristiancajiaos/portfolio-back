export interface ProjectData {
  title: string;
  year: number;
  imgUrl: string;
  sampleUrl: string;
  description: string;
  tools: string[];
}

export interface CertificateData {
  title: string;
  place: string;
  year: number;
  certificateUrl: string
}

export interface ContactData {
  medium: string;
  mediumUrl: string; 
}

export const projects: ProjectData[] = [
  {
    title: 'Find a Movie',
    year: 2025,
    imgUrl: 'img/projects/findamovie.png',
    sampleUrl: 'https://cristiancajiaos.github.io/find-a-movie/',
    description:
      'Buscador de películas y de personas que trabajan en la industria cinematográfica. Para las películas se puede consultar la información básica, su sinopsis, su reparto, y su equipo técnico. Para las personas se puede consultar su biografía, su trabajo como reparto, y su trabajo como miembro del equipo técnico. Usa la API de TheMovieDB.',
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
      'Aplicación para ser usada con Handbrake, para calcular el bitrate en kbps de un video en base a la duración de un video, el peso objetivo, y la calidad de audio del video.',
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
      'Aplicación creada como diseño ideal del blog personal "En esto estuve", creado en el año 2020 para la plataforma Tumblr. El propósito de este aplicación es hacer una demostración general del diseño del blog.',
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

export const certificates: CertificateData[] = [
  {
    "title":"EF SET Certificate - C1 Advanced English Level in reading and listening",
    "place": "EF",
    "year": 2025,
    "certificateUrl":"https://cert.efset.org/en/nwJpA8"
  },
  {
    "title":"Nest: Desarrollo backend escalable con Node",
    "place": "Udemy",
    "year":2026,
    "certificateUrl":"https://www.udemy.com/certificate/UC-07f7b03b-0507-4eb1-aa2a-e65369d16f37"
  },
  {
    "title":"Angular: De cero a experto",
    "place": "Udemy",
    "year":2026,
    "certificateUrl":"https://www.udemy.com/certificate/UC-3b6d2750-5194-471e-8ad4-af1d0eafce36"
  },
  {
    "title":"Curso de Java desde cero a experto",
    "place": "Edutin Academy",
    "year":2025,
    "certificateUrl":"https://app.edutin.com/verify/14875540"
  },
  {
    "title":"Legacy JavaScript Algorithms and Data Structures V7",
    "place": "FreeCodeCamp",
    "year":2018,
    "certificateUrl":"https://www.freecodecamp.org/certification/cristiancajiaos/javascript-algorithms-and-data-structures"
  },
  {
    "title":"Legacy Responsive Web Design V8",
    "place": "FreeCodeCamp",
    "year":2018,
    "certificateUrl":"https://www.freecodecamp.org/certification/cristiancajiaos/responsive-web-design"
  },
];

export const contacts: ContactData[] = [
  {
    medium: 'Correo',
    mediumUrl: 'mailto:cristiancajiaos@outlook.com'
  },
  {
    medium: 'LinkedIn',
    mediumUrl: 'https://www.linkedin.com/in/cristiancajiaos'
  },
  {
    medium: 'GitHub',
    mediumUrl: 'https://github.com/cristiancajiaos'
  }
];


