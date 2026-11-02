# Oficio Digital

Blog del proyecto de Práctica en Responsabilidad Social (UNIMINUTO). Capacitación virtual en inglés técnico y herramientas de IA para talleres diésel de Duitama.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

El sitio queda en `http://localhost:8080`.

## Páginas

- `/` inicio
- `/blog` entradas
- `/participa` diagnóstico de la semana 3
- `/registro` inscripción a talleres
- `/evaluacion` y `/satisfaccion`
- `/impacto` conteos, sin cifras inventadas
- `/privacidad` aviso de tratamiento de datos
- `/sobre` el proyecto
- `/plan` línea de tiempo
- `/ubicacion` mapa de Duitama

## Formularios

Por defecto las respuestas se guardan en `data/form-submissions.json` (no se sube a Git). Para cambiar el backend, define `FORMS_BACKEND=supabase` o `FORMS_BACKEND=wordpress` y las variables del adaptador. El SQL está en `supabase/001_form_submissions.sql` y el plugin en `wordpress/rsu-forms.php`.
