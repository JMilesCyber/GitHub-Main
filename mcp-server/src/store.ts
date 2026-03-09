/**
 * Simple JSON file store for notes and reminders.
 * Data is stored in ./data/ next to the project.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "..", "data");
const NOTES_FILE = join(DATA_DIR, "notes.json");
const REMINDERS_FILE = join(DATA_DIR, "reminders.json");
const DESIGN_DOCS_DIR = join(__dirname, "..", "docs", "design-docs");

export interface Note {
  id: string;
  content: string;
  createdAt: string;
  tags?: string[];
}

export interface Reminder {
  id: string;
  text: string;
  at: string; // ISO date string
  createdAt: string;
  done?: boolean;
}

async function ensureDataDir() {
  await mkdir(DATA_DIR, { recursive: true });
}

async function readJson<T>(path: string, defaultValue: T): Promise<T> {
  try {
    const raw = await readFile(path, "utf-8");
    return JSON.parse(raw) as T;
  } catch {
    return defaultValue;
  }
}

async function writeJson(path: string, data: unknown): Promise<void> {
  await ensureDataDir();
  await writeFile(path, JSON.stringify(data, null, 2), "utf-8");
}

export async function getNotes(): Promise<Note[]> {
  return readJson<Note[]>(NOTES_FILE, []);
}

export async function addNote(content: string, tags?: string[]): Promise<Note> {
  const notes = await getNotes();
  const note: Note = {
    id: `note-${Date.now()}`,
    content,
    createdAt: new Date().toISOString(),
    tags: tags ?? [],
  };
  notes.push(note);
  await writeJson(NOTES_FILE, notes);
  return note;
}

export async function deleteNote(id: string): Promise<boolean> {
  const notes = await getNotes();
  const idx = notes.findIndex((n) => n.id === id);
  if (idx === -1) return false;
  notes.splice(idx, 1);
  await writeJson(NOTES_FILE, notes);
  return true;
}

export async function getReminders(): Promise<Reminder[]> {
  return readJson<Reminder[]>(REMINDERS_FILE, []);
}

export async function addReminder(
  text: string,
  at: string
): Promise<Reminder> {
  const reminders = await getReminders();
  const reminder: Reminder = {
    id: `reminder-${Date.now()}`,
    text,
    at,
    createdAt: new Date().toISOString(),
    done: false,
  };
  reminders.push(reminder);
  await writeJson(REMINDERS_FILE, reminders);
  return reminder;
}

export async function completeReminder(id: string): Promise<boolean> {
  const reminders = await getReminders();
  const r = reminders.find((x) => x.id === id);
  if (!r) return false;
  r.done = true;
  await writeJson(REMINDERS_FILE, reminders);
  return true;
}

/** Slug for design doc filename: lowercase, spaces and non-alphanumeric to hyphens */
function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Saves a design doc to docs/design-docs/<slug>.md (so it can be committed to Git).
 * Returns the path relative to project root for committing.
 */
export async function saveDesignDoc(
  title: string,
  content: string
): Promise<{ path: string; fullPath: string }> {
  await ensureDataDir();
  await mkdir(DESIGN_DOCS_DIR, { recursive: true });
  const slug = slugify(title) || "design-doc";
  const filename = `${slug}.md`;
  const fullPath = join(DESIGN_DOCS_DIR, filename);
  const pathFromProjectRoot = `mcp-server/docs/design-docs/${filename}`;
  await writeFile(fullPath, content, "utf-8");
  return { path: pathFromProjectRoot, fullPath };
}
