import { emptyIndicators, type Indicators } from "../aggregate";
import { FORM_KEYS } from "../schemas";
import type { FormAdapter } from "./types";

function cfg() {
  const base = process.env.WORDPRESS_SITE_URL;
  const secret = process.env.WORDPRESS_FORMS_SECRET;
  if (!base || !secret) throw new Error("Faltan WORDPRESS_SITE_URL o WORDPRESS_FORMS_SECRET");
  return { base: base.replace(/\/$/, ""), secret };
}

export const wordpressAdapter: FormAdapter = {
  name: "wordpress",
  async submit(form, data) {
    const { base, secret } = cfg();
    const response = await fetch(`${base}/wp-json/rsu/v1/submissions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-rsu-secret": secret },
      body: JSON.stringify({ form, payload: data }),
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`WordPress respondió ${response.status}`);
    const json = (await response.json()) as { id: string };
    return { id: String(json.id) };
  },
  async count(form) {
    const { base, secret } = cfg();
    const response = await fetch(`${base}/wp-json/rsu/v1/submissions?form=${encodeURIComponent(form)}`, {
      headers: { "x-rsu-secret": secret },
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`WordPress respondió ${response.status}`);
    const json = (await response.json()) as { count: number };
    return json.count;
  },
  async rows() {
    return [];
  },
  async indicators() {
    const counts = await Promise.all(FORM_KEYS.map((key) => this.count(key)));
    const base: Indicators = emptyIndicators();
    FORM_KEYS.forEach((key, index) => {
      base.counts[key] = counts[index] ?? 0;
    });
    return base;
  },
};
