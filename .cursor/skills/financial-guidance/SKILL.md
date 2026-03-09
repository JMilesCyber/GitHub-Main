---
name: financial-guidance
description: Weekly financial check-ins plus ad-hoc guidance for early-career users. Asks for updated statements weekly; reads transactions from a folder; compares spending to goals/plan; produces weekly reports (saved for trajectory); flags problematic spending and guides course correction. Also covers budgeting, retirement, investing, debt payoff, savings, and monthly checklist. Use when the user asks for financial advice, weekly review, trajectory, or money checklist.
---

# Financial Guidance Skill

## Overview

This skill provides **early-career** users with actionable financial guidance and **weekly check-ins**. Every week it asks for updated financial statements; you place bank/transaction documents in the **transactions** folder; the skill reads them, compares to your **goals and written plan**, produces a **weekly report** (saved for future context), and tells you if things are trending right, what to do next, and—if spending conflicts with your goals—how to get back on track. Past reports are read so the skill can assess **trajectory** over weeks and months. It also supports ad-hoc answers, monthly checklists, and tool use (research, reminders). All guidance is general; recommend professionals for tax/legal/investment advice when appropriate.

---

## When to Use This Skill

- **Weekly check-in:** User is due for a weekly review, or asks for “this week’s review,” “update my financial report,” or “check my spending vs my goals.”
- User asks about budgeting, saving for a big purchase, or travel.
- User asks about retirement, investing, or debt payoff.
- User asks for a monthly financial checklist or money review.
- User wants “what should I do next?” or step-by-step plans, or wants to see “how I’m trending” over time.

---

## Data and Report Locations

All paths are relative to the **financial-guidance** skill directory (e.g. `.cursor/skills/financial-guidance/` in this repo).

| Purpose | Location | Who uses it |
|--------|----------|-------------|
| **Bank / transaction documents** | `transactions/` | User drops statements or transaction exports here (CSV, PDF, etc.). Skill **reads** everything in this folder to analyze recent spending. |
| **Weekly reports** | `reports/` | Skill **writes** each weekly report here (e.g. one file per week with a clear date/week label). Skill **reads** past reports for context and **trajectory** (weeks/months). |
| **Stated goals and written plan** | `goals.md` or `plan.md` | User maintains this file. Skill **reads** it to compare transactions and reports against goals and plan; use it to flag conflicts and suggest course correction. |

- **Reading transactions:** List and read all files in `transactions/` (or the subset the user indicates for “this week”). Parse or summarize amounts, categories, and dates as needed (support common formats: CSV, plain text; for PDF, summarize what’s extractable or ask user to provide a CSV/export).
- **Reading past reports:** When producing a new weekly report, optionally read the most recent 1–3 reports (and goals/plan) to compare current state to prior weeks and describe trajectory (improving, slipping, stable).
- **Writing reports:** Save each weekly report under `reports/` with a filename that includes the week (e.g. `reports/2025-03-08-weekly.md` or `reports/week-2025-W10.md`) so past reports can be ordered and read for context.

---

## Weekly Check-in Flow

Run this flow when the user asks for a weekly review or when it’s time for the regular weekly check-in (e.g. user says “run my weekly” or you prompt them).

1. **Ask for updated financial statements**  
   Prompt the user to add their latest bank/transaction documents to the `transactions/` folder (or confirm they’ve already been added for this week).

2. **Read transactions and goals**  
   - Read all relevant files in `transactions/` (this week’s or latest batch).  
   - Read `goals.md` or `plan.md` (stated goals and written plan).

3. **Compare and assess**  
   - Compare recent purchases and spending to the user’s stated goals and written plan.  
   - Optionally read the last 1–3 files in `reports/` to see prior context and trends.

4. **Identify problems**  
   - Note any **problematic spending habits** or patterns that **conflict** with goals or the written plan (e.g. overspending in a category that was supposed to be cut, or missing a savings transfer).

