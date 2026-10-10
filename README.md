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
- `STD-REACT*`, `STD-RQ`, `STD-TS` chỉ áp dụng profile web/hybrid có `react`.
- `STD-NEXT` chỉ áp dụng khi khai báo `nextjs`.
- `STD-FL-*` chỉ áp dụng mobile/hybrid có `flutter`.
- `CAP-*` chỉ được bật khi feature tương ứng là `true`, ví dụ `features.payment=true`.
- Project gồm nhiều phần như Flutter + ASP.NET Core nên dùng `project_type: "hybrid"` trong schema v2 hiện tại. Mô hình component-based được dành cho schema v3 để tránh breaking change ngay ở bước ổn định này.

## Chất lượng nội dung

Hiện catalog vẫn còn technical debt về nội dung. `content-quality-baseline.json` ghi nhận mức nợ hiện tại để ngăn regression. Giai đoạn tiếp theo nên giảm baseline theo thứ tự: security/privacy/payment/auth/data migration → backend/ops → UX → phần còn lại.

Mỗi rule khi nâng cấp nên có nội dung kiểm chứng được, ví dụ good/bad thực tế, ngưỡng định lượng khi phù hợp và dẫn chiếu chuẩn ngoài đáng tin cậy.

## Tài liệu lịch sử

Các review/changelog cũ được chuyển vào `docs/history/`; hướng dẫn schema nằm trong `docs/guides/`. Những tài liệu này không phải nguồn sự thật về số lượng standard hiện tại.

## Wave 5: Layer & concern taxonomy

Trường `layer` nay mô tả **tầng chịu trách nhiệm thực thi**; trường tùy chọn `concerns` mô tả **chủ đề kiểm soát**. Ví dụ một quy tắc phân quyền ở API dùng `layer: "api"`, `concerns: ["security", "authorization"]`. Chi tiết enum, ví dụ, giới hạn tương thích và cách lọc ở [`docs/guides/RULE-TAXONOMY.md`](docs/guides/RULE-TAXONOMY.md).

**Lưu ý migration:** Schema vẫn có `schemaVersion=2` nhưng đã mở rộng tập enum; importer v2 hardcode giá trị cũ cần cập nhật trước khi đọc bản này. Với importer v1, dùng `export-v1` và chấp nhận taxonomy bị thu hẹp khi xuất.

## Wave 6: Semantic QA & checklist theo vai trò

Xem `docs/guides/WAVE6-SEMANTIC-QA.md` và các báo cáo dưới `docs/quality/`. Chúng là dữ liệu dẫn xuất, không thay đổi schema hoặc rule IDs.
