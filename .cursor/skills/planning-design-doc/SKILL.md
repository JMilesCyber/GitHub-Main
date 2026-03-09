---
name: planning-design-doc
description: Guides the user through a multi-step process to produce an objective-driven design doc for new features or new files, executable by an agent with minimal human intervention. Use when the user wants to plan a new feature, scope a project, create a design doc, or get a spec for something to be built.
---

# Planning Skill — Objective-Driven Design Doc

Produces a **design doc** that:
- Is **objective-driven** and defines **what success looks like**.
- Can be **read by an agent** and **executed with minimal human intervention**.
- Scopes the project clearly (goals, deliverables, acceptance criteria).

The workflow has **5 steps**. Go through them in order; do not skip steps.

---

## Step 1 — Interview (Goals and Process)

- **Ask the user** about:
  - **Goals**: What they want to achieve (feature, product, or set of files).
  - **Context**: Current codebase, stack, and constraints.
  - **Process**: How they work (e.g. one repo, multiple services, deployment).
  - **Success**: What “done” looks like in their own words.
- Take notes and summarize back so they can correct you.
- **Output**: A short summary of goals, context, and success criteria. Proceed to Step 2 only after you have enough to draft a proposal.

---

## Step 2 — Draft Proposal

- Produce a **draft design doc** that includes:
  - **Title** and **brief summary**.
  - **Objectives** (what success looks like — concrete, testable).
  - **Scope** (in scope / out of scope).
  - **Deliverables** (files, modules, APIs, or artifacts to create or change).
  - **Acceptance criteria** (how an agent or human can verify success).
  - **Steps or tasks** an agent could follow with minimal human intervention.
- Use clear headings and bullet points so the doc is easy to scan and execute.
- **Give the draft to the user** and ask them to review and suggest changes. Do not proceed to Step 3 until they have had a chance to respond.

---

## Step 3 — Review and Lingering Questions

- **Incorporate** the user’s edits and comments into the design doc.
- **Re-read the doc** once more for consistency and completeness.
- **Interview again** on any **lingering questions** (e.g. unclear requirements, edge cases, priorities).
- Update the doc with any new answers.
- **Output**: A revised design doc and a short note that you’re ready for approval (Step 4).

---

## Step 4 — Approval

- Present the **final design doc** to the user.
- Ask explicitly: **“Please approve this design doc (or request final changes).”**
- If they request changes, make them and repeat Step 4 until they approve.
- Once approved, confirm and say you will publish it to GitHub (Step 5).

---

## Step 5 — Publish to GitHub

- **Save the design doc** to the project. Use the MCP tool **save_design_doc** so the doc is stored under `mcp-server/docs/design-docs/` and the path is known for committing.
- **Commit** the new or updated file(s) with a clear message (e.g. `docs: add design doc for <feature name>`).
- **Push** to the user’s repo (follow the **github-push-pull** skill: correct branch, commit all changes, then push).
- **Confirm** where the doc lives and that it’s pushed (e.g. “Design doc is in `docs/feature-name-design.md` and has been pushed to `main`.”).

---

## Design Doc Template (Use as a Guide)

```markdown
# [Feature/Project Name] — Design Doc

## Summary
[1–2 sentences]

## Objectives / What Success Looks Like
- [ ] [Concrete outcome 1]
- [ ] [Concrete outcome 2]

## Scope
- **In scope:** …
- **Out of scope:** …

## Deliverables
- [File or component 1]
- [File or component 2]

## Acceptance Criteria
- [How to verify success]

## Steps for Execution (Agent-Friendly)
1. [Step]
2. [Step]
```

---

## Summary

- **Step 1**: Interview on goals, context, process, and success.
- **Step 2**: Draft design doc; user reviews.
- **Step 3**: Incorporate feedback; ask lingering questions; revise.
- **Step 4**: Present for approval; repeat until approved.
- **Step 5**: Save doc, commit, and push to GitHub.

Always take the user through these steps in order when they want to plan a new feature or create a design doc.