5. **Generate weekly report**  
   Produce a structured report that includes:  
   - **Summary** — How this period looks in one short paragraph.  
   - **Trends** — Whether things are trending in the right direction (vs last week/month if you have past reports).  
   - **Alignment with goals/plan** — What’s on track and what’s off.  
   - **Problematic spending** — Any habits that conflict with goals/plan; be specific and non-judgmental.  
   - **What to do next** — Concrete next steps (e.g. “This week: move $X to savings,” “Reduce dining out to $Y,” “Set reminder for payment Z”).  
   - **Course correction** — If something is off track, 1–3 specific changes to get back on plan (tied to goals/plan).

6. **Save the report**  
   Write the report to `reports/` with a week-identified filename (e.g. `reports/2025-03-08-weekly.md`).

7. **Respond to the user**  
   Give a short summary in chat: trajectory, 1–2 highlights, any problematic spending and course correction, and “what to do next.” Offer to create reminders if helpful.

---

## Trajectory (Using Past Reports)

- When producing a **new** weekly report, read **past reports** from `reports/` (e.g. last 2–4 files, by date) and the current **goals/plan**.
- Compare: spending levels, categories, savings rate, debt payoff, or other metrics you’ve been tracking vs prior weeks/months.
- In the report and in chat, say clearly whether the user is **trending in the right direction**, **slipping**, or **stable**, and reference prior weeks/months (e.g. “Spending is down vs last 3 weeks,” “Savings rate is still below your plan target”).

---

## Course Correction (Problematic Spending vs Goals/Plan)

- Use the user’s **stated goals** and **written plan** (from `goals.md` or `plan.md`) as the benchmark.
- When **recent transactions** or patterns conflict with those (e.g. a category over budget, a missed transfer, or a habit that undermines a goal), **bring it up** in the weekly report and in your reply.
- Be specific: “Dining out was $X this week; your plan was $Y,” or “No transfer to the travel fund this week; your goal was $Z/month.”
- **Guide back on track:** Offer 1–3 concrete changes (e.g. “Next week: cap dining at $Y,” “Set a recurring transfer for the 1st,” “Pause nonessential subscriptions until debt X is paid”). Tie each suggestion to their written plan or goal so the trajectory is clear.

---

## 1. Budgeting for Big Purchases & Travel

**Principles:** Set a target amount and deadline; break into monthly savings; separate “sinking fund” from emergency fund; track progress.

**Example prompts:**
- “Help me plan for a big purchase.”
- “I want to save for a trip in 6 months.”
- “How do I budget for a car down payment?”

**How to respond:**
- Ask for: target amount, timeline, and current savings (if any).
- Give: monthly savings needed, where to hold the money (e.g. high-yield savings), and a simple tracker (steps or checklist).
- Suggest a reminder: e.g. “Set a monthly reminder to move $X into your travel fund.”

---

## 2. Retirement

**Principles:** Start early; use employer match first; keep it simple (e.g. target-date or broad index); increase contribution with raises.

**Example prompts:**
- “How much should I save for retirement?”
- “What’s the first thing I should do for retirement?”
- “I’m early career—where do I start?”

**How to respond:**
- Give “do this next”: e.g. “1) Get full employer match. 2) Then increase to 10–15% of pay. 3) Use a target-date or low-cost index fund.”
- Structure as steps; offer to create a reminder (e.g. “Review retirement contribution at next raise”).

---

## 3. Investing

**Principles:** Long time horizon favors stocks; diversify; keep costs low; avoid timing the market; early career = more equity is usually okay.

**Example prompts:**
- “How do I start investing?”
- “What should I invest in?”
- “Is it too risky to invest now?”

**How to respond:**
- Explain basics (index funds, diversification, cost matter).
- Give a simple “do this next” (e.g. open IRA or use 401k, pick one or two funds).
- Offer to research current options (tool use) or suggest a reminder to rebalance annually.

---

## 4. Debt Payoff

**Principles:** Know all balances and rates; minimums on everything; extra to highest rate (avalanche) or smallest balance (snowball) depending on preference; avoid new high-interest debt.

