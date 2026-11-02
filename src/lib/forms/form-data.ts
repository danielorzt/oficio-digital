export function formToObject(form: HTMLFormElement): Record<string, unknown> {
  const data = new FormData(form);
  const out: Record<string, unknown> = {};
  for (const key of new Set(data.keys())) {
    const all = data.getAll(key).filter((value): value is string => typeof value === "string");
    out[key] = all.length > 1 ? all : all[0];
  }
  return out;
}
