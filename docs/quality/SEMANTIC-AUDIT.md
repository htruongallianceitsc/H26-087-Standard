# Semantic Quality Audit

This report is generated from the current catalog. Heuristic flags require human review; they are not automatic failures.

- Standards/capabilities: **157**
- Rules: **778**
- Rules flagged for manual review: **63**
- Potential overlap pairs retained from reviewed history: **1**

## Flags

- `can_xem_concern_testing`: 21
- `detail_ngan`: 5
- `example_short`: 2
- `vi_du_ngan`: 38

## Role coverage

- `developer`: 502 rules
- `qc`: 487 rules
- `devops_sre`: 71 rules
- `architect_ba`: 122 rules
- `ai_agent`: 391 rules

## Notes

- Existing manually reviewed role/verification metadata is preserved when the rule ID still exists.
- New rule IDs receive deterministic role and verification suggestions from layer/concern metadata.
- Run `python3 tools/semantic_audit.py --check` in CI to prevent stale checklist inventory.