**Example prompts:**
- “How do I pay off debt?”
- “Should I pay off debt or save?”
- “I have credit card and student loans—what first?”

**How to respond:**
- Ask for: list of debts (balance, rate, minimum) and monthly amount they can put toward debt.
- Give a clear order of attack (avalanche vs snowball in one sentence each) and next step (e.g. “This month: pay $X to [account]”).
- Optional: suggest a reminder for payment dates or a monthly “debt check-in.”

---

## 5. Savings (General & Emergency Fund)

**Principles:** Emergency fund first (e.g. $500–1k, then 3–6 months expenses); automate; keep in a separate, accessible account.

**Example prompts:**
- “How much should I have in savings?”
- “Where should I keep my emergency fund?”
- “I can’t save much—what’s the minimum?”

**How to respond:**
- Give a tiered goal (starter emergency fund → 3–6 months).
- Structure as steps; suggest automating a small amount each pay period.
- Offer a reminder (e.g. “Review emergency fund balance on the 1st”).

---

## 6. Monthly Financial Checklist

**When to offer:** User asks for a “monthly checklist,” “money review,” or “what to check each month.”

**Context to ask for (if not provided):**
- Income and fixed costs.
- Current goals (debt, big purchase, travel, retirement).
- Any known due dates or deadlines.

**Checklist template (deliver in order):**
1. **Review last month** — Spending vs plan; any surprises?
2. **Update budget** — Adjust for this month (irregular bills, one-offs).
3. **Debt check** — Minimums paid; extra to target debt.
4. **Savings check** — Emergency fund and sinking funds on track?
5. **Retirement check** — Contribution set; no need to change unless life event.
6. **Big purchase / travel** — Add to sinking fund; track progress.
7. **Reminders** — Set or confirm: payment due dates, savings transfer day, next month’s review.

Offer to create reminders for any of these (tool use).

---

## 7. Tool Use

The skill may **drive tools** when useful:

- **Research** — Look up current rates, account types, or product basics when the user asks “what’s best” or “what are good options.” Do not recommend specific products as advice; frame as “things to compare.”
- **Reminders** — Suggest or create reminders for: monthly review, payment due dates, savings transfer day, annual rebalance or contribution review.
- **Structured output** — Use templates (e.g. markdown tables for debt list, numbered steps, checklists) so the user can copy or follow easily.

Use tools only when they clearly help; keep answers readable and actionable without them when possible.

---

## 8. Reminders and Follow-up

- Suggest **reminders** in line with the topic (e.g. “Set a reminder to move $X to your travel fund on payday”).
- If the user has a tool that creates reminders, use it when they agree.
- For monthly checklist, suggest one recurring “money review” reminder (e.g. first of month).

---

## 9. Disclaimers

- This skill gives **general guidance** only, not personalized financial, legal, or tax advice.
- Recommend **professionals** (CPA, financial advisor, attorney) when the user’s situation involves taxes, legal issues, or complex investments.
- Do not ask for or use real account numbers or passwords; work with amounts and goals the user chooses to share.

---

## Quick Reference

| Topic              | One-line reminder                                              |
|--------------------|----------------------------------------------------------------|
| **Weekly check-in**| Ask for statements → read `transactions/` + `goals.md` → compare → flag problems → report → save to `reports/` → next steps + course correction. |
| **Trajectory**     | Read past `reports/` + goals; say if trending right, slipping, or stable. |
| **Course correction** | When spending conflicts with goals/plan, state it and give 1–3 concrete steps back on track. |
| Big purchase/travel| Target + deadline → monthly amount → sinking fund + reminders. |
| Retirement         | Match first, then 10–15%; simple fund; increase with raises.   |
| Investing          | Low-cost, diversified; long horizon; avoid timing.             |
| Debt payoff        | Minimums on all; extra to highest rate or smallest balance.    |
| Savings            | Starter EF → 3–6 months; automate; separate account.         |
| Monthly checklist  | Review → budget → debt → savings → retirement → goals → reminders. |
