# Content Hardening Wave 3 — v2.4

## Phạm vi
- Dựa trên v2.3, nâng nội dung **24 standard generic skeleton** trong nhóm Governance, Foundation, API/Data, RN, .NET và Performance Testing.
- Mỗi standard có **5 quy tắc riêng cho chủ đề**; thay 3 rule skeleton bằng các quy tắc có điều kiện và ví dụ kiểm chứng, bổ sung `R004` và `R005`.
- Tổng thêm **48 rule**; giữ nguyên các ID `R001`–`R003` hiện có và lưu lịch sử title gốc trong registry. Nội dung rule cũ được thay nên downstream cần review lại interpretation.
- Không sửa schema, tooling/resolver, applicability, dependency hoặc rule references.

## Lưu ý chất lượng
- Bộ phát hiện skeleton giảm từ 24 xuống 0; đây là phép đo mẫu văn bản, **không phải bảo đảm 100% standard đều đủ sâu**.
- Còn 220 boilerplate detail và 220 example trong các standard bán khuôn mẫu, thuộc Wave 4.
- Không tự đặt ngưỡng mang tính bắt buộc cho mọi project; số liệu trong ví dụ là minh họa, cần thay bằng SLO/chính sách theo profile.

## Kiểm tra
Chạy `python3 tools/standard_tool.py validate`, `lint-content`, `test-profiles`, `generate --check`.
