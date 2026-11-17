export function asset(path: string) {
  const base = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
  return `${base}${path}`;
}

export type Category = "Proyecto" | "Comunidad" | "Actividades" | "Humanidades Digitales";

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
  references?: string[];
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
  {
    slug: "ods-separacion-en-la-fuente",
    title: "Una bolsa, tres colores y cuatro ODS",
    excerpt:
      "A qué Objetivos de Desarrollo Sostenible aporta mi proyecto de Humanidades Digitales sobre separación en la fuente en Duitama, y cuáles prefiero no reclamar.",
    category: "Humanidades Digitales",
    date: "2026-11-16",
    minutes: 7,
    cover: asset("/images/ods-colores.svg"),
    coverAlt: "Tres recipientes, blanco, verde y negro, con lo que va en cada uno",
    blocks: [
      {
        kind: "p",
        text: "Mi proyecto de Humanidades Digitales es un ejercicio corto y en línea: seis publicaciones en Instagram entre el 16 y el 29 de noviembre de 2026, un webinar de 30 minutos previsto para el sábado 28 y una entrevista tentativa el 2 de diciembre. El tema es la separación en la fuente de residuos en hogares y pequeños negocios de Duitama. Esta entrada responde la pregunta de la semana 4: a qué ODS aporta de verdad, y con qué derecho lo digo.",
      },
      { kind: "h2", text: "Qué hace el proyecto" },
      {
        kind: "p",
        text: "El problema que elegí es el bajo conocimiento y la práctica irregular de la separación en la fuente. La meta es concreta: que al menos el 60 % de quienes respondan la encuesta de salida identifiquen el blanco, el verde y el negro de la Resolución 2184 de 2019 y escriban una acción que puedan hacer en su casa. También me puse una meta de alcance sin inflar: reunir al menos 30 personas entre reacciones, respuestas y asistencia. Si no se llega, publicaré el número real. En la imagen de arriba está la regla que quiero que la gente recuerde: el código de colores de la Resolución 2184 de 2019, obligatorio en todo el país desde el 1 de enero de 2021 (Ministerio de Ambiente y Desarrollo Sostenible, 2019).",
      },
      { kind: "h2", text: "Por qué es un asunto de desarrollo y no solo de aseo" },
      {
        kind: "p",
        text: "La actualización del plan municipal de residuos (PGIRS) de Duitama recoge una caracterización donde los residuos de comida y alimentos pesaban 37,76 %, los materiales potencialmente aprovechables 26,87 % y los no aprovechables cerca de 35,37 % (Alcaldía de Duitama, 2021). Conviene decir que ese plan arrastra caracterizaciones anteriores, así que no son una medición de 2026. Sirven para ver de qué está hecha la basura local y por qué importa cómo sale de la casa: si todo viaja en una sola bolsa, el papel se humedece, el cartón pierde valor y el plástico se contamina.",
      },
      {
        kind: "figure",
        src: asset("/images/ods-datos.svg"),
        alt: "Barra con tres tramos: comida 37,76 %, aprovechables 26,87 % y no aprovechables 35,37 %",
        caption: "Composición de los residuos según el PGIRS de Duitama (Alcaldía de Duitama, 2021). Gráfico propio.",
      },
      {
        kind: "p",
        text: "A escala nacional, en 2024 se dispusieron 12.149.386 toneladas por el servicio público de aseo y casi todo fue a relleno (SSPD, 2025a). La tasa de aprovechamiento del servicio fue 19,69 % (SSPD, 2025b). Es decir, el país tiene la norma y todavía no tiene el hábito.",
      },
      {
        kind: "figure",
        src: asset("/images/ods-mapa.svg"),
        alt: "ODS 12 como aporte principal y ODS 11, 4 y 8 como aportes secundarios",
        caption: "Los cuatro ODS a los que aporta el proyecto, con su peso. Gráfico propio.",
      },
      { kind: "h2", text: "ODS 12: producción y consumo responsables (aporte principal)" },
      {
        kind: "p",
        text: "La meta 12.5 pide reducir de forma considerable la generación de desechos mediante prevención, reducción, reciclado y reutilización (Naciones Unidas, 2015). Mi proyecto no baja ninguna tonelada. Toca el paso anterior: lo que el hogar entrega separado decide si el material se puede aprovechar o termina enterrado. El Decreto 596 de 2016 ya dice que presentar los residuos separados es obligación del usuario (Ministerio de Vivienda, Ciudad y Territorio, 2016). Separar no es un favor, es parte del servicio, y eso es lo que quiero que se entienda.",
      },
      { kind: "h2", text: "ODS 11: ciudades y comunidades sostenibles" },
      {
        kind: "p",
        text: "La meta 11.6 incluye la gestión de los desechos municipales. En Duitama el PGIRS reconoce que los programas de educación y sensibilización no tuvieron continuidad y que su seguimiento fue escaso (Alcaldía de Duitama, 2021). Mi aporte es pequeño y local: pedagogía en un canal que la gente usa. La recolección y el servicio siguen en manos del operador y el municipio, y no pretendo reemplazarlos.",
      },
      { kind: "h2", text: "ODS 4: educación de calidad" },
      {
        kind: "p",
        text: "La meta 4.7 habla de que las personas adquieran los conocimientos para promover el desarrollo sostenible. El webinar y la encuesta de salida son la parte educativa: tres mitos votados en el chat (todo el plástico se recicla, una sola bolsa facilita el trabajo, la comida da igual) y una acción para hacer esa semana. Es una sesión de media hora, no un programa. Por eso la reclamo como aporte secundario.",
      },
      { kind: "h2", text: "ODS 8: trabajo decente" },
      {
        kind: "p",
        text: "El PGIRS nombra como problema el nivel de vida precario de la población recicladora (Alcaldía de Duitama, 2021). En 2024 la SSPD registró 76.707 recicladores de oficio en organizaciones en formalización en todo el país (SSPD, 2025b). Una bolsa mezclada le pasa a esa persona el trabajo de abrir y separar, y le baja el valor del material. Mi proyecto lo toca en una publicación, la del 23 de noviembre, y en una entrevista cuyo nombre solo se publicará si la persona lo autoriza. No tengo una cifra actual de recicladores en Duitama y no voy a inventarla. El aporte es indirecto y modesto.",
      },
      { kind: "h2", text: "Lo que no reclamo" },
      {
        kind: "p",
        text: "Los orgánicos pesan más que cualquier otro grupo en la caracterización, y eso podría llevarme a hablar de acción climática (ODS 13). No lo hago porque el proyecto no mide emisiones ni compostaje, y poner un ODS en la lista sin una forma de comprobarlo es decorar, no analizar.",
      },
      { kind: "h2", text: "Cómo voy a saber si sirvió" },
      {
        kind: "list",
        items: [
          "ODS 12 y ODS 4: porcentaje de quienes responden la encuesta y aciertan los tres colores, con la meta del 60 %.",
          "ODS 11: número de piezas publicadas con su fecha y enlace, y personas alcanzadas, con el mínimo de 30.",
          "ODS 8: una entrevista realizada o, si no hay autorización, una nota honesta de por qué no se pudo.",
        ],
      },
      {
        kind: "p",
        text: "Hoy empieza el calendario y todavía no hay resultados. Cuando existan publicaré las capturas con sus fechas y el número real, sea el que sea. Si queda por debajo del 60 %, corregiré la explicación en una pieza posterior y no el dato.",
      },
    ],
    references: [
      "Alcaldía de Duitama. (2021). Plan de Gestión Integral de Residuos Sólidos del municipio de Duitama: primera actualización.",
      "Ministerio de Ambiente y Desarrollo Sostenible. (2019). Resolución 2184 de 2019, por la cual se modifica la Resolución 668 de 2016 y se adopta el código de colores para la separación de residuos sólidos en la fuente.",
      "Ministerio de Vivienda, Ciudad y Territorio. (2016). Decreto 596 de 2016, por el cual se modifica el Decreto 1077 de 2015 en lo relativo al aprovechamiento del servicio público de aseo y al régimen transitorio para la formalización de los recicladores de oficio.",
      "Naciones Unidas. (2015). Transformar nuestro mundo: la Agenda 2030 para el Desarrollo Sostenible (A/RES/70/1).",
      "Superintendencia de Servicios Públicos Domiciliarios. (2025a). Informe nacional de disposición final de residuos sólidos 2024.",
      "Superintendencia de Servicios Públicos Domiciliarios. (2025b). Informe sectorial de la actividad de aprovechamiento 2024.",
    ],
  },
];

export const categories: Array<Category | "Todas"> = [
  "Todas",
  "Proyecto",
  "Comunidad",
  "Actividades",
  "Humanidades Digitales",
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
