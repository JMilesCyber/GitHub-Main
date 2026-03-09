# Slot System Skeletons (Godot / GDScript)

## Suggested Files
- `scripts/slot/slot_symbol.gd`
- `scripts/slot/slot_roll_service.gd`
- `scripts/slot/slot_effect_resolver.gd`
- `scripts/slot/slot_controller.gd`

## Roll Service Skeleton
```gdscript
class_name SlotRollService
extends Node

func roll_symbols(symbol_pool: Array, picks: int, rng: RandomNumberGenerator) -> Array:
    var results: Array = []
    for i in picks:
        results.append(_weighted_pick(symbol_pool, rng))
    return results

func _weighted_pick(pool: Array, rng: RandomNumberGenerator):
    var total_weight := 0.0
    for s in pool:
        total_weight += max(0.0, float(s.rarity_weight))
    if total_weight <= 0.0:
        return null

    var r := rng.randf_range(0.0, total_weight)
    var cursor := 0.0
    for s in pool:
        cursor += max(0.0, float(s.rarity_weight))
        if r <= cursor:
            return s
    return pool.back()
```

## Effect Resolver Skeleton
```gdscript
class_name SlotEffectResolver
extends Node

func apply_symbol(symbol, run_state, combat_state) -> void:
    match symbol.effect_type:
        "economy":
            _apply_economy(symbol.effect_payload, run_state)
        "tower_buff":
            _apply_tower_buff(symbol.effect_payload, combat_state)
        "enemy_debuff":
            _apply_enemy_debuff(symbol.effect_payload, combat_state)
        "event":
            _apply_event(symbol.effect_payload, run_state, combat_state)
        _:
            push_warning("Unknown effect_type: %s" % symbol.effect_type)
```
