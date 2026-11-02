import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const source = "dist/client";
const shellPath = existsSync(join(source, "index.html"))
  ? join(source, "index.html")
  : join(source, "_shell.html");

if (!existsSync(shellPath)) {
  console.error("No index.html or _shell.html in", source);
  process.exit(1);
}

const target = ".output/public";
mkdirSync(target, { recursive: true });
for (const entry of readdirSync(source)) {
  if (entry === "_shell.html") continue;
  cpSync(join(source, entry), join(target, entry), { recursive: true });
}

const html = readFileSync(shellPath);
const routes = [
  "index.html",
  "404.html",
  "blog/index.html",
  "blog/el-proyecto/index.html",
  "blog/la-brecha/index.html",
  "blog/primeras-sesiones/index.html",
  "sobre/index.html",
  "plan/index.html",
  "ubicacion/index.html",
  "participa/index.html",
  "privacidad/index.html",
  "registro/index.html",
  "evaluacion/index.html",
  "satisfaccion/index.html",
  "impacto/index.html",
];

for (const route of routes) {
  const file = join(target, route);
  mkdirSync(join(file, ".."), { recursive: true });
  writeFileSync(file, html);
}

writeFileSync(join(target, ".nojekyll"), "");
console.log("GitHub Pages files ready in", target);
