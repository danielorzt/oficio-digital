import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { aggregate } from "../aggregate";
import type { FormAdapter } from "./types";

let client: SupabaseClient | null = null;

function db() {
  if (!client) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) throw new Error("Faltan SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
    client = createClient(url, key, { auth: { persistSession: false } });
  }
  return client;
}

export const supabaseAdapter: FormAdapter = {
  name: "supabase",
  async submit(form, data, meta) {
    const { data: row, error } = await db()
      .from("form_submissions")
      .insert({ form, payload: data, created_at: meta.createdAt })
      .select("id")
      .single();
    if (error) throw new Error(error.message);
    return { id: String(row.id) };
  },
  async count(form) {
    const { count, error } = await db()
      .from("form_submissions")
      .select("id", { count: "exact", head: true })
      .eq("form", form);
    if (error) throw new Error(error.message);
    return count ?? 0;
  },
  async rows() {
    const { data, error } = await db().from("form_submissions").select("form, payload");
    if (error) throw new Error(error.message);
    return (data ?? []).map((row) => ({
      form: String(row.form),
      data: (row.payload ?? {}) as Record<string, unknown>,
    }));
  },
  async indicators() {
    return aggregate(await this.rows());
  },
};
