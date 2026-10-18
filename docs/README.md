# Tài liệu dự án H26-087 Standard

Thư mục này chứa toàn bộ tài liệu hướng dẫn, lịch sử thay đổi, báo cáo review và kiểm định chất lượng của Catalog Standard H26-087.

## Cấu trúc thư mục

### 1. `guides/` — Hướng dẫn kỹ thuật
- [`RULE-TAXONOMY.md`](guides/RULE-TAXONOMY.md): Định nghĩa phân loại tầng (`layer`) và lĩnh vực kiểm soát (`concerns`).
- [`SCHEMA-V2-UPGRADE-GUIDE.md`](guides/SCHEMA-V2-UPGRADE-GUIDE.md): Hướng dẫn nâng cấp và migration sang Schema v2.
- [`WAVE6-SEMANTIC-QA.md`](guides/WAVE6-SEMANTIC-QA.md): Quy trình Semantic QA và sử dụng checklist theo vai trò.

### 2. `history/` — Lịch sử nâng cấp & Migration
- [`V1.4-CATALOG-EXPANSION-REVIEW.md`](history/V1.4-CATALOG-EXPANSION-REVIEW.md): Báo cáo mở rộng catalog v1.4 (+13 standard mới).
- [`V2-UPGRADE-REVIEW.md`](history/V2-UPGRADE-REVIEW.md): Đánh giá nâng cấp hệ thống tiêu chuẩn v2.
- [`V2.1-STABILIZATION-REVIEW.md`](history/V2.1-STABILIZATION-REVIEW.md): Ổn định cấu trúc sau nâng cấp v2.
- [`DATE-TIME-TIMEZONE-ADDITION-REVIEW.md`](history/DATE-TIME-TIMEZONE-ADDITION-REVIEW.md): Bổ sung standard `STD-DATETIME`.
- [`ADDED-STANDARDS-REVIEW.md`](history/ADDED-STANDARDS-REVIEW.md): Bổ sung `STD-API-HTTP` và `STD-DEEP-LINK`.
- [`QC-TESTING-MIGRATION-REVIEW.md`](history/QC-TESTING-MIGRATION-REVIEW.md): Đánh giá di chuyển nhóm QA/Testing sang nhóm 11.
- [`STRUCTURE-ALIGNMENT-REVIEW.md`](history/STRUCTURE-ALIGNMENT-REVIEW.md): Rà soát cấu trúc catalog.
- [`VIETNAMESE-TRANSLATION-REVIEW.md`](history/VIETNAMESE-TRANSLATION-REVIEW.md): Đánh giá chuẩn hóa ngôn ngữ tiếng Việt.

### 3. `reviews/` — Báo cáo Review nội dung theo Wave & Chuyên đề
- [`COMPREHENSIVE-AUDIT-2026-10-17.md`](reviews/COMPREHENSIVE-AUDIT-2026-10-17.md): Audit toàn diện catalog v2.2, lỗi đã sửa, standard bổ sung và backlog v3.
- [`CONTENT-HARDENING-WAVE1.md`](reviews/CONTENT-HARDENING-WAVE1.md): Wave 1 — Security, Auth, Critical Operations.
- [`CONTENT-WAVE2-REVIEW.md`](reviews/CONTENT-WAVE2-REVIEW.md): Wave 2 — Backend, Operations, UX.
- [`CONTENT-WAVE3-REVIEW.md`](reviews/CONTENT-WAVE3-REVIEW.md): Wave 3 — Web & Mobile platform standards.
- [`WAVE5-CONTENT-QA.md`](reviews/WAVE5-CONTENT-QA.md): Wave 5 — Layer & Concern taxonomy review.
- [`FLUTTER-RUNTIME-STANDARDS-2026-10-16.md`](reviews/FLUTTER-RUNTIME-STANDARDS-2026-10-16.md): Review standard runtime cho Flutter (2026-10-16).

### 4. `quality/` — Checklist & Semantic Audit
- Checklist theo vai trò: `CHECKLIST-DEVELOPER.md`, `CHECKLIST-QC.md`, `CHECKLIST-ARCHITECT_BA.md`, `CHECKLIST-DEVOPS_SRE.md`, `CHECKLIST-AI_AGENT.md`.
- Mẫu checklist dự án: `SAMPLE-REACT-DEVELOPER.md`, `SAMPLE-FLUTTER-QC.md`.
- Báo cáo audit: `SEMANTIC-AUDIT.md`, `semantic-audit.json`.
