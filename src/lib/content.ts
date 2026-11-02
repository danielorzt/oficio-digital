export function asset(path: string) {
  const base = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
  return `${base}${path}`;
}

export type Category = "Proyecto" | "Comunidad" | "Actividades";

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "figure"; src: string; alt: string; caption: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  minutes: number;
  cover: string;
  coverAlt: string;
  blocks: Block[];
};

export const posts: Post[] = [
  {
    slug: "el-proyecto",
    title: "El oficio no se reemplaza. Se actualiza.",
    excerpt:
      "Quién soy, a quién atiendo y por qué una capacitación corta, virtual y práctica puede servirle a un taller diésel de Duitama.",
    category: "Proyecto",
    date: "2026-11-02",
    minutes: 6,
    cover: asset("/images/taller.jpg"),
    coverAlt: "Mecánico revisando un motor diésel con una tableta en un taller",
    blocks: [
      {
        kind: "p",
        text: "Me llamo Daniel Esteban Ortiz Pinzón. Estudio Ingeniería de Software en UNIMINUTO y esta práctica en responsabilidad social no la armé desde un escritorio lejano. La armé porque conozco de cerca los talleres diésel de Duitama: negocios familiares, jornadas largas y un oficio que se aprendió mirando, no leyendo un manual en inglés.",
      },
      {
        kind: "p",
        text: "El proyecto se llama Oficio Digital. Es una capacitación virtual y práctica en inglés técnico y en herramientas de inteligencia artificial, para dueños, jefes de taller y mecánicos, y también para profesionales de otras áreas que tienen la misma duda: por dónde empezar sin perder el día de trabajo.",
      },
      {
        kind: "h2",
        text: "A quién le hablo",
      },
      {
        kind: "p",
        text: "La comunidad son talleres y negocios de mecánica diésel de Duitama, Boyacá, más profesionales que quieren usar la IA y el inglés en su trabajo. El enlace con el sector es Yeferon Estiven Aragón Ortiz. Las sesiones van por Google Meet. El punto de acompañamiento presencial queda en la Carrera 42 # 8-62.",
      },
      {
        kind: "quote",
        text: "Si la sesión no cabe en el horario del taller, no es formación. Es un curso que nadie va a terminar.",
      },
      {
        kind: "h2",
        text: "Qué vamos a hacer",
      },
      {
        kind: "list",
        items: [
          "Un diagnóstico corto: qué necesitan, a qué hora pueden y qué herramientas ya usan.",
          "Un taller de inglés técnico: códigos de falla, manuales y vocabulario del diésel.",
          "Dos sesiones de IA aplicada, una para el diagnóstico del taller y otra para el trabajo de otros profesionales, con reglas de privacidad y de verificación.",
          "Un cierre con evaluación y una comunidad de práctica en WhatsApp para que no se quede en una sola clase.",
        ],
      },
      {
        kind: "p",
        text: "La meta es concreta: entre 10 y 15 personas, y al menos 6 de talleres diésel. No busco un auditorio. Busco gente que pueda aplicar lo visto el mismo día.",
      },
      {
        kind: "figure",
        src: asset("/images/duitama.jpg"),
        alt: "Calle de un pueblo andino con un taller de puertas abiertas",
        caption: "Duitama, Boyacá. El acompañamiento presencial parte de la Carrera 42 # 8-62.",
      },
    ],
  },
  {
    slug: "la-brecha",
    title: "La brecha no es el celular. Es el manual.",
    excerpt:
      "Por qué un taller familiar de Duitama se queda atrás cuando el diagnóstico, el inglés técnico y la IA ya son parte del oficio.",
    category: "Comunidad",
    date: "2026-11-03",
    minutes: 7,
    cover: asset("/images/diagnostico.jpg"),
    coverAlt: "Piezas de un motor diésel junto a un teléfono y una hoja de diagnóstico",
    blocks: [
      {
        kind: "p",
        text: "En Duitama los talleres diésel atienden transporte pesado, maquinaria agrícola y de construcción. La mayoría son negocios pequeños. El conocimiento pasa de mano en mano. El problema aparece cuando el código de falla está en inglés, el procedimiento está en un PDF y el cliente ya se fue a otro lado porque el diagnóstico se alargó.",
      },
      {
        kind: "p",
        text: "No es solo de los mecánicos. Contadores, docentes, administrativos y comerciantes de la misma ciudad tienen la misma pregunta con la IA: la ven en el celular, pero no saben cómo usarla en una tarea real sin tragarse una respuesta inventada.",
      },
      {
        kind: "h2",
        text: "Lo que dicen las cifras",
      },
      {
        kind: "p",
        text: "En Boyacá, el Índice de Pobreza Multidimensional del DANE (2024) registró que el 74,3 % de los hogares tenía privación por trabajo informal. En la zona rural esa cifra sube a 87,3 % (DANE, 2025). En la jurisdicción de la Cámara de Comercio de Duitama, las microempresas eran el 97,8 % del stock empresarial activo en 2024.",
      },
      {
        kind: "p",
        text: "A escala nacional, el Índice Multidimensional de Informalidad Empresarial del DANE situó la incidencia en 90,2 % entre los micronegocios en 2024. La ocupación informal rondaba el 55 % según la Gran Encuesta Integrada de Hogares. Y entre quienes usaron internet, solo el 18,0 % usó herramientas de IA en 2024 (ENTIC Hogares, DANE).",
      },
      {
        kind: "quote",
        text: "Quien ya sabe del motor no necesita un diplomado. Necesita leer un código, contrastar una respuesta y volver al banco de trabajo.",
      },
      {
        kind: "h2",
        text: "Por qué importa",
      },
      {
        kind: "list",
        items: [
          "Diagnósticos más lentos y clientes que se pierden.",
          "Menos movilidad laboral para quien solo domina el oficio empírico.",
          "Mantenimientos incompletos que pueden subir emisiones y residuos.",
          "Una oferta de cursos pensada para horarios y precios de empresa grande, no de taller.",
        ],
      },
      {
        kind: "p",
        text: "Por eso el plan no empieza por la herramienta. Empieza por el diagnóstico con la gente del sector y por sesiones cortas, virtuales y ajustables. La problemática que desarrollo es la brecha de competencias digitales. La falta de oferta flexible se atiende en el diseño de las sesiones, no como un segundo proyecto.",
      },
      {
        kind: "figure",
        src: asset("/images/glosario.jpg"),
        alt: "Mesa de trabajo con computador y un glosario técnico",
        caption: "El inglés técnico entra por lo que el taller ya hace: fallas, manuales y repuestos.",
      },
    ],
  },
  {
    slug: "primeras-sesiones",
    title: "Dos sesiones, y se nota si sirvieron.",
    excerpt:
      "Cómo quedan el diagnóstico de la semana 3 y el taller de inglés técnico de la semana 4, con indicadores que se pueden contar.",
    category: "Actividades",
    date: "2026-11-04",
    minutes: 5,
    cover: asset("/images/glosario.jpg"),
    coverAlt: "Computador y material de estudio sobre una mesa de madera",
    blocks: [
      {
        kind: "p",
        text: "Esta entrada corresponde a la ejecución de las dos primeras actividades del plan. Todavía no hay fotos de asistencia porque las sesiones están por hacerse. Lo que sí está definido es qué se va a hacer, por qué canal y cómo se sabrá si funcionó.",
      },
      {
        kind: "h2",
        text: "Semana 3. Acercamiento y diagnóstico",
      },
      {
        kind: "p",
        text: "Cuatro horas. Contacto con el interlocutor y con 10 a 15 talleres y profesionales. Una encuesta corta sobre necesidades, horarios y herramientas. Visitas breves donde haga falta. El canal es un formulario y WhatsApp.",
      },
      {
        kind: "list",
        items: [
          "Indicador: 10 a 15 personas contactadas.",
          "Indicador: 8 o más encuestas respondidas.",
          "Indicador: 3 necesidades priorizadas con la comunidad, no solo por mí.",
        ],
      },
      {
        kind: "h2",
        text: "Semana 4. Inglés técnico",
      },
      {
        kind: "p",
        text: "Dos horas en vivo por Google Meet, más material grabado. Vocabulario del diésel y de las herramientas digitales, lectura de códigos de falla y un ejercicio con un caso real. El grupo de WhatsApp queda como canal de dudas.",
      },
      {
        kind: "list",
        items: [
          "Indicador: lista de asistencia de 10 a 15 personas.",
          "Indicador: el 80 % resuelve el ejercicio práctico durante la sesión.",
        ],
      },
      {
        kind: "quote",
        text: "Una clase que no deja un código leído o una falla mejor explicada no cuenta como evidencia.",
      },
      {
        kind: "h2",
        text: "Los ODS en estas dos actividades",
      },
      {
        kind: "p",
        text: "El diagnóstico aporta al ODS 17 porque el plan se arma con el sector, no encima de él. El taller de inglés aporta al ODS 4, formación continua que cabe en la jornada, y al ODS 8, porque leer un manual más rápido cambia la productividad del taller. El ODS 9 aparece cuando esa lectura se conecta con una herramienta digital, no cuando se menciona la palabra innovación.",
      },
      {
        kind: "p",
        text: "Las evidencias —fotos, capturas y un corto de la sesión— se publican aquí cuando existan. Hasta entonces, esta entrada deja el compromiso por escrito: qué se mide y qué no se va a inventar.",
      },
    ],
  },
];

export const categories: Array<Category | "Todas"> = [
  "Todas",
  "Proyecto",
  "Comunidad",
  "Actividades",
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T12:00:00`));
}

export const sessions = [
  {
    week: "3",
    title: "Acercamiento y diagnóstico",
    channel: "Formulario y visitas breves",
    indicator: "10 a 15 personas contactadas y 3 necesidades priorizadas",
  },
  {
    week: "4",
    title: "Taller virtual de inglés técnico",
    channel: "Google Meet",
    indicator: "10 a 15 asistentes y 80 % resuelve el ejercicio",
  },
  {
    week: "5 y 6",
    title: "Taller virtual de IA aplicada",
    channel: "Google Meet",
    indicator: "Guía práctica entregada y un caso real por persona",
  },
  {
    week: "7 y 8",
    title: "Acompañamiento y evaluación",
    channel: "Virtual y presencial",
    indicator: "Reporte de impacto y red de contactos activa",
  },
];
