# Local Chatbot MCP Server

A local [MCP](https://modelcontextprotocol.io) (Model Context Protocol) server that gives your personal chatbot **skills** as tools: notes and reminders stored on your machine.

Use it from **Cursor** (or any MCP client) so the AI can save notes, list them, add reminders, and mark them done—all without leaving the chat.

## Quick start

1. **Install and build** (from this folder):

   ```bash
   cd mcp-server
   npm install
   npm run build
   ```

2. **Use in Cursor**

   The project already has `.cursor/mcp.json` pointing at this server. After building:

   - Restart Cursor (or reload the window).
   - The server appears as **local-chatbot** in Cursor’s MCP tools.
   - In chat, you can say things like:
     - “Save a note: call Mom tomorrow”
     - “What notes do I have?”
     - “Remind me to deploy at 5pm”
     - “What are my reminders?” / “Mark reminder reminder-123 as done”

3. **Data**

   Notes and reminders are stored under `mcp-server/data/` as JSON. You can edit or backup those files directly.

## Skills (tools) included

| Tool               | Purpose                                      |
|--------------------|----------------------------------------------|
| `save_note`        | Save a note with optional tags                |
| `list_notes`       | List all saved notes                         |
| `delete_note`      | Delete a note by id                           |
| `add_reminder`     | Add a reminder (text + time)                 |
| `list_reminders`   | List pending reminders                       |
| `complete_reminder`| Mark a reminder as done                      |

The tool descriptions are written so the model knows when to use each one (e.g. “Use when the user wants to remember something…”).

## Adding more skills

You teach the chatbot new skills by **adding tools** in `mcp-server/src/index.ts`:

1. **New tool** – call `server.registerTool(name, config, handler)`:

   - **name**: unique id, e.g. `"search_web"`.
   - **config**: `{ description, inputSchema }`. Use `z.object({ ... })` from Zod for `inputSchema`; add `.describe()` on fields so the model understands them.
   - **handler**: `async (args) => ({ content: [{ type: "text", text: "..." }] })`.

2. **Optional persistence** – for new data (e.g. bookmarks), add functions in `src/store.ts` and JSON files under `data/`, same pattern as notes/reminders.

3. **Rebuild and reload** – run `npm run build` in `mcp-server` and restart Cursor so it picks up the new tools.

### Example: “save link” skill

```ts
server.registerTool(
  "save_link",
  {
    description: "Save a URL with a title. Use when the user wants to bookmark or save a link.",
    inputSchema: z.object({
      url: z.string().url().describe("The URL to save"),
      title: z.string().describe("Short title for the link"),
    }),
  },
  async ({ url, title }) => {
    // e.g. append to data/links.json
    return {
      content: [{ type: "text" as const, text: `Saved: ${title} -> ${url}` }],
    };
  }
);
```

## Cursor config

The server is wired in `.cursor/mcp.json` at the project root:

```json
{
  "mcpServers": {
    "local-chatbot": {
      "command": "node",
      "args": ["mcp-server/dist/index.js"]
    }
  }
}
```

Cursor runs `node mcp-server/dist/index.js` from the project root, so you must run `npm run build` in `mcp-server` first.

## Development

- **Run without building**: `npm run dev` (uses `tsx` to run `src/index.ts`). For Cursor you’d need to point `mcp.json` at `npx tsx mcp-server/src/index.ts` if you want to skip building.
- **Dependencies**: `@modelcontextprotocol/sdk`, `zod`. Node 18+.

## Summary

- **Local MCP server** in `mcp-server/`: stdio transport, so Cursor can spawn it.
- **Skills** = MCP tools (notes, reminders); add more in `index.ts` and optional `store.ts` + `data/`.
- **Cursor**: `.cursor/mcp.json` is already set; build the server, restart Cursor, and use “local-chatbot” in chat.
