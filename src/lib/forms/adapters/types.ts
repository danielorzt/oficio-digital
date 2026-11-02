import type { Indicators, StoredRow } from "../aggregate";
import type { FormKey } from "../schemas";

export interface FormAdapter {
  name: string;
  submit(form: FormKey, data: Record<string, unknown>, meta: { createdAt: string }): Promise<{ id: string }>;
  count(form: FormKey): Promise<number>;
  rows(): Promise<StoredRow[]>;
  indicators(): Promise<Indicators>;
}
