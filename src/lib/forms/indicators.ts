import { createServerFn } from "@tanstack/react-start";
import { emptyIndicators, type Indicators } from "./aggregate";

export type { Indicators } from "./aggregate";

export const loadIndicators = createServerFn({ method: "GET" }).handler(async (): Promise<Indicators> => {
  const { getAdapter } = await import("./adapters");
  try {
    return await getAdapter().indicators();
  } catch (error) {
    console.error("[forms] indicadores", error);
    return emptyIndicators();
  }
});
