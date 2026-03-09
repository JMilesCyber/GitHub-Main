# Roguelike Tower Defense Slot Game for Mobile (Godot) - Design Doc

## Summary
Build a mobile-first Godot game that blends tower defense combat, roguelike run progression, and a slot-machine luck system. Players defend through escalating levels, adapt when towers are destroyed, and earn run rewards to unlock permanent progression. Monetization includes paid cosmetics (skins) only.

## Objectives / What Success Looks Like
- [ ] Core loop is engaging in 5-10 minute mobile sessions.
- [ ] Tower defense and slot mechanics are tightly integrated.
- [ ] Runs are replayable through randomization and build variety.
- [ ] Meta progression unlocks towers, enemies, maps, and skins.
- [ ] Paid content is cosmetic-only (no gameplay power).
- [ ] MVP performance target: stable play on mid-range mobile devices.

## Scope
- In scope: Mobile Godot build, run-based progression, tower destruction/replacement loop, slot mechanic, unlock systems, cosmetic skin monetization.
- Out of scope (MVP): Multiplayer, live events, user-generated content, deep story campaign.

## Core Gameplay Loop
1. Start run with base towers and starter resources.
2. Play wave-based tower defense level.
3. Earn spin/resource currency from kills and objectives.
4. Trigger slot-machine phase for random modifiers.
5. Apply outcomes to towers, economy, or enemy state.
6. Continue waves with adaptive tower replacement/modification.
7. End run and grant permanent rewards.
8. Spend rewards in meta progression (upgrades/unlocks/skins).

## System Requirements

### Tower Defense Combat
- Path-based enemy movement and wave escalation.
- Multiple tower archetypes with upgrade paths.
- Destruction mechanics that force mid-run adaptation.
- Repair/replace/modify options during run.

### Slot Machine Luck Layer
- Spins consume earned run currency.
- Symbol outcomes can grant buffs, debuffs, resources, or events.
- Synergy combinations enable build archetypes.
- Risk/reward balance with controlled variance.

### Roguelike Progression
- Run-to-run variability through random choices.
- Persistent currency awarded at run end.
- Unlocks for towers, enemies, maps, and skins.
- Fail-forward economy so failed runs still progress player.

### Content Unlocks
- Towers: new units and upgrade branches.
- Enemies: additional types and challenge modifiers.
- Maps: new path layouts and hazards.
- Skins: cosmetics for towers and slot machine visuals.

### Monetization
- Paid skins only (cosmetic monetization).
- No stat boosts sold via IAP.
- Optional premium skin packs and themed cosmetics.

## Mobile Technical Design (Godot)
- Engine: Godot 4.x.
- Data-driven resources for towers/enemies/symbols.
- Modular scene architecture for combat entities and UI.
- Performance controls: pooling, reduced overdraw, scalable VFX.
- Touch-first UX with clear controls and legible HUD.

## MVP Content Targets
- 4-6 tower types.
- 6-8 enemy types.
- 3-5 levels/maps.
- 20-30 slot symbols/effects.
- One progression track for currency unlocks and upgrades.

## Milestone Plan
1. Pre-production: system specs, feature priorities, prototyping plan.
2. Prototype: core tower combat + slot integration proof.
3. Vertical slice: one polished map with complete run loop.
4. MVP production: expand content, progression, monetization.
5. Soft launch: balancing, analytics, retention tuning.
6. Launch prep: polish, bug fixing, store readiness.

## Acceptance Criteria
- New players can complete onboarding and understand loop quickly.
- At least 3 viable build archetypes emerge from slot/tower synergies.
- Tower destruction/rebuild loop is functional and meaningful.
- Progression rewards are persistent and visible.
- Paid skins work and do not affect gameplay power.

## Risks and Mitigations
- RNG feels unfair: use weighted outcomes and reroll/protection options.
- Over-complexity: staged unlocks and guided first-run tutorialization.
- Balance volatility: telemetry-informed tuning and effect caps.
- Monetization perception risk: strict cosmetic-only policy.

## Agent-Friendly Execution Tasks
1. Create Godot mobile project skeleton and scene layout.
2. Implement wave spawner, enemy paths, and level flow.
3. Implement tower placement, targeting, and shooting.
4. Add tower HP/destruction and repair/replace interactions.
5. Build slot-machine UI and effect resolution framework.
6. Connect slot outcomes to live combat modifiers.
7. Implement run-end rewards and persistent save data.
8. Add unlock menus for towers, enemies, maps, and skins.
9. Integrate cosmetic skin system and paid skin catalog plumbing.
10. Profile performance and produce mobile test build.
