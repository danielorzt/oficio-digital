import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { aggregate, type StoredRow } from "../aggregate";
import type { FormAdapter } from "./types";

type Row = StoredRow & { id: string; createdAt: string };

const file = path.join(process.cwd(), "data", "form-submissions.json");
let chain: Promise<unknown> = Promise.resolve();

function enqueue<T>(task: () => Promise<T>): Promise<T> {
  const run = chain.then(task, task);
  chain = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

async function readRows(): Promise<Row[]> {
  try {
    const raw = await readFile(file, "utf8");
    const parsed = JSON.parse(raw) as Row[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export const mockAdapter: FormAdapter = {
  name: "mock",
  submit(form, data, meta) {
    return enqueue(async () => {
      const rows = await readRows();
      const id = crypto.randomUUID();
      rows.push({ id, form, data, createdAt: meta.createdAt });
      await mkdir(path.dirname(file), { recursive: true });
      await writeFile(file, JSON.stringify(rows));
      console.log("[forms] respuesta guardada", form, id);
      return { id };
    });
  },
  async count(form) {
    const rows = await readRows();
    return rows.filter((row) => row.form === form).length;
  },
  async rows() {
    const rows = await readRows();
    return rows.map((row) => ({ form: row.form, data: row.data }));
  },
  async indicators() {
    return aggregate(await this.rows());
  },
};
