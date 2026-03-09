# Slot System Implementation Checklist

## Data
- [ ] Define symbol data resource/schema
- [ ] Create initial symbol set with rarity weights
- [ ] Add validation for duplicate ids and invalid weights

## Runtime
- [ ] Implement weighted roll function
- [ ] Add spin currency validation
- [ ] Return structured roll result object

## Effects
- [ ] Add resolver dispatch by `effect_type`
- [ ] Add clamping/caps for stackable buffs
- [ ] Add fail-safe handling for unknown effect types

## UI
- [ ] Create slot scene and controls
- [ ] Show results and applied effects clearly
- [ ] Disable input while resolving

## Integration
- [ ] Hook slot phase into run state machine
- [ ] Prevent duplicate apply on resume/retry
- [ ] Add automated smoke test for 20 sequential spins

## Telemetry
- [ ] Log spin count, outcomes, and win/loss impact
- [ ] Add debug command to force deterministic seed
