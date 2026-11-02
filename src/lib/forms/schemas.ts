import { z } from "zod";
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
  PROFILE,
  SCHEDULE,
  SESSION,
} from "./options";

const enumOf = (opts: readonly { value: string }[]) =>
  z.enum(opts.map((option) => option.value) as [string, ...string[]]);

const bool = z.preprocess((value) => value === true || value === "on" || value === "true", z.boolean());
const mustBeTrue = (message: string) => bool.refine((value) => value === true, message);

const list = z.preprocess(
  (value) => (value == null || value === "" ? [] : Array.isArray(value) ? value : [value]),
  z.array(z.string()),
);

const scale = z.coerce.number().int().min(1, "Elige un valor").max(5, "Elige un valor");
const text = (min: number, max: number, message: string) => z.string().trim().min(min, message).max(max);
const optionalText = (max: number) => z.string().trim().max(max).optional().default("");

const allowed = (opts: readonly { value: string }[]) => new Set<string>(opts.map((option) => option.value));

function checked(opts: readonly { value: string }[], min: number, max: number, message: string) {
  const values = allowed(opts);
  return list.refine(
    (items) => items.length >= min && items.length <= max && items.every((item) => values.has(item)),
    message,
  );
}

export const diagnosticoSchema = z.object({
  consentData: mustBeTrue("Debes autorizar el tratamiento de datos"),
  isAdult: mustBeTrue("Este formulario es solo para mayores de 18 años"),
  consentImage: bool,
  fullName: text(3, 120, "Escribe tu nombre completo"),
  contact: text(5, 120, "Escribe un WhatsApp o un correo"),
  municipality: text(2, 80, "Escribe tu municipio"),
  profile: enumOf(PROFILE),
  workshopName: optionalText(120),
  experience: enumOf(EXPERIENCE),
  englishLevel: scale,
  englishFrequency: enumOf(FREQUENCY),
  englishSituations: checked(ENGLISH_SITUATIONS, 0, ENGLISH_SITUATIONS.length, "Revisa las situaciones marcadas"),
  aiUse: enumOf(AI_USE),
  aiInterest: scale,
  aiTopics: checked(AI_TOPICS, 0, AI_TOPICS.length, "Revisa los temas marcados"),
  device: enumOf(DEVICE),
  connectivity: enumOf(CONNECTIVITY),
  channel: enumOf(CHANNEL),
  schedule: checked(SCHEDULE, 1, SCHEDULE.length, "Elige al menos una franja"),
  topNeeds: checked(NEEDS, 1, 3, "Elige entre 1 y 3 necesidades"),
  comments: optionalText(500),
  website: optionalText(200),
});

export const registroTallerSchema = z.object({
  consentData: mustBeTrue("Debes autorizar el tratamiento de datos"),
  fullName: text(3, 120, "Escribe tu nombre completo"),
  contact: text(5, 120, "Escribe un WhatsApp o un correo"),
  profile: enumOf(PROFILE),
  session: enumOf(SESSION),
  website: optionalText(200),
});

export const evaluacionSchema = z.object({
  phase: z.enum(["pre", "post"]),
  topic: z.enum(["ingles", "ia"]),
  contact: text(5, 120, "Usa el mismo contacto del registro"),
  selfLevel: scale,
  score: z.preprocess(
    (value) => (value === "" || value == null ? undefined : value),
    z.coerce.number().int().min(0, "El puntaje va de 0 a 10").max(10, "El puntaje va de 0 a 10"),
  ),
  website: optionalText(200),
});

export const satisfaccionSchema = z.object({
  session: enumOf(SESSION),
  contentRating: scale,
  clarityRating: scale,
  usefulnessRating: scale,
  wouldRecommend: bool,
  comments: optionalText(500),
  website: optionalText(200),
});

export const forms = {
  diagnostico: diagnosticoSchema,
  registro_taller: registroTallerSchema,
  evaluacion: evaluacionSchema,
  satisfaccion: satisfaccionSchema,
} as const;

export type FormKey = keyof typeof forms;
export const FORM_KEYS = Object.keys(forms) as FormKey[];

export function isFormKey(value: string): value is FormKey {
  return Object.prototype.hasOwnProperty.call(forms, value);
}

export function toFieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "_form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
