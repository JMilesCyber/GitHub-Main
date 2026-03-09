# Financial Guidance Skill — Design Doc

## Summary

A Cursor agent skill that gives early-career users structured financial guidance on budgeting (including big purchases and travel), retirement, investing, debt payoff, and savings. It supports **weekly check-ins**: the skill asks for updated financial statements each week, reads transaction history from a dedicated folder, compares spending and trends against the user’s stated goals and written plan, produces a weekly report (saved for future context), flags problematic spending that conflicts with goals, and guides the user back on track. Past reports are stored and read so the skill can assess trajectory over weeks and months. Ad-hoc guidance, monthly checklists, and tool use (research, reminders) remain in scope.

## Objectives / What Success Looks Like

- [ ] User can @ the skill and get clear, actionable guidance on: big-purchase/travel budgeting, retirement, investing, debt payoff, and savings (early-career lens).
- [ ] **Weekly:** Skill asks for updated financial statements; user places bank/transaction documents in the designated folder; skill reads them, compares to goals and plan, and produces a weekly report (trends, alignment, problematic spending, next steps); report is saved for future context.
- [ ] **Trajectory:** Skill reads past weekly reports and goals so it can compare current state to history and describe whether things are trending in the right direction over weeks and months.
- [ ] **Course correction:** When spending or behavior conflicts with stated goals and written plan, skill surfaces it and guides the user toward a new trajectory to get back on track.
- [ ] User can ask for a monthly financial checklist and receive one when they provide context (income, goals, due dates, etc.).
- [ ] Skill can drive tools (e.g. research, reminders, templates) when relevant.
- [ ] Output is structured (headings, steps, recommendations) and easy to act on.
- [ ] Skill lives in GitHub-Main under `.cursor/skills/` with defined folders for transactions and weekly reports; documented so an agent can extend or maintain it.

## Scope

- **In scope:**
  - One primary skill (`financial-guidance/SKILL.md`) covering all topics and the **weekly check-in flow** (ask for statements → read transactions → compare to goals/plan → identify problems → generate report → save report → next steps).
  - **Data storage:** A folder where the user stores **bank transaction history documents** (statements, exports); the skill reads from this folder. A folder where **weekly reports** are saved; the skill reads past reports for context and trajectory. A **goals/plan** file (or doc) the user maintains; the skill reads it to compare against transactions and reports.
  - **Trajectory:** Using past reports and past goals, the skill can assess whether the user is trending in the right direction and reference prior weeks/months in guidance.
  - **Problematic spending:** Skill identifies habits that conflict with stated goals and written plan and offers concrete guidance to get back on track.
  - Guidance content and patterns: how to structure answers, example prompts, and how to ask for context (monthly checklist, weekly statements).
  - Tool use: which tools the skill may call (research, reminders, spreadsheets/templates) and when.
  - Early-career framing (income growth, time horizon, risk tolerance, simplicity).

- **Out of scope:**
  - Automated ingestion of live bank APIs (user provides documents/files; storage is file-based).
  - Legal/tax/regulated advice (disclaimers; recommend professionals when needed).
  - Building new MCP tools from scratch in this doc (reference existing or planned tools; implementation is separate).

## Deliverables

- **`.cursor/skills/financial-guidance/SKILL.md`**
  - Name, description, and “use when” (including weekly check-in, trajectory, and course correction).
  - **Data and report locations:** Paths for `transactions/` (bank/transaction documents), `reports/` (weekly reports), and goals/plan file; how the skill reads and writes them.
  - **Weekly check-in flow:** (1) Ask user for updated financial statements; (2) user places files in `transactions/`; (3) skill reads transactions and goals/plan; (4) compare spending to goals and plan; (5) assess trends (optionally by reading past reports); (6) flag problematic spending that conflicts with goals/plan; (7) generate weekly report with trajectory, next steps, and course-correction guidance; (8) save report to `reports/`; (9) give user summary and “what to do next.”
  - **Trajectory:** How to read past reports and goals to compare current vs past and describe direction over weeks/months.
  - **Course correction:** How to surface conflicting spending and guide user back on track (reference goals and plan; suggest concrete changes).
  - Sections per topic: big-purchase/travel budgeting, retirement, investing, debt payoff, savings (principles, example prompts, structure).
  - Monthly checklist: when to offer, context to ask for, template.
  - Tool use and reminders; disclaimers.

