# V2 Content Quality Upgrade

## Scope

This v2 pass upgrades the content quality of the catalog while intentionally keeping `standard-import.schema.json` unchanged. `STRUCTURE.txt` remains the source of truth for catalog membership and grouping.

## Results

- Catalog remains **115 standards/capabilities** with no missing or extra code versus `STRUCTURE.txt`.
- Upgraded detailed domain-specific content for **56 standards/capabilities** that previously used the generic three-rule skeleton.
- Normalized and refined dependency semantics across the catalog and selected technology standards.
- Dependency vocabulary is now consistently limited to **`extends`**, **`implements`**, **`uses`**, and **`aligns_with`**.
- Removed all remaining generic rule skeletons: **0 generic skeleton standards remain**.
- Added detailed failure/recovery/security/concurrency/migration/operational guidance in the previously weakest areas: UI/UX, API/Data, Backend, Operations, Web/Mobile Security, and Payment.
- Added contextual integration guidance and failure-oriented common issues to upgraded items.
- Upgraded content files use version **2.0.0**; dependency-only refinements use a minor version bump.

## Key design changes

1. **Standard = how work must/should be done.** Rules now describe concrete engineering behavior and review evidence.
2. **Capability = reusable functional behavior.** `CAP-PAYMENT` now covers durable state, idempotency, provider callback verification, reconciliation, monetary audit data and refund outcomes.
3. **Platform standards specialize foundations.** Web/mobile/backend standards extend or use cross-cutting standards instead of duplicating them.
4. **Technology standards implement platform intent.** React, Flutter, React Native, .NET and PostgreSQL dependency relationships were refined around `implements`/`uses`/`aligns_with`.
5. **Failure paths are first-class.** Retry, duplicate delivery, concurrency, stale/offline UI, migration compatibility, rollback, disaster recovery and incident behavior are explicitly addressed.

## Examples of strengthened standards

- `STD-UI-STATE`: explicit initial/loading/data/empty/refreshing/error/offline/stale semantics and deterministic async transitions.
- `STD-FEEDBACK`: inline vs toast vs banner vs dialog policy; raw backend errors must not be shown to users.
- `STD-DATA-MIG`: expand–migrate–contract, locking/backfill safety and rollback/forward-fix strategy.
- `STD-BE-CONCUR`: idempotency, optimistic concurrency, durable invariants and race-condition testing.
- `STD-API-RT`: reconnect/re-subscribe, event envelope/versioning, missed/duplicate event reconciliation and token refresh.
- `STD-WEB-SEC` / `STD-MOB-SEC`: platform-specific security rules instead of generic security prose.
- `STD-SLO`, `STD-DR`, `STD-BACKUP`, `STD-INCIDENT`, `STD-RUNBOOK`: concrete operational lifecycle and recovery expectations.

## Validation

The final v2 package is checked for:

- JSON syntax validity.
- Compliance with `standard-import.schema.json`.
- Filename ↔ `code` consistency.
- No missing/extra catalog codes versus `STRUCTURE.txt`.
- No dangling/self dependencies.
- Dependency type limited to the four normalized semantic values.
- No remaining generic three-rule skeleton.

## Deferred to v3

The import schema is intentionally unchanged in v2. A future schema upgrade should consider:

- Stable Rule IDs such as `API-REST-001`.
- Machine-readable verification/evidence metadata.
- A richer layer taxonomy beyond `ui/api/db/process/security`.
- Standard maturity separate from activation status.
- Applicability/project profiles and dependency resolution policy.
- Rule-level exceptions/waivers and compliance result reporting.
