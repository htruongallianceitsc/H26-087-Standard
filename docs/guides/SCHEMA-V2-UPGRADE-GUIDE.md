# Hướng dẫn nâng cấp Standard Catalog JSON Schema v2

## Phạm vi nâng cấp

Bộ dữ liệu gồm **137 standard/capability** và **503 rule**, vẫn giữ nguyên `code`, `category`, `status`, `version`, nội dung rule, thứ tự rule và các dependency hiện hữu. Ba năng lực bổ sung:

1. **Rule ID & Traceability:** Mỗi rule có trường `id` ổn định dạng `R001`, `R002`... trong phạm vi một standard. Mã tham chiếu đầy đủ là `STD-API-HTTP#R001`. Để theo dõi đổi tên, tệp `rule-id-registry.json` ghi nhận `id` và title khi bắt đầu áp dụng v2. Trường `traceability.related_rules` / `requirement_tags` là tùy chọn để bổ sung liên kết về sau; không tự suy diễn liên kết từ tên rule.
2. **Applicability & Project Profile:** Mỗi standard có `applicability`, xác định phạm vi theo loại project, nền tảng, công nghệ và cờ feature. Thư mục `project-profiles/` chứa schema profile và mẫu React/Flutter. Các trường `project_types`, `platforms`, `technologies` có quy tắc OR trong từng trường, AND giữa các trường khác nhau, AND với từng điều kiện `conditions`. Nếu danh sách rỗng hoặc không có trường, đó là **không giới hạn**; `scope=all` áp dụng mọi profile. Ví dụ điều kiện `features.deep_link == true` phải được khai báo rõ ràng. Các gán applicability theo nhóm công nghệ là **đề xuất khởi tạo**, cần kiểm duyệt nghiệp vụ trước khi ép buộc áp dụng trong dự án thực tế.
3. **Dependency & Inheritance Semantics:** Giữ cấu trúc `depends_on` cũ, chuẩn hóa `dependency_type` gồm `requires`, `extends`, `uses`, `implements`, `aligns_with`. `requires` phải có target trong catalog và được đưa vào tập selected, nhưng **không kế thừa rule**. `extends` vừa chọn dependency vừa kế thừa rule theo tham chiếu đầy đủ. `uses`, `implements` và `aligns_with` chỉ là liên kết thông tin, không tự áp đặt/kế thừa rule. Không thực hiện override bằng title. Chu trình `requires/extends`, tham chiếu bắt buộc thiếu và trùng rule ID đều bị chặn ở validator.

## Tương thích ngược — rất quan trọng

- `standard-import.schema.json` được **giữ nguyên bản v1**; `standard-import-v2.schema.json` là schema mới có `schemaVersion=2`.
- 137 JSON nguồn trong catalog đã dùng **schemaVersion 2**; không đưa trực tiếp vào API importer chỉ đọc v1, vì importer v1 có `additionalProperties:false` và chỉ chấp nhận schemaVersion 1.
- Nếu backend chưa cập nhật, xuất v1 qua lệnh dưới đây và import các JSON xuất ra. Khi xuất v1, công cụ chỉ bỏ các trường mới (`rule.id`, `traceability`, `applicability`, `dependency_policy`) và đặt `schemaVersion=1`; các giá trị cũ không thay đổi.
- Nếu backend nâng cấp v2, phải bổ sung validate schemaVersion, lưu hoặc xử lý metadata mới, kiểm tra dependency, và xác định cách quản lý Rule ID/Project Profile. **Không được giả định backend đã hỗ trợ v2 chỉ vì các file validate thành công.**
- Các liên kết traceability project cần tham chiếu `standard code + rule id` (không dựa title hoặc vị trí mảng). Rule thêm mới phải lấy ID kế tiếp; tuyệt đối không đánh số lại rule sau khi sắp xếp hoặc xóa.

## Lệnh sử dụng

Tại thư mục gốc repo:

```bash
python -m pip install jsonschema
python tools/standard_tool.py validate
python tools/standard_tool.py resolve --profile project-profiles/flutter-mobile.example.json
python tools/standard_tool.py resolve --profile project-profiles/react-web.example.json
python tools/standard_tool.py export-v1 --out ./exports/compatible-v1
```

Resolver là **bản triển khai tham khảo cục bộ**: `selected_standards` được chọn chính xác, tự thêm các dependency bắt buộc và kế thừa; nếu bỏ `selected_standards` thì chọn toàn bộ standard matching profile. Dependency bắt buộc không hợp profile sẽ báo lỗi để người quản lý điều chỉnh profile hoặc metadata, không lặng lẽ bỏ qua.

## Lưu ý riêng về kế thừa

`extends` biểu diễn kế thừa rule theo danh tính `CODE#Rxxx`, **không sao chép rule vào JSON con**. `requires` không kế thừa. Khi các chuẩn được lựa chọn độc lập đồng thời với chuẩn con, consumer cần deduplicate theo định danh đầy đủ. Nếu muốn cơ chế override sau này, phải thiết kế contract riêng kèm dấu vết phê duyệt và không sửa đổi mã rule gốc.

## Các file cập nhật / bổ sung

- 137 JSON standard/capability: thêm `rules[].id`, `applicability`, `dependency_policy`, `schemaVersion=2`.
- `standard-import-v2.schema.json`: schema v2 mới.
- `standard-import.schema.json`: giữ nguyên schema v1.
- `rule-id-registry.json`: danh mục định danh rule.
- `project-profiles/project-profile.schema.json` và các profile mẫu.
- `tools/standard_tool.py`: validate, resolve, xuất ngược v1.
- `SCHEMA-V2-UPGRADE-GUIDE.md`: hướng dẫn này.
- `STRUCTURE.txt` và `STRUCTURE_API_RESPONSE.js`: nội dung cây danh mục standard giữ nguyên, vì không thêm/đổi vị trí standard; bổ sung chú thích schema v2 ở phần tài liệu hỗ trợ.

## Kiểm tra trước khi áp dụng thực tế

1. Review lại `applicability` cho từng project và các standard đặc thù; không xem mapping tự động theo nhóm là chính sách chính thức.
2. Kiểm thử importer backend v2, đặc biệt khi lưu trữ `rules[].id` và khi cập nhật standard đã import.
3. Backup standard/quan hệ gốc trước khi migration và thử import vào staging.
4. Nếu cần tiếp tục sử dụng API v1, dùng output `export-v1` thay vì import nguyên v2.
