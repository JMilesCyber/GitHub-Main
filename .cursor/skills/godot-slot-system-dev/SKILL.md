---
name: godot-slot-system-dev
description: Build and iterate the slot-machine gameplay system in Godot for a roguelike tower defense game, including symbols, rolls, effect resolution, and UI flow.
---

# Godot Slot System Development

Use this skill when implementing or modifying the slot-machine mechanic in the Godot mobile game.

## Goal

Create a stable, data-driven slot system that:
- spins on player trigger,
- resolves random symbols,
- applies gameplay effects safely,
- integrates with run state and tower defense combat.

## Inputs to Collect

1. Current Godot version and project structure.
2. Slot trigger timing (between waves, during pause windows, etc.).
3. Currency source and spin cost rules.
4. Symbol catalog and rarity weights.
5. Effect categories (economy, tower buff, enemy debuff, event).

If details are missing, use safe defaults and label assumptions.

## Implementation Workflow

### Step 1: Define Data Model

Create data resources for symbols:
- `id`
- `display_name`
- `rarity_weight`
- `effect_type`
- `effect_payload`
- `stack_rules`

Use deterministic keys; avoid hardcoding text in logic scripts.

### Step 2: Build Roll Service

Implement a roll service that:
- validates spin currency,
- performs weighted random picks,
- returns roll results as structured data,
- emits events/signals for UI and game systems.

### Step 3: Build Effect Resolver

Map symbol results to gameplay effects via resolver functions:
- Economy (grant currency)
- Tower modifiers (damage/range/fire rate)
- Enemy modifiers (slow/armor break)
- Run events (one-time modifiers)

Resolver must include validation and bounds checking to prevent broken states.

### Step 4: Build UI Flow

Implement slot UI scene with:
- spin button + disabled states,
- reel/result presentation,
- result summary panel,
- confirmation/continue action.

Mobile requirements:
- touch-safe controls,
- legible text,
- minimal frame spikes.

### Step 5: Integrate with Run Loop

Connect slot system to run state machine:
- enter slot phase,
- spin and resolve,
- apply effects,
- return to combat phase.

Ensure pause/state transitions cannot double-apply effects.

### Step 6: Logging and Balancing Hooks

Track per run:
- spins used,
- symbols rolled,
- effect outcomes,
- win/loss correlation.

Use this to tune rarity weights and effect values.

## Acceptance Criteria

- Spin cannot occur without sufficient currency.
- Weighted results are reproducible with seed in test mode.
- Effects apply once per resolution and respect caps.
- UI and run loop remain stable across repeated spins.
- Slot system is data-driven and easy to expand.

## Guardrails

- No pay-to-win linkage to slot outcomes.
- Keep effect caps and clamp values for stability.
- Prefer script modularity over monolithic controller scripts.

## Reference Files

- For implementation checklist: `references/implementation-checklist.md`
- For sample Godot script skeletons: `assets/templates/slot-system-skeletons.md`
