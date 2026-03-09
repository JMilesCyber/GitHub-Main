# Weekly Meal Prep Skill - Design Doc

## Summary
Create a reusable Codex skill that generates a weekly meal prep plan based on pantry inventory, likes/dislikes, and budget, then outputs recipes and saves favorites.

## Objectives / What Success Looks Like
- [ ] Skill collects pantry, preferences, and budget before planning.
- [ ] Skill supports an interactive question/answer intake mode.
- [ ] Skill generates a full weekly plan with a budget check.
- [ ] Skill includes recipes for final selected meals.
- [ ] Skill stores favorite meals in a persistent file location.

## Scope
- In scope: Skill definition, question flow, intake and output templates, favorites storage file.
- Out of scope: External grocery price API integration, nutrition macro optimization, calendar automation.

## Deliverables
- `.cursor/skills/weekly-meal-prep/SKILL.md`
- `.cursor/skills/weekly-meal-prep/templates/intake-template.md`
- `.cursor/skills/weekly-meal-prep/templates/weekly-plan-template.md`
- `mcp-server/data/meal-prep/favorite-meals.md`

## Acceptance Criteria
- A user can invoke the skill for weekly meal prep and get an intake-driven plan.
- The process asks user-input questions when `interactive_intake = true`.
- The final output includes weekly meals, grocery list, budget check, and recipes.
- Favorite meals can be appended to `mcp-server/data/meal-prep/favorite-meals.md`.

## Steps for Execution (Agent-Friendly)
1. Read user-provided pantry, likes/dislikes, and budget.
2. Run interactive question flow (or assumptions mode).
3. Build meal candidates that prioritize pantry usage and constraints.
4. Produce weekly schedule and missing-ingredient grocery list.
5. Estimate cost and tune plan to budget.
6. Attach recipes for selected meals.
7. Prompt for favorites and append entries to favorites file.

## Assumptions
- Skill files are stored under `.cursor/skills` in this repo.
- Favorites should be stored alongside project data in `mcp-server/data/meal-prep/`.
- User wants this as a reusable planning skill now, with room to refine question wording later.
