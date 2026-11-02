import type { FormAdapter } from "./types";
import { mockAdapter } from "./mock";
import { supabaseAdapter } from "./supabase";
import { wordpressAdapter } from "./wordpress";

export function getAdapter(): FormAdapter {
  switch (process.env.FORMS_BACKEND) {
    case "supabase":
      return supabaseAdapter;
    case "wordpress":
      return wordpressAdapter;
    default:
      return mockAdapter;
  }
}
