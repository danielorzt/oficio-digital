import { useRef, type FormEvent } from "react";
import type { FieldDef, Section } from "@/lib/forms/fields";
import { formToObject } from "@/lib/forms/form-data";
import type { FormKey } from "@/lib/forms/schemas";
import { useFormSubmit } from "@/hooks/useFormSubmit";

type Props = {
  formKey: FormKey;
  sections: Section[];
  submitLabel?: string;
  successMessage?: string;
};

const inputCls =
  "w-full rounded-xl border border-line bg-paper px-3 py-3 text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-violet";

export function FormRenderer({
  formKey,
  sections,
  submitLabel = "Enviar",
  successMessage = "Gracias. Recibimos tus respuestas.",
}: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const { status, fieldErrors, message, submit, reset } = useFormSubmit(formKey);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = formToObject(event.currentTarget);
    const ok = await submit(values);
    if (ok) formRef.current?.reset();
  }

  if (status === "success") {
    return (
      <div role="status" className="space-y-4 rounded-3xl border border-line bg-paper-2 p-6">
        <p className="text-lg font-semibold">{successMessage}</p>
        <button type="button" onClick={reset} className="font-bold text-accent-ink underline underline-offset-4">
          Enviar otra respuesta
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="relative space-y-10">
      {sections.map((section) => (
        <section key={section.title} className="space-y-6">
          <h2 className="text-xl font-extrabold tracking-tight">{section.title}</h2>
          {section.fields.map((field) => (
            <FieldView key={field.name} field={field} error={fieldErrors[field.name]} />
          ))}
        </section>
      ))}

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          No llenar este campo
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div aria-live="polite">
        {status === "error" && message ? (
          <p role="alert" className="text-sm font-semibold text-red-800">
            {message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-accent inline-flex h-12 items-center rounded-full px-6 text-sm font-bold disabled:opacity-50"
      >
        {status === "submitting" ? "Enviando..." : submitLabel}
      </button>
    </form>
  );
}

function ErrorText({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} role="alert" className="mt-1 text-sm font-semibold text-red-800">
      {error}
    </p>
  );
}

function FieldView({ field, error }: { field: FieldDef; error?: string }) {
  const id = `f-${field.name}`;
  const errId = `${id}-err`;
  const aria = { "aria-invalid": error ? true : undefined, "aria-describedby": error ? errId : undefined };

  if (field.type === "text" || field.type === "number") {
    return (
      <div>
        <label htmlFor={id} className="mb-1 block font-semibold">
          {field.label}
        </label>
        {field.hint ? <p className="mb-1 text-sm text-muted">{field.hint}</p> : null}
        <input
          id={id}
          name={field.name}
          type={field.type === "number" ? "number" : "text"}
          min={field.type === "number" ? field.min : undefined}
          max={field.type === "number" ? field.max : undefined}
          autoComplete={field.type === "text" ? field.autoComplete : undefined}
          className={inputCls}
          {...aria}
        />
        <ErrorText id={errId} error={error} />
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <div>
        <label htmlFor={id} className="mb-1 block font-semibold">
          {field.label}
        </label>
        <textarea id={id} name={field.name} rows={4} maxLength={500} className={inputCls} {...aria} />
        <ErrorText id={errId} error={error} />
      </div>
    );
  }

  if (field.type === "select") {
    return (
      <div>
        <label htmlFor={id} className="mb-1 block font-semibold">
          {field.label}
        </label>
        <select id={id} name={field.name} defaultValue="" className={inputCls} {...aria}>
          <option value="" disabled>
            Elige una opción
          </option>
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ErrorText id={errId} error={error} />
      </div>
    );
  }

  if (field.type === "consent") {
    return (
      <div>
        <label className="flex items-start gap-3">
          <input type="checkbox" name={field.name} id={id} className="mt-1 size-5 shrink-0" {...aria} />
          <span>{field.label}</span>
        </label>
        <ErrorText id={errId} error={error} />
      </div>
    );
  }

  if (field.type === "scale") {
    return (
      <fieldset {...aria}>
        <legend className="mb-2 font-semibold">{field.label}</legend>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm text-muted">{field.low}</span>
          {[1, 2, 3, 4, 5].map((n) => (
            <label key={n} className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-1">
              <input type="radio" name={field.name} value={String(n)} className="size-5" />
              <span className="text-sm">{n}</span>
            </label>
          ))}
          <span className="text-sm text-muted">{field.high}</span>
        </div>
        <ErrorText id={errId} error={error} />
      </fieldset>
    );
  }

  const inputType = field.type === "radio" ? "radio" : "checkbox";
  return (
    <fieldset {...aria}>
      <legend className="mb-2 font-semibold">{field.label}</legend>
      {field.hint ? <p className="mb-2 text-sm text-muted">{field.hint}</p> : null}
      <div className="space-y-2">
        {field.options.map((option) => (
          <label key={option.value} className="flex min-h-11 items-center gap-3">
            <input type={inputType} name={field.name} value={option.value} className="size-5 shrink-0" />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      <ErrorText id={errId} error={error} />
    </fieldset>
  );
}
