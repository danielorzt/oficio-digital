import {
  AI_TOPICS,
  AI_USE,
  CHANNEL,
  CONNECTIVITY,
  DEVICE,
  ENGLISH_SITUATIONS,
  EXPERIENCE,
  FREQUENCY,
  NEEDS,
  PHASE,
  PROFILE,
  SCHEDULE,
  SESSION,
  TOPIC,
} from "./options";

export type Option = { value: string; label: string };

type Base = { name: string; label: string; hint?: string };

export type FieldDef =
  | (Base & { type: "text"; autoComplete?: string })
  | (Base & { type: "textarea" })
  | (Base & { type: "select"; options: readonly Option[] })
  | (Base & { type: "radio"; options: readonly Option[] })
  | (Base & { type: "checkboxes"; options: readonly Option[] })
  | (Base & { type: "scale"; low: string; high: string })
  | (Base & { type: "number"; min: number; max: number })
  | (Base & { type: "consent" });

export type Section = { title: string; fields: FieldDef[] };

export const diagnosticoSections: Section[] = [
  {
    title: "Autorización",
    fields: [
      {
        type: "consent",
        name: "consentData",
        label: "Autorizo el tratamiento de mis datos personales para este proyecto académico (Ley 1581 de 2012).",
      },
      { type: "consent", name: "isAdult", label: "Soy mayor de 18 años." },
      {
        type: "consent",
        name: "consentImage",
        label: "Opcional: autorizo el uso de mi imagen en el blog del proyecto.",
      },
    ],
  },
  {
    title: "Sobre ti",
    fields: [
      { type: "text", name: "fullName", label: "Nombre completo", autoComplete: "name" },
      {
        type: "text",
        name: "contact",
        label: "WhatsApp o correo",
        hint: "Solo para invitarte a los talleres.",
        autoComplete: "email",
      },
      { type: "text", name: "municipality", label: "Municipio", autoComplete: "address-level2" },
      { type: "radio", name: "profile", label: "¿Cuál es tu perfil?", options: PROFILE },
      { type: "text", name: "workshopName", label: "Nombre del taller o empresa (opcional)" },
      { type: "select", name: "experience", label: "Años de experiencia", options: EXPERIENCE },
    ],
  },
  {
    title: "Inglés técnico",
    fields: [
      {
        type: "scale",
        name: "englishLevel",
        label: "¿Cómo calificas tu inglés técnico hoy?",
        low: "Muy bajo",
        high: "Muy alto",
      },
      {
        type: "radio",
        name: "englishFrequency",
        label: "¿Con qué frecuencia te topas con inglés en tu trabajo?",
        options: FREQUENCY,
      },
      { type: "checkboxes", name: "englishSituations", label: "¿En qué situaciones?", options: ENGLISH_SITUATIONS },
    ],
  },
  {
    title: "Inteligencia artificial",
    fields: [
      { type: "radio", name: "aiUse", label: "¿Usas herramientas de IA?", options: AI_USE },
      {
        type: "scale",
        name: "aiInterest",
        label: "¿Qué tanto te interesa aprender a usarlas?",
        low: "Poco",
        high: "Mucho",
      },
      { type: "checkboxes", name: "aiTopics", label: "¿Para qué te gustaría usarlas?", options: AI_TOPICS },
    ],
  },
  {
    title: "Cómo podemos acompañarte",
    fields: [
      { type: "radio", name: "device", label: "¿Desde qué dispositivo te conectarías?", options: DEVICE },
      { type: "radio", name: "connectivity", label: "¿Cómo es tu conexión a internet?", options: CONNECTIVITY },
      { type: "radio", name: "channel", label: "¿Qué canal prefieres?", options: CHANNEL },
      { type: "checkboxes", name: "schedule", label: "¿Qué horarios te sirven?", options: SCHEDULE },
    ],
  },
  {
    title: "Tus prioridades",
    fields: [
      {
        type: "checkboxes",
        name: "topNeeds",
        label: "Elige hasta 3 necesidades",
        hint: "Las 3 más repetidas definen el contenido de los talleres.",
        options: NEEDS,
      },
      { type: "textarea", name: "comments", label: "¿Algo más que quieras contarnos? (opcional)" },
    ],
  },
];

export const registroSections: Section[] = [
  {
    title: "Inscripción",
    fields: [
      {
        type: "consent",
        name: "consentData",
        label: "Autorizo el tratamiento de mis datos para convocarme a esta sesión (Ley 1581 de 2012).",
      },
      { type: "text", name: "fullName", label: "Nombre completo", autoComplete: "name" },
      { type: "text", name: "contact", label: "WhatsApp o correo", autoComplete: "email" },
      { type: "radio", name: "profile", label: "¿Cuál es tu perfil?", options: PROFILE },
      { type: "radio", name: "session", label: "¿A qué sesión te inscribes?", options: SESSION },
    ],
  },
];

export const evaluacionSections: Section[] = [
  {
    title: "Evaluación",
    fields: [
      { type: "radio", name: "phase", label: "¿En qué momento respondes?", options: PHASE },
      { type: "radio", name: "topic", label: "¿Qué estás evaluando?", options: TOPIC },
      {
        type: "text",
        name: "contact",
        label: "WhatsApp o correo",
        hint: "Usa el mismo contacto del registro para comparar el antes y el después.",
      },
      {
        type: "scale",
        name: "selfLevel",
        label: "¿Cómo calificas tu nivel hoy?",
        low: "Muy bajo",
        high: "Muy alto",
      },
      {
        type: "number",
        name: "score",
        label: "Puntaje del ejercicio (0 a 10)",
        hint: "Si todavía no hay ejercicio, deja el puntaje que acordaron en la sesión.",
        min: 0,
        max: 10,
      },
    ],
  },
];

export const satisfaccionSections: Section[] = [
  {
    title: "Satisfacción",
    fields: [
      { type: "radio", name: "session", label: "¿Qué sesión calificas?", options: SESSION },
      { type: "scale", name: "contentRating", label: "El contenido", low: "Nada útil", high: "Muy útil" },
      { type: "scale", name: "clarityRating", label: "La claridad", low: "Confusa", high: "Clara" },
      { type: "scale", name: "usefulnessRating", label: "La utilidad en tu trabajo", low: "Baja", high: "Alta" },
      { type: "consent", name: "wouldRecommend", label: "Recomendaría este taller." },
      { type: "textarea", name: "comments", label: "Comentario (opcional)" },
    ],
  },
];
