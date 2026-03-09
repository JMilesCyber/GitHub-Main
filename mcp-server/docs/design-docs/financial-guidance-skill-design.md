# Financial Guidance Skill — Design Doc

## Summary

A Cursor agent skill that gives early-career users structured financial guidance on budgeting (including big purchases and travel), retirement, investing, debt payoff, and savings. It supports ad-hoc chat answers, step-by-step plans, “do this next” suggestions, optional monthly checklists, and can drive tools for research, reminders, and structured recommendations.

## Objectives / What Success Looks Like

- [ ] User can @ the skill and get clear, actionable guidance on: big-purchase/travel budgeting, retirement, investing, debt payoff, and savings (early-career lens).
- [ ] User can ask for a monthly financial checklist and receive one when they provide context (income, goals, due dates, etc.).
- [ ] Skill can drive tools (e.g. research, reminders, templates) when relevant.
- [ ] Output is structured (headings, steps, recommendations) and easy to act on.
- [ ] Skill lives in GitHub-Main under `.cursor/skills/` and is documented so an agent can extend or maintain it.

## Scope

- **In scope:**
  - One primary skill (e.g. `financial-guidance/SKILL.md`) that defines when to use the skill, topics (budgeting for big purchases/travel, retirement, investing, debt payoff, savings), and how to respond (ad-hoc, plans, next steps, monthly checklist).
  - Guidance content and patterns: how to structure answers, example prompts, and how to ask the user for context (e.g. for monthly checklist).
  - Tool use: which tools the skill may call (research, reminders, spreadsheets/templates) and when.
  - Early-career framing (income growth, time horizon, risk tolerance, simplicity).

- **Out of scope:**
  - Personalized financial advice that requires real account data (skill gives principles and frameworks, not “your exact number”).
  - Legal/tax/regulated advice (disclaimers; suggest professionals when needed).
  - Building new MCP tools from scratch in this doc (we can reference existing or planned tools; implementation of new tools is separate).

## Deliverables

- **`.cursor/skills/financial-guidance/SKILL.md`**
  - Name, description, and “use when” so the skill is discoverable.
  - Sections per topic: big-purchase/travel budgeting, retirement, investing, debt payoff, savings.
  - For each: key principles, 2–3 example prompts, and how to structure the answer (steps, checklist, “do this next”).
  - Monthly checklist: when to offer it, what context to ask for (income, goals, bills, deadlines), and a template structure (e.g. review spending, update budget, check debt, savings, retirement, big purchase progress).
  - Tool use: list of tools the skill may use (research, reminders, etc.) and brief “when to use” rules.
  - Reminders: how the skill suggests or creates reminders (e.g. “set a reminder to review budget on the 1st”).
  - Disclaimers: general guidance only; recommend professionals for tax/legal/investment decisions when appropriate.

- **Optional: `financial-guidance/README.md` or short “Reference” section inside SKILL.md**
  - Quick reference (one-line reminders per topic, link to main skill).

## Acceptance Criteria

- An agent (or human) can open the skill file and understand: when to invoke it, what topics it covers, and how to respond (ad-hoc, plan, next step, monthly checklist).
- A user can ask “Help me plan for a big purchase” or “Give me a monthly money checklist” and get structured, early-career-appropriate guidance (and, where applicable, a checklist after providing context).
- The skill doc explicitly allows and describes driving tools (research, reminders, structured recommendations).
- The skill is in the GitHub-Main repo under `.cursor/skills/financial-guidance/`.

## Steps for Execution (Agent-Friendly)

1. **Create skill directory** — In GitHub-Main repo: `mkdir -p .cursor/skills/financial-guidance`.
2. **Create `SKILL.md`** — Add frontmatter: `name`, `description`, “use when” (e.g. user asks about budgeting, big purchases, travel, retirement, investing, debt, savings, or monthly financial checklist). Add a short “Overview” (objectives, audience: early career, any user).
3. **Add topic sections** — For each of: Budgeting (big purchases & travel), Retirement, Investing, Debt payoff, Savings — add: 2–3 example user prompts; principles and structure for the answer (steps, checklist, “do this next”); any context to ask the user for (income, goals, deadlines).
4. **Add “Monthly checklist” section** — When to offer: user asks for a checklist or monthly review. What to ask: income, fixed costs, goals, debt list, savings targets, big-purchase/travel plans. Template: e.g. Review last month → Update budget → Debt check → Savings check → Retirement check → Big purchase/travel progress → Reminders to set.
5. **Add “Tool use” section** — List tools the skill may use (research, reminders, templates). Short rules: when to research, when to suggest/create reminders, when to give structured recommendations (and in what format).
6. **Add “Reminders and follow-up”** — How to suggest or create reminders (e.g. monthly review, payment due dates, savings transfer day).
7. **Add disclaimers** — General guidance only; recommend professionals for tax/legal/investment advice when appropriate.
8. **Optional: add a short reference** — Either inside SKILL.md or as `README.md`: one-line summary per topic and link to main skill.
9. **Verify** — Read through SKILL.md; confirm all topics and behaviors above are covered. Confirm skill path: `.cursor/skills/financial-guidance/SKILL.md` in GitHub-Main.
