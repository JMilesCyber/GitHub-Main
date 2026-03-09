import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import * as store from "./store.js";

const server = new McpServer({
  name: "local-chatbot-mcp",
  version: "1.0.0",
});

// ——— Skills (tools) the chatbot can use ———

server.registerTool(
  "save_note",
  {
    description:
      "Save a note for later. Use when the user wants to remember something, take a note, or jot down an idea.",
    inputSchema: z.object({
      content: z.string().describe("The note content"),
      tags: z.array(z.string()).optional().describe("Optional tags for the note"),
    }),
  },
  async ({ content, tags }) => {
    const note = await store.addNote(content, tags);
    return {
      content: [
        {
          type: "text" as const,
          text: `Note saved (id: ${note.id}). You can ask to list or search notes later.`,
        },
      ],
    };
  }
);

server.registerTool(
  "list_notes",
  {
    description:
      "List saved notes. Use when the user asks to see their notes, list notes, or what they saved.",
    inputSchema: z.object({}),
  },
  async () => {
    const notes = await store.getNotes();
    if (notes.length === 0) {
      return {
        content: [{ type: "text" as const, text: "No notes saved yet." }],
      };
    }
    const text = notes
      .map(
        (n) =>
          `- [${n.id}] ${n.content}${n.tags?.length ? ` (${n.tags.join(", ")})` : ""} — ${n.createdAt}`
      )
      .join("\n");
    return {
      content: [{ type: "text" as const, text: `Notes:\n${text}` }],
    };
  }
);

server.registerTool(
  "delete_note",
  {
    description:
      "Delete a note by id. Use when the user wants to remove or delete a specific note.",
    inputSchema: z.object({
      noteId: z.string().describe("The note id (e.g. note-1234567890)"),
    }),
  },
  async ({ noteId }) => {
    const deleted = await store.deleteNote(noteId);
    return {
      content: [
        {
          type: "text" as const,
          text: deleted
            ? `Note ${noteId} deleted.`
            : `Note ${noteId} not found.`,
        },
      ],
    };
  }
);

server.registerTool(
  "add_reminder",
  {
    description:
      "Add a reminder for a date/time. Use when the user wants to be reminded of something later.",
    inputSchema: z.object({
      text: z.string().describe("What to be reminded of"),
      at: z
        .string()
        .describe(
          "When to be reminded (ISO date or natural description, e.g. 2025-03-10T09:00:00 or 'tomorrow 9am')"
        ),
    }),
  },
  async ({ text, at }) => {
    const reminder = await store.addReminder(text, at);
    return {
      content: [
        {
          type: "text" as const,
          text: `Reminder set (id: ${reminder.id}): "${text}" at ${at}.`,
        },
      ],
    };
  }
);

server.registerTool(
  "list_reminders",
  {
    description:
      "List reminders. Use when the user asks what reminders they have or to see upcoming reminders.",
    inputSchema: z.object({}),
  },
  async () => {
    const reminders = await store.getReminders();
    const pending = reminders.filter((r) => !r.done);
    if (pending.length === 0) {
      return {
        content: [
          {
            type: "text" as const,
            text: "No pending reminders.",
          },
        ],
      };
    }
    const text = pending
      .map((r) => `- [${r.id}] ${r.text} — ${r.at}`)
      .join("\n");
    return {
      content: [{ type: "text" as const, text: `Reminders:\n${text}` }],
    };
  }
);

server.registerTool(
  "complete_reminder",
  {
    description:
      "Mark a reminder as done. Use when the user says they did something or want to clear a reminder.",
    inputSchema: z.object({
      reminderId: z.string().describe("The reminder id"),
    }),
  },
  async ({ reminderId }) => {
    const done = await store.completeReminder(reminderId);
    return {
      content: [
        {
          type: "text" as const,
          text: done
            ? `Reminder ${reminderId} marked done.`
            : `Reminder ${reminderId} not found.`,
        },
      ],
    };
  }
);

// ——— Planning skill: persist design docs for Step 5 (publish to GitHub) ———
server.registerTool(
  "save_design_doc",
  {
    description:
      "Save a design doc (e.g. from the planning skill) to the project so it can be committed and pushed to GitHub. Use when the user has approved a design doc and you need to persist it before committing and pushing.",
    inputSchema: z.object({
      title: z.string().describe("Short title for the design doc (used for filename)"),
      content: z.string().describe("Full markdown content of the design doc"),
    }),
  },
  async ({ title, content }) => {
    const { path } = await store.saveDesignDoc(title, content);
    return {
      content: [
        {
          type: "text" as const,
          text: `Design doc saved to ${path}. You can commit and push this file to publish to GitHub.`,
        },
      ],
    };
  }
);

// ——— Run over stdio (for Cursor / local chatbot) ———

const transport = new StdioServerTransport();
await server.connect(transport);
