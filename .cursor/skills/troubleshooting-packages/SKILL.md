---
name: troubleshooting-packages
description: Researches and installs missing packages when the user hits errors due to missing dependencies. Use when the user cannot run something because required packages are not installed, when they see "module not found" or "package not found" or "command not found" for a tool, or when they ask for help fixing install or dependency errors.
---

# Troubleshooting Missing Packages

## When to Apply

Apply this skill when:
- The user reports an error that indicates a missing package, module, or CLI tool.
- A command fails with messages like "Cannot find module", "Module not found", "package not found", "command not found", or "is not recognized".
- The user says they don't have something installed or asks how to fix a dependency error.

## Instructions

1. **Identify the missing dependency** from the error message or the user's description (e.g. missing npm package, pip package, or system tool).

2. **Research the correct package** if unclear:
   - For Node/JavaScript: check npm for the official package name and typical install command (`npm install <pkg>` or `npm install -D <pkg>`).
   - For Python: check PyPI for the package name and use `pip install <pkg>` (or `pip3`; use a venv when appropriate).
   - For system/CLI tools: identify the installer (e.g. winget, choco, apt) and the package name.

3. **Install the package yourself**:
   - Run the appropriate install command in the user's project directory (or the directory they're working in).
   - Use the same environment the user is using (e.g. if they use npm, use npm; if they use a venv, activate it or run pip from that venv).
   - Prefer project-local installs (e.g. `npm install` in the project) over global when applicable.

4. **Confirm success**: After installing, re-run the failing command or suggest the user try again. If something else is missing, repeat the process.

5. **Only ask for confirmation** when the fix is ambiguous (e.g. multiple possible packages) or when installing system-wide tools that might affect the whole machine. Otherwise proceed with the install.

## Examples

- User gets "Error: Cannot find module 'zod'" → Run `npm install zod` in the project root.
- User gets "pip: command not found" but has Python → Suggest installing pip or use `python -m pip install <pkg>`.
- User gets "npm is not recognized" → Use this skill to install Node.js (e.g. via winget) then run npm install for their project.
