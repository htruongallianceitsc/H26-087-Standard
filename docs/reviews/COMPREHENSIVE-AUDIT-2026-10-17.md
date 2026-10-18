# H26-087 Standard — Comprehensive Audit 2026-10-17

## 1. Kết luận điều hành

Catalog có nền tảng tốt và đã vượt mức một bộ coding convention thông thường: có schema v2, Rule ID ổn định, dependency semantics, applicability resolver, taxonomy `layer/concerns`, profile mẫu, content lint, semantic QA và checklist theo vai trò. Tuy nhiên bản ZIP được audit có một regression đóng gói nghiêm trọng và một số khoảng trống cấp hệ thống khiến catalog chưa thật sự an toàn khi dùng làm nguồn policy tự động cho nhiều loại project.

Sau đợt audit này, catalog được nâng lên **v2.2.0**, gồm **156 standard/capability** và **761 rule**. Validator, content lint, semantic inventory, profile tests và generated artifacts đều được đưa về trạng thái đồng bộ.

## 2. Blocker phát hiện trong bản đầu vào

Bản ZIP chứa lại hai file legacy tại `01-governance-delivery/STD-TEST.json` và `01-governance-delivery/STD-PERF-TEST.json`, trong khi bản canonical đã tồn tại ở `11-quality-assurance-testing/`. Hệ quả:

- Trùng `code` và Rule ID trên catalog.
- File legacy dùng schema cũ, làm validator báo tổng cộng 35 lỗi.
- `generate --check` không thể hoàn tất vì duplicate key.
- Content lint tái xuất hiện skeleton/boilerplate mà tài liệu lịch sử cho biết đã được loại trước đó.

Hai file legacy đã được loại khỏi source. Đây là lý do vòng đóng gói cuối phải được xác minh lại từ chính ZIP đầu ra thay vì chỉ test working folder.

## 3. Khoảng trống coverage đã bổ sung

### 3.1 `STD-VULN` — Vulnerability & Remediation Lifecycle

Bổ sung lifecycle từ intake đến closure: nguồn phát hiện thống nhất, owner, risk-based prioritization, waiver có hạn dùng, retest/regression, affected-version tracking, emergency response và disclosure handling. Mục tiêu là nối các scan/security control hiện có với một quy trình remediation có thể audit.

### 3.2 `STD-CRYPTO` — Cryptography & Key Lifecycle

Bổ sung boundary mà `STD-SEC`/secret management chưa mô tả đủ: primitive được phê duyệt, cấm custom crypto, KMS/HSM và least privilege, rotation/version/revocation/re-encryption, CSPRNG, password KDF và fail-closed encryption. Standard chỉ tự động áp dụng khi `features.cryptography=true`.

### 3.3 `STD-AI-APP` — AI/LLM Application Runtime & Safety

Tách rõ AI chạy trong sản phẩm khỏi `STD-AI-SEC` dành cho AI coding agent. Bao phủ prompt/RAG/tool input như dữ liệu không tin cậy, least-privilege agency, human approval cho action nhạy cảm, validate output, authorization trong RAG, version/evaluation model-prompt-tool, privacy/retention, budget/loop/timeout/fallback. Tự động áp dụng khi `features.ai=true`.

### 3.4 `STD-EVENT` — Event Contract & Event-Driven Integration

Bổ sung contract cho event bus/stream: envelope, schema/version compatibility, delivery semantics và idempotency, ordering/sequence, DLQ-replay-retention và observability. Tự động áp dụng khi `features.event_driven=true`.

### 3.5 `STD-TENANCY` — Multi-Tenancy & Tenant Isolation

Bổ sung tenant context tin cậy, isolation xuyên DB/cache/object/search/queue/job, tenant-scoped uniqueness/idempotency/quota, support/admin audit, noisy-neighbor control và tenant lifecycle/offboarding. Tự động áp dụng khi `features.multi_tenant=true`.

### 3.6 Supply-chain provenance/attestation

Không tạo standard mới để tránh trùng `STD-DEP`, `STD-CI` và `STD-DEPLOY`. Thay vào đó:

- `STD-CI` v1.2.0 thêm pin/control third-party actions, build image, toolchain; và generate provenance/attestation gắn commit/workflow/artifact digest.
- `STD-DEPLOY` v1.2.0 thêm verify signature/provenance trước promotion đối với artifact nhạy cảm.

## 4. Resolver/applicability — sửa over-selection

Trước audit, nhiều standard tùy tính năng mang `scope: all`, vì vậy auto resolver kéo realtime, webhook, upload, search, audit, analytics, queue, PWA... vào project không dùng các năng lực này. Một số technology pack cũng dùng selector quá rộng, ví dụ TanStack Query chỉ cần React hoặc BLoC/go_router chỉ cần Flutter.

Đã feature-gate các standard tùy chọn bằng các flag như `auth`, `audit`, `analytics`, `cache`, `upload`, `search`, `workflow`, `webhook`, `realtime`, `pwa`, `offline_mode`, `push_notification`, `event_driven`, `background_jobs`, `third_party_integration`, `ai`, `multi_tenant`, `cryptography`... UI/UX standards cũng không còn tự động áp cho backend/API-only project.

Package-specific selector được siết lại:

| Standard | Selector chính |
|---|---|
| `STD-RQ` | `tanstack-query` |
| `STD-TS` | `typescript` |
| `STD-FL-BLOC` | `flutter-bloc` |
| `STD-FL-ROUTE` | `go-router` |
| `STD-DOTNET-EF` | `ef-core` |

