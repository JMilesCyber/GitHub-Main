---
name: financial-guidance
description: Gives structured financial guidance for early-career users on budgeting (big purchases, travel), retirement, investing, debt payoff, and savings. Use when the user asks for financial advice, planning for a purchase or trip, monthly money checklist, debt payoff, investing, or retirement savings.
---

# Financial Guidance Skill

## Overview

This skill provides **early-career** users with actionable financial guidance. It covers: budgeting for big purchases and travel, retirement, investing, debt payoff, and savings. Use it when the user asks in chat for help or requests a **monthly financial checklist** (ask for context: income, goals, due dates). Responses should be **structured** (steps, checklists, “do this next”), and the skill may **drive tools** (research, reminders, templates). All guidance is general; recommend professionals for tax/legal/investment advice when appropriate.

---

## When to Use This Skill

- User asks about budgeting, saving for a big purchase, or travel.
- User asks about retirement, investing, or debt payoff.
- User asks for a monthly financial checklist or money review.
- User wants “what should I do next?” or step-by-step plans.

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
| Big purchase/travel| Target + deadline → monthly amount → sinking fund + reminders. |
| Retirement         | Match first, then 10–15%; simple fund; increase with raises.   |
| Investing          | Low-cost, diversified; long horizon; avoid timing.             |
| Debt payoff        | Minimums on all; extra to highest rate or smallest balance.    |
| Savings            | Starter EF → 3–6 months; automate; separate account.           |
| Monthly checklist  | Review → budget → debt → savings → retirement → goals → reminders. |
