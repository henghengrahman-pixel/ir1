import { readJson, writeJson } from "./json-db.js";
import { defaultQuickActions, defaultSettings, defaultSlides } from "./default-data.js";
export async function getSlides(){ const rows = await readJson('slides.json', defaultSlides); return [...rows].sort((a,b)=>Number(a.order||0)-Number(b.order||0)); }
export async function saveSlides(rows){ return writeJson('slides.json', [...rows].sort((a,b)=>Number(a.order||0)-Number(b.order||0))); }
export async function getQuickActions(){ const rows = await readJson('quick-actions.json', defaultQuickActions); return [...rows].sort((a,b)=>Number(a.order||0)-Number(b.order||0)); }
export async function saveQuickActions(rows){ return writeJson('quick-actions.json', [...rows].sort((a,b)=>Number(a.order||0)-Number(b.order||0))); }
export async function getSettings(){ return readJson('settings.json', defaultSettings); }
export async function saveSettings(rows){ return writeJson('settings.json', { ...defaultSettings, ...rows }); }