React Native technology standards cũng hỗ trợ `hybrid` nhất quán với Flutter.

Kết quả profile regression test: React auto giảm từ khoảng **118 → 100** standard; Flutter auto giảm **121 → 106**, trong khi dependency bắt buộc và baseline vẫn được resolve đầy đủ. Profile `enterprise-saas-ai.auto.example.json` được thêm để test tổ hợp SaaS + multi-tenancy + event-driven + AI + crypto.

## 5. Schema, validator và catalog integrity

`standard-import-v2.schema.json` được harden:

- `code` phải theo pattern `STD-*` hoặc `CAP-*`.
- `version` phải theo SemVer hợp lệ.
- `scope: all` không được mang selector làm thay đổi nghĩa.
- `scope: conditional` phải có ít nhất một selector không rỗng.

Project profile schema yêu cầu feature key theo `snake_case` ổn định.

`tools/standard_tool.py validate` nay kiểm thêm:

- filename phải khớp `code`;
- folder phải khớp `category`;
- mọi active standard/rule phải tồn tại trong `rule-id-registry.json`;
- semantic audit phải bao phủ toàn bộ rule hiện hành và không giữ stale ref.

`catalog-manifest.json` được nâng `catalogVersion` lên **2.2.0** và có thêm `ruleCount` để tool bên ngoài không phải scan lại toàn catalog chỉ để biết inventory.

## 6. Semantic QA và CI

Inventory semantic trước audit bị stale: nó phản ánh 137 standard / 635 rule trong khi catalog đã lớn hơn, khiến các wave mới không xuất hiện trong checklist theo vai trò.

Đã thêm `tools/semantic_audit.py` để tái tạo deterministic:

- `docs/quality/semantic-audit.json`;
- `docs/quality/SEMANTIC-AUDIT.md`;
- checklist Developer, QC, DevOps/SRE, Architect/BA, AI Agent.

Tool giữ metadata review thủ công của Rule ID cũ, tự gợi ý role/verification cho Rule ID mới và có `--check` để CI bắt stale inventory. Workflow catalog quality đã được bổ sung bước này.

Các heuristic `manual_review_flags` là hàng đợi review nội dung, **không phải validation failure**. Content baseline cho skeleton/boilerplate hiện vẫn bằng 0.

## 7. Tài liệu và source-of-truth

Các tài liệu lịch sử có thể giữ số liệu tại thời điểm của từng wave. Riêng `SCHEMA-V2-UPGRADE-GUIDE.md` đã được sửa để nói rõ 137/503 là mốc migration ban đầu và hướng người đọc sang `catalog-manifest.json`/validator để lấy số hiện hành.

README được cập nhật command semantic QA, selector package-specific, feature-gating, trạng thái content debt và tổng quan v2.2.

## 8. Những hạng mục chưa nên nhét vào v2.2

### 8.1 Component-based applicability — đề xuất schema v3

`project_type: hybrid` hiện vẫn mô tả cả project ở một cấp. Với monorepo lớn gồm web + mobile + backend + worker, resolver chưa thể nói “standard này chỉ áp cho component A”. V3 nên có `components[]`, mỗi component có type/platform/technologies/features riêng, rồi resolve theo component và tổng hợp ở project level.

Đây là thay đổi mô hình dữ liệu và có nguy cơ breaking change, nên không thực hiện âm thầm trong v2.2.

### 8.2 Boolean applicability expression

Conditions hiện phù hợp cho AND đơn giản nhưng chưa biểu diễn tốt `(A OR B) AND NOT C`. V3 nên cân nhắc expression tree hoặc DSL nhỏ, có schema và evaluator deterministic.

### 8.3 Rule lifecycle và control mapping

Nên bổ sung trong v3: `deprecated`, `superseded_by`, effective date, normative references và mapping tới control/framework ngoài. Điều này giúp audit/compliance mà không nhét URL/reference lặp vào `detail` của từng rule.

### 8.4 Technology packs theo nhu cầu tổ chức

Catalog hiện chưa có pack chuyên sâu cho mọi stack như NestJS/Node, Redis, MySQL/SQL Server, Kubernetes. Không nên thêm chỉ để “đủ danh sách”; nên thêm khi stack đó thực sự là platform chuẩn của tổ chức, nếu không resolver và maintenance cost sẽ tăng không cần thiết.

## 9. Tiêu chí chấp nhận v2.2

Bản phát hành chỉ được coi là hợp lệ khi đồng thời đạt:

```bash
python3 tools/standard_tool.py validate --strict-content
python3 tools/standard_tool.py lint-content --strict
python3 tools/semantic_audit.py --check
python3 tools/standard_tool.py test-profiles
python3 tools/standard_tool.py generate --check
```

Ngoài ra phải test `export-v1`, compile các Python tool và giải nén chính artifact ZIP phát hành sang thư mục sạch để chạy lại toàn bộ gate trên.

## 10. Đánh giá tổng thể

Sau v2.2, bộ H26-087 đủ tốt để dùng như một **policy catalog có máy đọc được**, thay vì chỉ là tài liệu tham khảo. Điểm mạnh hiện tại là identity ổn định, resolver, traceability, semantic QA và phạm vi chuẩn xuyên web/mobile/backend/ops. Hướng nâng cấp có giá trị cao tiếp theo không phải tăng số lượng standard bằng mọi giá, mà là schema v3 component-aware, rule lifecycle/reference mapping và tiếp tục review semantic theo risk/stack thực tế của tổ chức.
