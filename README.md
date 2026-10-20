# H26-087 Standard Catalog

Bộ catalog tiêu chuẩn dùng chung cho project, tổ chức theo các tầng governance → foundation → API/data → UX → platform → technology → capability → operations → QA.

## Nguồn sự thật

Các file `STD-*.json` và `CAP-*.json` là **nguồn sự thật duy nhất**. Ba file sau là dữ liệu sinh tự động và không sửa thủ công:

- `catalog-manifest.json`
- `STRUCTURE.txt`
- `STRUCTURE_API_RESPONSE.js`

Schema chính hiện tại là `standard-import-v2.schema.json`. Khi hệ thống cũ chỉ nhận schema v1, dùng lệnh `export-v1`.

## Kiểm tra catalog

```bash
python3 tools/standard_tool.py validate
python3 tools/standard_tool.py lint-content
python3 tools/semantic_audit.py --check
python3 tools/standard_tool.py test-profiles
python3 tools/standard_tool.py generate --check
```

`validate --strict-content` hoặc `lint-content --strict` được dùng khi muốn bắt buộc catalog không còn content debt. Trong giai đoạn chuyển tiếp, `lint-content` so sánh với `content-quality-baseline.json`: CI fail nếu số skeleton/boilerplate tăng thêm.

## Resolver

Resolver hỗ trợ hai chế độ:

1. **Explicit**: profile có `selected_standards`, resolver chỉ lấy các standard được chọn, baseline và dependency bắt buộc.
2. **Automatic**: bỏ `selected_standards`, resolver tự chọn theo `applicability`.

`STD-REQ` và `STD-TEST` là baseline ngầm định của mọi profile đủ điều kiện; không cần lặp `requires` ở hàng chục standard.

Ví dụ:

```bash
python3 tools/standard_tool.py resolve --profile project-profiles/react-web.example.json
python3 tools/standard_tool.py resolve --profile project-profiles/react-web.auto.example.json
python3 tools/standard_tool.py resolve --profile project-profiles/flutter-mobile.auto.example.json
```

## Quy tắc applicability

- `STD-WEB-*` thuộc tầng platform nên không khóa vào React.
- `STD-REACT*` áp dụng profile web/hybrid có `react`; các pack theo thư viện chỉ bật khi khai báo đúng technology, ví dụ `STD-RQ` cần `tanstack-query`, `STD-TS` cần `typescript`.
- `STD-NEXT` chỉ áp dụng khi khai báo `nextjs`.
- `STD-FL-*` áp dụng mobile/hybrid có `flutter`; các pack package-specific như `STD-FL-BLOC` và `STD-FL-ROUTE` lần lượt cần `flutter-bloc` và `go-router`.
- Các standard tùy tính năng (realtime, webhook, search, upload, audit, analytics, workflow, PWA, AI, multi-tenancy...) chỉ tự động được chọn khi feature tương ứng bật.
- `CAP-*` chỉ được bật khi feature tương ứng là `true`, ví dụ `features.payment=true`.
- Project gồm nhiều phần như Flutter + ASP.NET Core nên dùng `project_type: "hybrid"` trong schema v2 hiện tại. Mô hình component-based được dành cho schema v3 để tránh breaking change ngay ở bước ổn định này.

## Chất lượng nội dung

`content-quality-baseline.json` hiện ở **0** cho các nhóm skeleton/boilerplate mà công cụ kiểm tra; CI chặn mọi regression của các metric này. Song song, `tools/semantic_audit.py` giữ inventory semantic QA và checklist theo vai trò đồng bộ với toàn bộ rule hiện hành. Các `manual_review_flags` trong semantic audit là tín hiệu cần con người xem lại, không đồng nghĩa lỗi schema hay lỗi CI.

Mỗi rule khi nâng cấp tiếp tục phải có nội dung kiểm chứng được, ví dụ good/bad thực tế, ngưỡng định lượng khi phù hợp và dẫn chiếu chuẩn ngoài đáng tin cậy.

## Cấu trúc tài liệu

Tất cả tài liệu bổ trợ đã được gom gọn gàng trong thư mục `docs/`:
- `docs/guides/`: Hướng dẫn schema v2, rule taxonomy và quy trình QA.
- `docs/history/`: Lịch sử các đợt nâng cấp, migration và mở rộng catalog.
- `docs/reviews/`: Các báo cáo review chi tiết theo từng wave / chuyên đề (Wave 1, 2, 3, 5, Flutter runtime...).
- `docs/quality/`: Báo cáo audit semantic và checklist phân theo vai trò (Developer, QC, Architect, DevOps...).

*Lưu ý: Các tài liệu lịch sử/review phản ánh trạng thái tại thời điểm ghi nhận, không phải nguồn sự thật thay thế cho các file standard hiện hành.*

## Wave 5: Layer & concern taxonomy

Trường `layer` nay mô tả **tầng chịu trách nhiệm thực thi**; trường tùy chọn `concerns` mô tả **chủ đề kiểm soát**. Ví dụ một quy tắc phân quyền ở API dùng `layer: "api"`, `concerns: ["security", "authorization"]`. Chi tiết enum, ví dụ, giới hạn tương thích và cách lọc ở [`docs/guides/RULE-TAXONOMY.md`](docs/guides/RULE-TAXONOMY.md).

**Lưu ý migration:** Schema vẫn có `schemaVersion=2` nhưng đã mở rộng tập enum; importer v2 hardcode giá trị cũ cần cập nhật trước khi đọc bản này. Với importer v1, dùng `export-v1` và chấp nhận taxonomy bị thu hẹp khi xuất.

## Wave 6: Semantic QA & checklist theo vai trò

Xem `docs/guides/WAVE6-SEMANTIC-QA.md` và các báo cáo dưới `docs/quality/`. Chúng là dữ liệu dẫn xuất, không thay đổi schema hoặc rule IDs.

## Catalog v2.2 — audit toàn diện 2026-10-17

Bản v2.2 sửa regression file legacy trùng `STD-TEST`/`STD-PERF-TEST`, harden schema/validator/CI, đồng bộ Semantic QA và cải thiện resolver để giảm over-selection. Catalog bổ sung các standard hệ thống còn thiếu: `STD-VULN`, `STD-CRYPTO`, `STD-AI-APP`, `STD-EVENT`, `STD-TENANCY`; đồng thời tăng yêu cầu provenance/attestation trong `STD-CI` và `STD-DEPLOY`.

Catalog hiện hành có **156 standard/capability** và **761 rule**. Nguồn số liệu chuẩn là `catalog-manifest.json`; không dùng số lượng trong tài liệu lịch sử để suy ra trạng thái hiện tại.

Xem báo cáo: [`docs/reviews/COMPREHENSIVE-AUDIT-2026-10-17.md`](docs/reviews/COMPREHENSIVE-AUDIT-2026-10-17.md).

## Image & Media Delivery

`STD-MEDIA` trong `03-api-integration-data/` là chuẩn chung về thumbnail, responsive variants, format, media URL versioning, cache nhiều tầng và media privacy. Có thể bật `features.media: true` khi resolver chọn standard tự động. Các chuẩn `STD-WEB-PERF`, `STD-MOB-PERF`, `STD-BE-FILE`, `STD-FILE-LIFECYCLE` có rule bổ trợ tương ứng. Xem [hướng dẫn triển khai](docs/STD-MEDIA-IMPLEMENTATION-GUIDE.md).
