---
name: weekly-meal-prep
description: Builds a weekly meal prep plan from pantry inventory, likes/dislikes, and budget, then outputs meal recipes and updates a favorites log.
---

# Weekly Meal Prep Skill

Use this skill when the user asks for weekly meal planning, meal prep, grocery planning, or recipe generation constrained by pantry items and budget.

## Objectives

- Produce a realistic 7-day meal prep plan.
- Use pantry items first to reduce waste and cost.
- Respect user preferences (likes, dislikes, restrictions).
- Stay within budget.
- Include recipes for selected meals.
- Keep a persistent list of favorite meals.

## Required Inputs

- Pantry inventory (item name + quantity if available).
- Likes and dislikes.
- Weekly food budget (currency and amount).

## Optional Inputs

- Dietary restrictions (allergies, vegetarian, halal, etc.).
- Time constraints (max prep/cook time).
- Number of servings.
- Available equipment.
- Preferred cuisines.

## Setting: Interactive Intake

This skill supports a user-input setting:

- `interactive_intake = true` (default): Ask the user follow-up questions and wait for answers before finalizing the weekly plan.
- `interactive_intake = false`: Make reasonable assumptions, state them clearly, and continue.

When `interactive_intake = true`, use the question flow below.

## Question Flow (Ask In Order)

1. "What pantry items do you currently have (and rough amounts)?"
2. "What foods or cuisines do you enjoy most this week?"
3. "What foods do you dislike or want to avoid?"
4. "What is your weekly budget for groceries?"
5. "Any dietary restrictions or allergies?"
6. "How many people/servings are you cooking for?"
7. "How much time do you want to spend cooking on weekdays?"
8. "Do you want leftovers for lunches?"

After answers are collected, summarize them back and ask for confirmation before producing the final plan.

## Workflow

### Step 1: Collect and Validate Inputs

- Gather required inputs.
- If key details are missing, ask targeted questions.
- Normalize inputs into a structured intake format (see `templates/intake-template.md`).

### Step 2: Build Candidate Meal Set

- Prioritize meals that use pantry ingredients.
- Filter out disliked foods and restricted ingredients.
- Keep prep complexity aligned with available time.
- Prefer reusable ingredients across multiple meals for lower cost.

### Step 3: Budget and Grocery Check

- Draft missing ingredient list.
- Estimate cost by category (produce, protein, pantry, dairy, frozen, misc.).
- If over budget, downgrade expensive ingredients and re-check.

### Step 4: Generate Weekly Plan

- Output 7 days with breakfast/lunch/dinner (or user-requested meal slots).
- Mark batch-cook items and leftover strategy.
- Include shopping list and estimated total cost.
- Use `templates/weekly-plan-template.md`.

### Step 5: Provide Recipes

- For each final meal, include a short recipe:
  - Ingredients with quantities.
  - Step-by-step instructions.
  - Prep time, cook time, total time.
  - Storage/reheat notes for meal prep.

### Step 6: Favorites Log

- Ask which meals should be saved as favorites.
- Store favorites at:
  - `mcp-server/data/meal-prep/favorite-meals.md`
- Append entries with date and optional notes.

## Output Requirements

Final response must include:

- Intake summary.
- Weekly meal plan.
- Grocery list with cost estimate and budget check.
- Recipes for the final selected meals.
- Favorites update confirmation with file path.

## Guardrails

- Never include ingredients from the user's dislikes or restrictions.
- Clearly label assumptions if user input is incomplete.
- If budget is too low, propose a "budget fallback plan" rather than failing.
