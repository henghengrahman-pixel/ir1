import fs from "fs/promises";
import path from "path";
const dataDir = path.join(process.cwd(), "data");
export async function ensureDir(){ await fs.mkdir(dataDir,{recursive:true}); }
export async function readJson(filename, fallback){
  await ensureDir();
  const file = path.join(dataDir, filename);
  try { return JSON.parse(await fs.readFile(file, 'utf8')); }
  catch (error) {
    if (error.code === 'ENOENT') { await writeJson(filename, fallback); return fallback; }
    throw error;
  }
}
export async function writeJson(filename, value){
  await ensureDir();
  const file = path.join(dataDir, filename);
  await fs.writeFile(file, JSON.stringify(value, null, 2), 'utf8');
  return value;
}