- **Folder structure (under `.cursor/skills/financial-guidance/`)**
  - **`transactions/`** — User stores bank transaction history / statements here; skill reads from this folder. Contents should be gitignored (sensitive).
  - **`reports/`** — Weekly reports saved here (e.g. one file per week); skill reads past reports for context and trajectory. Optionally gitignored.
  - **`goals.md` or `plan.md`** — User’s stated goals and written plan; skill reads to compare against transactions and reports. Template provided; user fills in.

- **Optional: `financial-guidance/README.md` or short “Reference” section inside SKILL.md**
  - Quick reference (one-line reminders per topic, link to main skill).

## Acceptance Criteria

- An agent (or human) can open the skill file and understand: when to invoke it, weekly check-in flow, data/report locations, trajectory use, and how to respond (ad-hoc, plan, next step, monthly checklist).
- **Weekly:** User can be prompted for updated statements; after placing transaction docs in `transactions/`, the skill reads them, compares to goals/plan, produces a weekly report (trends, alignment, problematic spending, next steps), saves the report to `reports/`, and gives guidance (including course correction when needed).
- **Trajectory:** Skill can read past reports (and goals) to compare current state to history and describe whether the user is trending in the right direction over weeks/months.
- **Course correction:** When spending conflicts with goals/plan, the skill calls it out and guides the user toward a new trajectory to get back on track.
- A user can ask “Help me plan for a big purchase” or “Give me a monthly money checklist” and get structured, early-career-appropriate guidance (and, where applicable, a checklist after providing context).
- The skill doc explicitly allows and describes driving tools (research, reminders, structured recommendations).
- The skill and folder structure (transactions/, reports/, goals or plan file) exist in the GitHub-Main repo under `.cursor/skills/financial-guidance/`. Transaction (and optionally report) contents are gitignored to avoid committing sensitive data.

## Steps for Execution (Agent-Friendly)

1. **Create skill and data directories** — In GitHub-Main repo: `mkdir -p .cursor/skills/financial-guidance/transactions .cursor/skills/financial-guidance/reports`. Add `.gitignore` under `financial-guidance/` so `transactions/*` (and optionally `reports/*`) are ignored; keep folder structure with README or .gitkeep so paths are clear.
2. **Create goals/plan template** — Add `goals.md` or `plan.md` under `financial-guidance/` with section placeholders (income, goals, debt, savings targets, big purchase/travel, written plan) so the user can fill in; skill reads this to compare against transactions and reports.
3. **Create `SKILL.md`** — Add frontmatter and “use when” (including weekly check-in, trajectory, course correction). Add “Overview” and **“Data and report locations”** (paths for transactions/, reports/, goals or plan file).
4. **Add “Weekly check-in flow”** — Steps: ask for statements → user puts files in transactions/ → skill reads transactions + goals/plan → compare to goals/plan → (optional) read past reports for trend → flag problematic spending → generate weekly report → save to reports/ → give summary and next steps + course correction if needed.
5. **Add “Trajectory” and “Course correction”** — How to read past reports and goals; how to compare current vs past and describe direction; how to surface conflicting spending and guide user back on track.
6. **Add topic sections** — Budgeting (big purchases & travel), Retirement, Investing, Debt payoff, Savings (principles, example prompts, structure).
7. **Add “Monthly checklist”** — When to offer, what to ask, template.
8. **Add “Tool use” and “Reminders and follow-up”** — Same as before; disclaimers.
9. **Optional: short reference** — One-line reminders per topic in SKILL.md or README.
10. **Verify** — Skill path, folder structure, and gitignore; all behaviors above documented.
