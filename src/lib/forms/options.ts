export const PROFILE = [
  { value: "dueno_taller", label: "Dueño/a o administrador/a de taller" },
  { value: "mecanico", label: "Mecánico/a o técnico/a" },
  { value: "aprendiz", label: "Aprendiz o estudiante" },
  { value: "profesional_otra_area", label: "Profesional de otra área" },
] as const;

export const EXPERIENCE = [
  { value: "0-2", label: "Menos de 3 años" },
  { value: "3-5", label: "3 a 5 años" },
  { value: "6-10", label: "6 a 10 años" },
  { value: "10+", label: "Más de 10 años" },
] as const;

export const FREQUENCY = [
  { value: "nunca", label: "Nunca" },
  { value: "a_veces", label: "A veces" },
  { value: "casi_siempre", label: "Casi siempre" },
  { value: "siempre", label: "Siempre" },
] as const;

export const ENGLISH_SITUATIONS = [
  { value: "manuales", label: "Manuales de servicio" },
  { value: "escaner", label: "Escáner o software de diagnóstico" },
  { value: "repuestos", label: "Pedido de repuestos" },
  { value: "tutoriales", label: "Videos o tutoriales" },
  { value: "proveedores", label: "Proveedores extranjeros" },
  { value: "otro", label: "Otro" },
] as const;

export const AI_USE = [
  { value: "nunca", label: "Nunca la he usado" },
  { value: "ocasional", label: "La uso de vez en cuando" },
  { value: "frecuente", label: "La uso con frecuencia" },
] as const;

export const AI_TOPICS = [
  { value: "traducir_manuales", label: "Traducir manuales y fichas técnicas" },
  { value: "cotizaciones", label: "Cotizaciones y mensajes a clientes" },
  { value: "redes", label: "Redes sociales del taller" },
  { value: "documentos", label: "Documentos y reportes" },
  { value: "diagnostico", label: "Apoyo para diagnóstico" },
  { value: "estudiar", label: "Estudiar y aprender más rápido" },
  { value: "otro", label: "Otro" },
] as const;

export const DEVICE = [
  { value: "celular", label: "Celular" },
  { value: "computador", label: "Computador" },
  { value: "ambos", label: "Ambos" },
] as const;

export const CONNECTIVITY = [
  { value: "buena", label: "Buena" },
  { value: "regular", label: "Regular" },
  { value: "limitada", label: "Limitada" },
] as const;

export const CHANNEL = [
  { value: "meet", label: "Google Meet" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "presencial", label: "Presencial" },
] as const;

export const SCHEDULE = [
  { value: "sem_manana", label: "Entre semana, mañana" },
  { value: "sem_tarde", label: "Entre semana, tarde" },
  { value: "sem_noche", label: "Entre semana, noche" },
  { value: "finde_manana", label: "Fin de semana, mañana" },
  { value: "finde_tarde", label: "Fin de semana, tarde" },
] as const;

export const NEEDS = [
  { value: "ingles_manuales", label: "Entender manuales y fichas en inglés" },
  { value: "ingles_proveedores", label: "Comunicarme con proveedores en inglés" },
  { value: "ia_documentos", label: "Usar IA para documentos y reportes" },
  { value: "ia_traduccion", label: "Usar IA para traducir y consultar" },
  { value: "ia_marketing", label: "Usar IA para promocionar mi taller" },
  { value: "digitalizar_taller", label: "Digitalizar procesos del taller" },
  { value: "certificacion", label: "Certificarme o validar lo aprendido" },
  { value: "otro", label: "Otro" },
] as const;

export const SESSION = [
  { value: "s2_ingles", label: "Taller de inglés técnico" },
  { value: "s3_ia", label: "Taller de IA aplicada, parte 1" },
  { value: "s4_ia", label: "Taller de IA aplicada, parte 2" },
] as const;

export const PHASE = [
  { value: "pre", label: "Antes del taller" },
  { value: "post", label: "Después del taller" },
] as const;

export const TOPIC = [
  { value: "ingles", label: "Inglés técnico" },
  { value: "ia", label: "Uso de IA" },
] as const;
